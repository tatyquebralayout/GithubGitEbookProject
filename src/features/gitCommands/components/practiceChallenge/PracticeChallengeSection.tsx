import React, { useState } from 'react';
import InteractiveTerminal from './InteractiveTerminal';
import RepositoryGraph from './RepositoryGraph';
import ChallengeProgress from './ChallengeProgress';
import { Commit, FileSystemStructure, BranchMeta } from './practiceChallengeTypes';

const initialFileSystem: FileSystemStructure = {
  '~': { type: 'dir', content: {} }
};

const PracticeChallengeSection: React.FC = () => {
  // Initialize states (moved from InteractiveTerminal)
  const [isRepoInitialized, setIsRepoInitialized] = useState(false);
  const [stagedFiles, setStagedFiles] = useState<string[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [currentBranch, setCurrentBranch] = useState<string>('main');
  const [allBranches, setAllBranches] = useState<string[]>(['main']);
  const [branchDetails, setBranchDetails] = useState<Map<string, BranchMeta>>(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
  const [workingDirectoryFiles, setWorkingDirectoryFiles] = useState<string[]>([]);

  // New states for file system simulation
  const [fileSystem, setFileSystem] = useState<FileSystemStructure>(JSON.parse(JSON.stringify(initialFileSystem))); // Deep copy
  const [currentPath, setCurrentPath] = useState<string[]>(['~']); // Start at home directory
  const [gitRepoPath, setGitRepoPath] = useState<string[] | null>(null); // Path where .git is initialized

  // Estado para o repositório remoto simulado 'origin'
  // Mapeia nome do branch no remoto para o ID do commit HEAD desse branch no remoto
  const [remoteOrigin, setRemoteOrigin] = useState<{[branchName: string]: string | null}>({});

  // --- Função Auxiliar para HEAD de Branch ---
  const getBranchHeadCommit = (branchName: string): Commit | undefined => {
    // 1. Priorizar o commit mais recente feito DIRETAMENTE neste branch
    const directBranchCommit = commits.find(c => c.branch === branchName);
    if (directBranchCommit) {
      return directBranchCommit;
    }
    // 2. Se não houver commit direto, usar o parentCommitId dos detalhes do branch
    const meta = branchDetails.get(branchName);
    if (meta && meta.parentCommitId) {
      return commits.find(c => c.id === meta.parentCommitId);
    }
    return undefined; // Nenhum commit encontrado para este branch
  };

  // --- Start of Refactored Command Handling ---

  const handleShellCommand = (mainCommand: string, commandParts: string[]): string => {
    // Logic for cd, mkdir, touch, clear (shell aspects) will go here
    if (mainCommand === 'clear') {
      setIsRepoInitialized(false);
      setStagedFiles([]);
      setCommits([]);
      setCurrentBranch('main');
      setAllBranches(['main']);
      setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
      setWorkingDirectoryFiles([]);
      setFileSystem(JSON.parse(JSON.stringify(initialFileSystem))); 
      setCurrentPath(['~']); 
      setGitRepoPath(null);
      return ''; // Clear command output is empty for the shell part
    }

    if (mainCommand === 'mkdir') {
      if (commandParts.length > 1) {
        const dirName = commandParts.slice(1).join(' ');
        // Navigate to current path in fileSystem
        let effectiveFsLevel = fileSystem['~'].content;
        if (currentPath.length === 1 && currentPath[0] === '~') {
            // Already at root content
        } else {
            for (const part of currentPath.slice(1)) {
                if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
                    effectiveFsLevel = effectiveFsLevel[part].content!;
                } else {
                    return `mkdir: cannot create directory '${dirName}': No such file or directory in path`;
                }
            }
        }
        
        if (!effectiveFsLevel) return `mkdir: cannot create directory '${dirName}': Invalid current path`;

        // Create new directory
        if (!effectiveFsLevel[dirName]) {
          effectiveFsLevel[dirName] = { type: 'dir', content: {} };
          setFileSystem({ ...fileSystem }); // Trigger re-render
          return '';
        } else {
          return `mkdir: cannot create directory '${dirName}': File exists`;
        }
      } else {
        return 'mkdir: missing operand';
      }
    }

    if (mainCommand === 'cd') {
      const arg1 = commandParts[1];
      if (commandParts.length > 1 && arg1 !== undefined) {
        const targetDir = commandParts.slice(1).join(' ');
        if (targetDir === '..') {
          if (currentPath.length > 1) {
            setCurrentPath(prev => prev.slice(0, -1));
          }
          return '';
        } else if (targetDir === '~') {
            setCurrentPath(['~']);
            return '';
        }
        
        const isAbsolutePath = targetDir.startsWith('~/');
        let pathSegmentsToNavigate: string[];
        let baseFsLevelForTraversal: FileSystemStructure | undefined;
        let newPathAttempt: string[];

        if (isAbsolutePath) {
            newPathAttempt = ['~'];
            baseFsLevelForTraversal = fileSystem['~']?.content;
            pathSegmentsToNavigate = targetDir.substring(2).split('/').filter(p => p);
        } else {
            newPathAttempt = [...currentPath];
            let tempFs = fileSystem['~'].content;
            if(currentPath.length > 1) {
                 for(const part of currentPath.slice(1)){
                    if(tempFs && tempFs[part] && tempFs[part].type === 'dir'){
                        tempFs = tempFs[part].content!;
                    } else {
                         return `cd: ${targetDir}: No such file or directory`;
                    }
                }
            }
            baseFsLevelForTraversal = tempFs;
            pathSegmentsToNavigate = targetDir.split('/').filter(p => p);
        }

        if (!baseFsLevelForTraversal) {
             return `cd: ${targetDir}: No such file or directory`;
        }

        let currentTraversalLevel = baseFsLevelForTraversal;
        for (const segment of pathSegmentsToNavigate) {
          if (currentTraversalLevel[segment] && currentTraversalLevel[segment].type === 'dir') {
            currentTraversalLevel = currentTraversalLevel[segment].content!;
            newPathAttempt.push(segment);
          } else {
            return `cd: ${targetDir}: No such file or directory`;
          }
        }
        setCurrentPath(newPathAttempt);
        return '';
      } else {
        setCurrentPath(['~']);
        return '';
      }
    }

    if (mainCommand === 'touch') {
      if (commandParts.length > 1) {
        const fileName = commandParts.slice(1).join(' ');
        
        // Navigate to current path in fileSystem to create the file
        let effectiveFsLevel = fileSystem['~'].content;
        if (currentPath.length === 1 && currentPath[0] === '~') {
            // Already at root content
        } else {
            for (const part of currentPath.slice(1)) {
                if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
                    effectiveFsLevel = effectiveFsLevel[part].content!;
                } else {
                    return `touch: cannot touch '${fileName}': No such file or directory in path`;
                }
            }
        }

        if (!effectiveFsLevel) return `touch: cannot touch '${fileName}': Invalid current path`;
        
        // Create file
        if (!effectiveFsLevel[fileName]) { // File doesn't exist
            effectiveFsLevel[fileName] = { type: 'file' };
            setFileSystem({ ...fileSystem }); // Trigger re-render

            // If inside a git repo, add to workingDirectoryFiles
            if (gitRepoPath && currentPath.join('/').startsWith(gitRepoPath.join('/'))) {
                const relativePathParts = currentPath.slice(gitRepoPath.length);
                const fullRelativePath = [...relativePathParts, fileName].filter(p => p).join('/');
                if (fullRelativePath && !workingDirectoryFiles.includes(fullRelativePath) && !stagedFiles.includes(fullRelativePath)) {
                    setWorkingDirectoryFiles(prev => [...prev, fullRelativePath]);
                }
            }
            return ''; 
        } else { // File/directory with this name already exists
            // touch command updates timestamps, but for simulation, we can just return empty
            return ''; 
        }
      } else {
        return 'touch: missing file operand';
      }
    }

    // If no shell command matched, it will fall through and processCommand will handle it
    return ''; // Should be caught by processCommand if no specific shell command is found
  };

  // --- Git Command Execution Functions ---
  const executeGitInit = (): string => {
    setGitRepoPath([...currentPath]); 
    setIsRepoInitialized(true);
    setStagedFiles([]);
    setCommits([]);
    setWorkingDirectoryFiles([]); 
    setCurrentBranch('main'); 
    setAllBranches(['main']); 
    setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
    return `Initialized empty Git repository in ${currentPath.join('/')}/.git/`;
  };

  const executeGitStatus = (): string => {
    let statusMessage = `On branch ${currentBranch}\n`;
    if (commits.length === 0) statusMessage += 'No commits yet\n';
    
    if (stagedFiles.length > 0) {
        statusMessage += '\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n';
        stagedFiles.forEach(file => { statusMessage += `\tnew file:   ${file}\n`; });
        statusMessage += '\n';
    }
    if (workingDirectoryFiles.length > 0) {
        statusMessage += 'Untracked files:\n  (use "git add <file>..." to include in what will be committed)\n';
        workingDirectoryFiles.forEach(file => { statusMessage += `\t${file}\n`; });
        statusMessage += '\n';
    }
    if (stagedFiles.length === 0 && workingDirectoryFiles.length === 0) {
        if (commits.length === 0) statusMessage += 'nothing to commit (create/copy files and use "git add" to track)';
        else statusMessage += 'nothing to commit, working tree clean';
    }
    return statusMessage.trim();
  };

  const executeGitAdd = (args: string[]): string => {
    const fileArg = args[0];

    const getCurrentDirNode = () => {
        let currentFsLevel = fileSystem['~'];
        for (const part of currentPath.slice(1)) {
            if (currentFsLevel && currentFsLevel.type === 'dir' && currentFsLevel.content && currentFsLevel.content[part]) {
                currentFsLevel = currentFsLevel.content[part];
            } else {
                return null;
            }
        }
        return (currentFsLevel && currentFsLevel.type === 'dir') ? currentFsLevel : null;
    };

    const currentDirNode = getCurrentDirNode();
    if (!currentDirNode || !currentDirNode.content) {
        return "Error: Could not read current directory structure.";
    }

    if (fileArg === '.') {
        const filesInCurrentDir = Object.entries(currentDirNode.content)
            .filter(([_, node]) => node.type === 'file')
            .map(([name]) => name);

        if (filesInCurrentDir.length > 0) {
            const newFilesToStage: string[] = [];
            const filesToRemoveFromWd: string[] = [];

            filesInCurrentDir.forEach(fileName => {
                if (!gitRepoPath) return; 
                const relativePathParts = currentPath.slice(gitRepoPath.length);
                const fullRelativePath = [...relativePathParts, fileName].filter(p => p).join('/');
                
                if (fullRelativePath && !stagedFiles.includes(fullRelativePath)) {
                    newFilesToStage.push(fullRelativePath);
                }
                if (workingDirectoryFiles.includes(fullRelativePath)){
                    filesToRemoveFromWd.push(fullRelativePath);
                }
            });

            if (newFilesToStage.length > 0) {
                setStagedFiles(prev => [...new Set([...prev, ...newFilesToStage])]);
            }
            if (filesToRemoveFromWd.length > 0) {
                setWorkingDirectoryFiles(prevWDF => prevWDF.filter(f => !filesToRemoveFromWd.includes(f)));
            }

        } else if (stagedFiles.length === 0 && workingDirectoryFiles.length === 0) {
            const defaultFile = 'README.md';
            if (!stagedFiles.includes(defaultFile)) setStagedFiles(prev => [...prev, defaultFile]);
        }
        return '';
    } else if (fileArg) {
        if (currentDirNode.content[fileArg] && currentDirNode.content[fileArg].type === 'file') {
            if (!gitRepoPath) return "Error: Git repository path not set.";
            const relativePathParts = currentPath.slice(gitRepoPath.length);
            const fullRelativePath = [...relativePathParts, fileArg].filter(p => p).join('/');

            if (fullRelativePath) {
                if (!stagedFiles.includes(fullRelativePath)) {
                    setStagedFiles(prev => [...new Set([...prev, fullRelativePath])]);
                }
                if (workingDirectoryFiles.includes(fullRelativePath)){
                     setWorkingDirectoryFiles(prevWDF => prevWDF.filter(f => f !== fullRelativePath));
                }
            }
            return '';
        } else {
            return `fatal: pathspec '${fileArg}' did not match any files known to git`;
        }
    } else {
        return 'Nothing specified, nothing added.\nMaybe you wanted to say \'git add .\'?';
    }
  };

  const executeGitCommit = (commandParts: string[]): string => {
    if (stagedFiles.length === 0) return 'nothing to commit, working tree clean';
    
    let commitMessage = '';
    const mFlagIndex = commandParts.indexOf('-m');
    if (mFlagIndex !== -1 && mFlagIndex < commandParts.length - 1) {
      commitMessage = commandParts.slice(mFlagIndex + 1).join(' ').replace(/^[\"']|[\"']$/g, '');
    } else {
      return `error: pathspec '-<COMMIT_MESSAGE>' did not match any file(s) known to git, or missing commit message after -m`;
    }

    if (!commitMessage) return 'Aborting commit due to empty commit message.';

    // Find the current HEAD of the current branch to set as parent
    // Commits are stored in reverse chronological order (newest first)
    // The true HEAD of a branch is the latest commit *made on that branch* OR the commit it branched from if no new commits.
    // For parentId, we need the latest commit that currentBranch points to.
    // This could be a commit made directly on this branch, or a commit from its parent branch if this branch hasn't diverged.
    
    // Usar a nova função auxiliar
    const headForParentRef = getBranchHeadCommit(currentBranch);
    const parentId = headForParentRef ? headForParentRef.id : null;


    const newCommit: Commit = {
        id: Math.random().toString(36).substring(2, 7),
        parentId: parentId, // Set the parent ID
        message: commitMessage,
        author: 'User <user@gitsheet.com>',
        date: new Date().toUTCString(),
        branch: currentBranch, // Branch onde o commit foi efetivamente criado
    };
    setCommits(prev => [newCommit, ...prev]); // Adiciona no início (mais recente)
    const filesCommittedCount = stagedFiles.length;
    setStagedFiles([]);
    return `[${currentBranch} ${newCommit.id}] ${newCommit.message}\n ${filesCommittedCount} file${filesCommittedCount > 1 ? 's' : ''} changed`;
  };

  const executeGitLog = (/*args: string[]*/ _args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';

    // Determine the actual HEAD commit for the current branch
    // Usar a nova função auxiliar
    const headCommitForLog = getBranchHeadCommit(currentBranch);
    
    if (!headCommitForLog) {
        // Se ainda não há headCommitForLog (ex: main branch sem commits, ou um branch órfão teórico)
        return `fatal: your current branch '${currentBranch}' does not have any commits yet`;
    }

    const commitsToDisplay: Commit[] = [];
    let currentLogCommit: Commit | undefined = headCommitForLog;

    while (currentLogCommit) {
        commitsToDisplay.push(currentLogCommit);
        if (currentLogCommit.parentId) {
            currentLogCommit = commits.find(c => c.id === currentLogCommit!.parentId);
        } else {
            currentLogCommit = undefined; // Chegou ao commit raiz (sem pai)
        }
    }

    if (commitsToDisplay.length === 0) { // Dupla verificação, embora headCommitForLog já cubra.
      return `fatal: your current branch '${currentBranch}' does not have any commits yet`;
    }
    
    let logOutput = '\n';
    commitsToDisplay.forEach(commit => {
        const isHeadOfCurrentBranch = commit.id === headCommitForLog!.id;
        // Para a indicação de outros branches apontando para este commit, podemos adicionar no futuro.
        // Por agora, apenas HEAD -> currentBranch
        const headIndicator = isHeadOfCurrentBranch ? ` (HEAD -> ${currentBranch})` : '';
        
        logOutput += `commit ${commit.id}${headIndicator}\n`;
        logOutput += `Author: ${commit.author}\n`;
        logOutput += `Date:   ${commit.date}\n`;
        logOutput += `\n    ${commit.message}\n\n`;
    });
    return logOutput.trim();
  };

  const executeGitBranch = (args: string[]): string => {
    const newBranchName = args[0];
    if (!newBranchName) {
      let branchList = '';
      allBranches.sort().forEach(branch => {
        if (branch === currentBranch) {
          branchList += `* ${branch}\n`;
        } else {
          branchList += `  ${branch}\n`;
        }
      });
      return branchList.trim();
    } else {
      if (newBranchName.includes(' ')) {
        return `error: '${newBranchName}' is not a valid branch name.`;
      }
      if (allBranches.includes(newBranchName)) {
        return `fatal: A branch named '${newBranchName}' already exists.`;
      }
      setAllBranches(prev => [...prev, newBranchName]);
      // Usar a nova função auxiliar para obter o HEAD do branch atual
      const headCommitOnCurrentBranch = getBranchHeadCommit(currentBranch);
      setBranchDetails(prev => new Map(prev).set(newBranchName, {
        parentBranch: currentBranch,
        parentCommitId: headCommitOnCurrentBranch ? headCommitOnCurrentBranch.id : null
      }));
      return ''; 
    }
  };

  const executeGitCheckout = (args: string[]): string => {
    const arg1 = args[0];
    const arg2 = args[1];

    if (arg1 === '-b') {
        const newBranchName = arg2;
        if (!newBranchName) {
            return "error: switch `b' needs a value";
        }
        if (newBranchName.includes(' ')) {
            return `error: '${newBranchName}' is not a valid branch name.`;
        }
        if (allBranches.includes(newBranchName)) {
            return `fatal: A branch named '${newBranchName}' already exists.`;
        }
        setAllBranches(prev => [...prev, newBranchName]);
        // Usar a nova função auxiliar para obter o HEAD do branch atual
        const headCommitOnCurrentBranchCheckout = getBranchHeadCommit(currentBranch);
        setBranchDetails(prev => new Map(prev).set(newBranchName, {
            parentBranch: currentBranch,
            parentCommitId: headCommitOnCurrentBranchCheckout ? headCommitOnCurrentBranchCheckout.id : null
        }));
        setCurrentBranch(newBranchName);
        return `Switched to a new branch '${newBranchName}'`;
    } else {
        const branchToCheckout = arg1;
        if (!branchToCheckout) {
            return "Error: branch name required."; 
        }
        if (!allBranches.includes(branchToCheckout)) {
            return `error: pathspec '${branchToCheckout}' did not match any file(s) known to git.`;
        }
        if (currentBranch === branchToCheckout) {
            return `Already on '${branchToCheckout}'`;
        }
        setCurrentBranch(branchToCheckout);
        return `Switched to branch '${branchToCheckout}'`;
    }
  };

  const executeGitPush = (args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';

    const remoteName = args[0];
    const branchToPush = args[1];

    if (remoteName !== 'origin') {
      return `fatal: '${remoteName}' does not appear to be a git repository (or remote not supported in this simulation)`;
    }
    if (!branchToPush) {
      return 'error: src refspec <branchname> does not match any.';
    }
    if (!allBranches.includes(branchToPush)) {
        return `error: src refspec ${branchToPush} does not match any.`;
    }

    const localHeadCommit = getBranchHeadCommit(branchToPush);
    if (!localHeadCommit) {
      return `error: failed to push some refs to 'origin'. Branch ${branchToPush} has no commits.`;
    }

    const remoteBranchHeadCommitId = remoteOrigin[branchToPush] || null;

    // Função auxiliar para verificar ancestralidade
    const isAncestor = (commitIdToCheck: string, potentialAncestorId: string): boolean => {
      let currentSearchTargetId: string | null | undefined = commitIdToCheck;

      while (currentSearchTargetId) {
        const foundCommit = commits.find(c => c.id === currentSearchTargetId);
        if (!foundCommit) return false; // Não encontrou o commit na cadeia, não pode ser ancestral

        if (foundCommit.id === potentialAncestorId) return true; // Encontrou o ancestral

        currentSearchTargetId = foundCommit.parentId; // Prepara para procurar o pai no próximo loop
      }
      return false; // Chegou ao fim da cadeia (parentId é null/undefined) sem encontrar
    };

    let successMessage = '';

    if (remoteBranchHeadCommitId) {
      // Branch existe no remoto, verificar fast-forward
      if (localHeadCommit.id === remoteBranchHeadCommitId) {
        return `Everything up-to-date`;
      }
      if (isAncestor(localHeadCommit.id, remoteBranchHeadCommitId)) {
        // Fast-forward
        setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));
        successMessage = `To origin/${branchToPush}\n  ${remoteBranchHeadCommitId.substring(0,7)}..${localHeadCommit.id.substring(0,7)}  ${branchToPush} -> ${branchToPush}`;
      } else {
        return `error: failed to push some refs to 'origin'\nTo prevent you from losing history, non-fast-forward updates were rejected.\nMerge the remote changes (e.g. 'git pull') before pushing again.`;
      }
    } else {
      // Branch não existe no remoto (novo branch)
      setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));
      successMessage = `To origin/${branchToPush}\n * [new branch]      ${branchToPush} -> ${branchToPush}`;
    }
    return successMessage;
  };

  const handleGitCommand = (gitSubCommand: string | undefined, commandParts: string[]): string => {
    const remainingArgs = commandParts.slice(2); // Arguments after 'git <subCommand>'

    // Check for repo initialization (unless it's 'git init')
    if (gitSubCommand !== 'init' && !isRepoInitialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }

    // Check if git commands (except init) are run inside a repo path
    if (gitSubCommand !== 'init' && isRepoInitialized && gitRepoPath) {
        const currentPathString = currentPath.join('/');
        const repoPathString = gitRepoPath.join('/');
        if (!currentPathString.startsWith(repoPathString)) {
            return `fatal: not a git repository (or any of the parent directories): .git. Current path ${currentPathString} is not inside ${repoPathString}`;
        }
    }

    if (gitSubCommand === 'init') {
      return executeGitInit();
    }

    if (gitSubCommand === 'status') {
      return executeGitStatus();
    }

    if (gitSubCommand === 'add') {
      return executeGitAdd(remainingArgs);
    }

    if (gitSubCommand === 'commit') {
      return executeGitCommit(commandParts);
    }

    if (gitSubCommand === 'log') {
      return executeGitLog(remainingArgs);
    }

    if (gitSubCommand === 'branch') {
      return executeGitBranch(remainingArgs);
    }

    if (gitSubCommand === 'checkout') {
      return executeGitCheckout(remainingArgs);
    }

    if (gitSubCommand === 'push') {
      return executeGitPush(remainingArgs);
    }

    // If gitSubCommand is defined but not caught by any case above, it's an unknown git command.
    if (gitSubCommand) {
        return `git: '${gitSubCommand}' is not a git command. See 'git --help'.`;
    }
    // If only 'git' was typed (no subcommand)
    return "Usage: git <command> [<args>]"; 
  };

  // processCommand is now defined in PracticeChallengeSection
  // It directly uses and updates states defined in this component.
  const processCommand = (command: string): string => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return '';
    const commandParts = trimmedCommand.split(/\s+/);
    const mainCommand = commandParts[0].toLowerCase();
    const firstArg = commandParts[1]?.toLowerCase();

    if (mainCommand === 'git') {
      return handleGitCommand(firstArg, commandParts);
    } else if (['cd', 'mkdir', 'touch', 'clear'].includes(mainCommand)) {
      const shellOutput = handleShellCommand(mainCommand, commandParts);
      // If handleShellCommand returns non-empty, it's a specific message (like an error or handled output)
      // If it returns empty, it means the command was processed successfully without specific output, or it wasn't found (for the fallback message)
      // However, we expect known shell commands to be fully handled or return specific errors from within handleShellCommand.
      // An empty string from handleShellCommand here implies success with no output (e.g. cd, mkdir, touch on success)
      // or that it was 'clear' which also returns empty.
      if (shellOutput) return shellOutput; // Return explicit error messages from shell commands
      return ''; // For successful shell commands with no output (cd, mkdir, touch, clear)
    } else {
      return `bash: command not found: ${mainCommand}`;
    }
  };
  // --- End of Refactored Command Handling ---

  const generateMermaidDiagramDefinition = (): string => {
    if (!isRepoInitialized || !gitRepoPath) {
      return 'gitGraph LR;\n  A[Repositório não inicializado];'; // Use gitGraph for consistency
    }

    let mermaidString = 'gitGraph LR;\n';
    const chronologicalCommits = [...commits].reverse(); // Commits in chronological order
    
    if (chronologicalCommits.length === 0) {
      // If no commits, just show the current branch (usually main)
      mermaidString += `  checkout ${currentBranch};\n`;
      mermaidString += '  commit id: "Initial", tag: "Sem commits ainda", type: REVERSE;\n';
      return mermaidString;
    }

    // Simulate the sequence of operations for Mermaid
    // Order all branches: main first, then others alphabetically for stable diagram
    let mermaidCheckoutBranch = ''; // Track the last branch checked out in Mermaid script
    const declaredMermaidBranches = new Set<string>();

    // Start with the initial branch (main)
    mermaidString += `  checkout main;\n`;
    mermaidCheckoutBranch = 'main';
    declaredMermaidBranches.add('main');

    // Process commits in chronological order
    chronologicalCommits.forEach(commit => {
      const commitBranchMeta = branchDetails.get(commit.branch);

      // If this commit is on a branch that hasn't been declared yet (and it's not main)
      if (commit.branch !== 'main' && !declaredMermaidBranches.has(commit.branch) && commitBranchMeta) {
        if (commitBranchMeta.parentBranch && commitBranchMeta.parentBranch !== mermaidCheckoutBranch) {
          mermaidString += `  checkout ${commitBranchMeta.parentBranch};\n`;
          mermaidCheckoutBranch = commitBranchMeta.parentBranch;
        }
        mermaidString += `  branch ${commit.branch};\n`;
        declaredMermaidBranches.add(commit.branch);
      }

      // Checkout the commit's branch if not already on it
      if (commit.branch !== mermaidCheckoutBranch) {
        mermaidString += `  checkout ${commit.branch};\n`;
        mermaidCheckoutBranch = commit.branch;
      }
      
      // Add the commit
      const tag = `${commit.id.substring(0,5)}: ${commit.message.substring(0,20)}${commit.message.length > 20 ? '...' : ''}`;
      mermaidString += `  commit id: "${commit.id}", tag: "${tag}";\n`;
    });

    // Ensure the final currentBranch is checked out for HEAD indication
    if (currentBranch !== mermaidCheckoutBranch) {
        mermaidString += `  checkout ${currentBranch};\n`;
    }

    return mermaidString;
  };

  const diagramDef = generateMermaidDiagramDefinition();

  return (
    <section id="game-section" className="pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-github-fg-default">Prática do Desafio</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna 1: Terminal Interativo */}
          <div className="lg:col-span-1 bg-slate-900 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <InteractiveTerminal 
              onProcessCommand={processCommand}
              currentPath={currentPath}
            />
          </div>

          {/* Coluna 2: Visualização de Grafo (Mermaid.js) */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <RepositoryGraph diagramDefinition={diagramDef} />
          </div>

          {/* Coluna 3: Progresso do Usuário */}
          <div className="lg:col-span-1 bg-gray-50 p-4 rounded-lg shadow-md h-[350px] flex flex-col">
            <ChallengeProgress />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeChallengeSection; 