import { useState, useCallback } from 'react';
import { Commit, FileSystemStructure, BranchMeta } from '../components/practiceChallenge/practiceChallengeTypes';

// TODO: Considerar se initialFileSystem deve ser definido aqui ou passado como argumento.
const initialFileSystem: FileSystemStructure = {
  '~': { type: 'dir', content: {} }
};

interface GitPracticeChallengeState {
  // Estados relacionados ao Git
  isRepoInitialized: boolean;
  stagedFiles: string[];
  commits: Commit[];
  currentBranch: string;
  allBranches: string[];
  branchDetails: Map<string, BranchMeta>;
  remoteOrigin: {[branchName: string]: string | null};
  // Estados relacionados ao File System
  fileSystem: FileSystemStructure;
  currentPath: string[];
  gitRepoPath: string[] | null;
  workingDirectoryFiles: string[];
  // Estado derivado para a UI
  diagramDefinition: string;
}

interface GitPracticeChallengeAPI {
  processCommand: (command: string) => string;
  currentPathDisplay: string;
  currentPathArray: string[];
  diagramDefinition: string;
  // Outros estados ou funções que a UI possa precisar diretamente
}

export const useGitPracticeChallenge = (): GitPracticeChallengeAPI => {
  // --- Estados ---
  const [isRepoInitialized, setIsRepoInitialized] = useState<boolean>(false);
  const [stagedFiles, setStagedFiles] = useState<string[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);
  const [currentBranch, setCurrentBranch] = useState<string>('main');
  const [allBranches, setAllBranches] = useState<string[]>(['main']);
  const [branchDetails, setBranchDetails] = useState<Map<string, BranchMeta>>(
    new Map([['main', { parentBranch: null, parentCommitId: null }]])
  );
  const [remoteOrigin, setRemoteOrigin] = useState<{[branchName: string]: string | null}>({});
  
  // File System
  const [fileSystem, setFileSystem] = useState<FileSystemStructure>(
    JSON.parse(JSON.stringify(initialFileSystem)) // Deep copy
  );
  const [currentPath, setCurrentPath] = useState<string[]>(['~']);
  const [gitRepoPath, setGitRepoPath] = useState<string[] | null>(null);
  const [workingDirectoryFiles, setWorkingDirectoryFiles] = useState<string[]>([]);

  // --- Funções Auxiliares --- 
  const getBranchHeadCommit = useCallback((branchName: string): Commit | undefined => {
    const directBranchCommit = commits.find(c => c.branch === branchName && c.id !== 'Initial');
    if (directBranchCommit) return directBranchCommit;
    
    const meta = branchDetails.get(branchName);
    if (meta && meta.parentCommitId) {
      return commits.find(c => c.id === meta.parentCommitId);
    }
    return undefined;
  }, [commits, branchDetails]);

  const isAncestor = useCallback((commitIdToCheck: string, potentialAncestorId: string): boolean => {
    let currentSearchTargetId: string | null | undefined = commitIdToCheck;
    const visited = new Set<string>(); // Para evitar loops infinitos em grafos corrompidos (improvável aqui)

    while (currentSearchTargetId) {
      if (visited.has(currentSearchTargetId)) return false; // Loop detectado
      visited.add(currentSearchTargetId);

      const foundCommit = commits.find(c => c.id === currentSearchTargetId);
      if (!foundCommit) return false; 
      if (foundCommit.id === potentialAncestorId) return true; 
      currentSearchTargetId = foundCommit.parentId;
    }
    return false;
  }, [commits]);

  // --- Funções de Execução de Comandos Shell ---
  const handleShellCommand = useCallback((mainCommand: string, commandParts: string[]): string => {
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
      setRemoteOrigin({});
      return ''; 
    }

    if (mainCommand === 'mkdir') {
        if (commandParts.length > 1) {
            const dirName = commandParts.slice(1).join(' ');
            let effectiveFsLevel = fileSystem['~'].content;
            if (currentPath.length > 1) {
                for (const part of currentPath.slice(1)) {
                    if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
                        effectiveFsLevel = effectiveFsLevel[part].content!;
                    } else {
                        return `mkdir: cannot create directory '${dirName}': No such file or directory in path`;
                    }
                }
            }
            if (!effectiveFsLevel) return `mkdir: cannot create directory '${dirName}': Invalid current path`;

            if (!effectiveFsLevel[dirName]) {
                effectiveFsLevel[dirName] = { type: 'dir', content: {} };
                setFileSystem(prevFs => ({ ...prevFs }));
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
            } else if (targetDir === '~' || targetDir === '~/') {
                setCurrentPath(['~']);
                return '';
            }
            
            const isAbsolutePath = targetDir.startsWith('~/');
            let pathSegmentsToNavigate: string[];
            let baseFsLevelForTraversal: FileSystemStructure['~']['content'];
            let newPathAttempt: string[];

            if (isAbsolutePath) {
                newPathAttempt = ['~'];
                baseFsLevelForTraversal = fileSystem['~'].content;
                pathSegmentsToNavigate = targetDir.substring(targetDir.startsWith('~/') ? 2 : 1).split('/').filter(p => p);
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
                baseFsLevelForTraversal = tempFs!;
                pathSegmentsToNavigate = targetDir.split('/').filter(p => p);
            }

            if (!baseFsLevelForTraversal) return `cd: ${targetDir}: No such file or directory (base path issue)`;

            let currentTraversalLevel = baseFsLevelForTraversal;
            for (const segment of pathSegmentsToNavigate) {
                if (currentTraversalLevel[segment] && currentTraversalLevel[segment].type === 'dir') {
                    currentTraversalLevel = currentTraversalLevel[segment].content!;
                    newPathAttempt.push(segment);
                } else {
                    return `cd: ${targetDir.split('/').slice(0, pathSegmentsToNavigate.indexOf(segment) + (isAbsolutePath ? 1 : newPathAttempt.length -1 )).join('/')}/${segment}: No such file or directory`;
                }
            }
            setCurrentPath(newPathAttempt);
            return '';
        } else if (arg1 === undefined) { // cd para home
            setCurrentPath(['~']);
            return '';
        } else { // cd com argumento mas não válido acima
             return `cd: ${arg1}: No such file or directory`;
        }
    }

    if (mainCommand === 'touch') {
        if (commandParts.length > 1) {
            const fileName = commandParts.slice(1).join(' ');
            let effectiveFsLevel = fileSystem['~'].content;
            if (currentPath.length > 1) {
                for (const part of currentPath.slice(1)) {
                    if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
                        effectiveFsLevel = effectiveFsLevel[part].content!;
                    } else {
                        return `touch: cannot touch '${fileName}': No such file or directory in path`;
                    }
                }
            }
            if (!effectiveFsLevel) return `touch: cannot touch '${fileName}': Invalid current path`;
            
            if (!effectiveFsLevel[fileName]) { 
                effectiveFsLevel[fileName] = { type: 'file' };
                setFileSystem(prevFs => ({ ...prevFs }));

                if (gitRepoPath && currentPath.join('/').startsWith(gitRepoPath.join('/'))) {
                    const relativePathParts = currentPath.slice(gitRepoPath.length);
                    const fullRelativePath = [...relativePathParts, fileName].filter(p => p && p !== '~').join('/');
                    if (fullRelativePath && !workingDirectoryFiles.includes(fullRelativePath) && !stagedFiles.includes(fullRelativePath)) {
                        setWorkingDirectoryFiles(prev => [...prev, fullRelativePath]);
                    }
                }
                return ''; 
            } else { 
                // touch on existing file updates timestamp, for simulation, no-op is fine
                return ''; 
            }
        } else {
            return 'touch: missing file operand';
        }
    }
    // Se nenhum comando shell corresponder, será tratado por processCommand como "command not found"
    // Não deveria chegar aqui se mainCommand está na lista de shell commands tratados por processCommand
    return `INTERNAL_ERROR_SHELL_NOT_FOUND: ${mainCommand}`; // Should be caught by processCommand if no specific shell command is found
  }, [
    fileSystem, currentPath, gitRepoPath, stagedFiles, workingDirectoryFiles, 
    setIsRepoInitialized, setStagedFiles, setCommits, setCurrentBranch, setAllBranches, 
    setBranchDetails, setWorkingDirectoryFiles, setFileSystem, setCurrentPath, setGitRepoPath, setRemoteOrigin
  ]);

  // --- Funções de Execução de Comandos Git ---
  const executeGitInit = useCallback((): string => {
    setGitRepoPath([...currentPath]); 
    setIsRepoInitialized(true);
    setStagedFiles([]);
    setCommits([]);
    setWorkingDirectoryFiles([]); 
    setCurrentBranch('main'); 
    setAllBranches(['main']); 
    setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
    return `Initialized empty Git repository in ${currentPath.join('/')}/.git/`;
  }, [currentPath, setGitRepoPath, setIsRepoInitialized, setStagedFiles, setCommits, setWorkingDirectoryFiles, setCurrentBranch, setAllBranches, setBranchDetails]);

  const executeGitStatus = useCallback((): string => {
    let statusMessage = `On branch ${currentBranch}\n`;
    const headCommit = getBranchHeadCommit(currentBranch);
    if (!headCommit && commits.filter(c => c.id !== 'Initial').length === 0) {
        statusMessage += 'No commits yet\n';
    }
    
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
        if (!headCommit && commits.filter(c => c.id !== 'Initial').length === 0) {
            statusMessage += 'nothing to commit (create/copy files and use "git add" to track)';
        } else {
            statusMessage += 'nothing to commit, working tree clean';
        }
    }
    return statusMessage.trim();
  }, [currentBranch, commits, stagedFiles, workingDirectoryFiles, getBranchHeadCommit]);
  
  const executeGitAdd = useCallback((args: string[]): string => {
    const fileArg = args[0];
    if (!isRepoInitialized || !gitRepoPath) return 'fatal: not a git repository (or any of the parent directories): .git';

    const getCurrentDirNodeContent = () => {
        let currentFsLevel = fileSystem['~'].content;
        if (currentPath.length > 1) {
            for (const part of currentPath.slice(1)) {
                if (currentFsLevel && currentFsLevel[part] && currentFsLevel[part].type === 'dir') {
                    currentFsLevel = currentFsLevel[part].content!;
                } else { return null; }
            }
        }
        return currentFsLevel;
    };

    const currentDirContent = getCurrentDirNodeContent();
    if (!currentDirContent) return "Error: Could not read current directory structure.";

    if (fileArg === '.') {
        const filesInCurrentDir = Object.entries(currentDirContent)
            .filter(([_, node]) => node.type === 'file')
            .map(([name]) => name);

        let newFilesToStage: string[] = [];
        let filesToRemoveFromWd: string[] = [];

        filesInCurrentDir.forEach(fileName => {
            const relativePathParts = currentPath.slice(gitRepoPath.length);
            const fullRelativePath = [...relativePathParts, fileName].filter(p => p && p !== '~').join('/');
            
            if (workingDirectoryFiles.includes(fullRelativePath) && !stagedFiles.includes(fullRelativePath)) {
                newFilesToStage.push(fullRelativePath);
            }
            // Sempre remove de WD se adicionado, mesmo que já estivesse em staged (para normalizar o estado)
            if (workingDirectoryFiles.includes(fullRelativePath)) {
                 filesToRemoveFromWd.push(fullRelativePath);
            }
        });
        
        if (newFilesToStage.length > 0) {
            setStagedFiles(prev => [...new Set([...prev, ...newFilesToStage])]);
        }
        if (filesToRemoveFromWd.length > 0){
            setWorkingDirectoryFiles(prevWDF => prevWDF.filter(f => !filesToRemoveFromWd.includes(f)));
        }
        return '';
    } else if (fileArg) {
        if (currentDirContent[fileArg] && currentDirContent[fileArg].type === 'file') {
            const relativePathParts = currentPath.slice(gitRepoPath.length);
            const fullRelativePath = [...relativePathParts, fileArg].filter(p => p && p !== '~').join('/');

            if (workingDirectoryFiles.includes(fullRelativePath) && !stagedFiles.includes(fullRelativePath)) {
                setStagedFiles(prev => [...new Set([...prev, fullRelativePath])]);
            }
            if (workingDirectoryFiles.includes(fullRelativePath)){
                 setWorkingDirectoryFiles(prevWDF => prevWDF.filter(f => f !== fullRelativePath));
            }
            return '';
        } else {
            return `fatal: pathspec '${fileArg}' did not match any files known to git`;
        }
    } else {
        return 'Nothing specified, nothing added.\nMaybe you wanted to say \'git add .\'?';
    }
  }, [fileSystem, currentPath, gitRepoPath, stagedFiles, workingDirectoryFiles, setStagedFiles, setWorkingDirectoryFiles, isRepoInitialized]);

  const executeGitCommit = useCallback((commandPartsWithGit: string[]): string => {
    const commandParts = commandPartsWithGit.slice(1);
    
    if (stagedFiles.length === 0) {
        if (workingDirectoryFiles.length > 0 || commits.length === 0) {
            let status = executeGitStatus(); 
            return `nothing added to commit but untracked files present\n${status}`;
        }
        return 'nothing to commit, working tree clean';
    }

    let commitMessage = '';
    const mFlagIndex = commandParts.indexOf('-m');
    if (mFlagIndex !== -1 && mFlagIndex < commandParts.length - 1) {
      commitMessage = commandParts.slice(mFlagIndex + 1).join(' ').replace(/^["']|["']$/g, '');
    } else {
      return `error: commit message missing. Use 'git commit -m "Your message"'`;
    }
    if (!commitMessage.trim()) return 'Aborting commit due to empty commit message.';

    const headForParentRef = getBranchHeadCommit(currentBranch);
    const parentId = headForParentRef ? headForParentRef.id : null;

    const newCommit: Commit = {
        id: Math.random().toString(36).substring(2, 7),
        parentId: parentId, 
        message: commitMessage,
        author: 'User <user@gitsheet.com>',
        date: new Date().toUTCString(),
        branch: currentBranch,
    };
    setCommits(prev => [newCommit, ...prev]);
    const filesCommittedCount = stagedFiles.length;
    setStagedFiles([]); 
    return `[${currentBranch} ${newCommit.id}] ${newCommit.message}\n ${filesCommittedCount} file${filesCommittedCount !== 1 ? 's' : ''} changed`;
  }, [stagedFiles, workingDirectoryFiles, commits, currentBranch, getBranchHeadCommit, setCommits, setStagedFiles, executeGitStatus]);

  const executeGitLog = useCallback((): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    const headCommitForLog = getBranchHeadCommit(currentBranch);
    if (!headCommitForLog) return `fatal: your current branch '${currentBranch}' does not have any commits yet`;

    const commitsToDisplay: Commit[] = [];
    let currentLogCommit: Commit | undefined = headCommitForLog;
    const visitedInLog = new Set<string>();

    while (currentLogCommit) {
        if(visitedInLog.has(currentLogCommit.id)) break; // Safety break for cyclic refs
        visitedInLog.add(currentLogCommit.id);
        commitsToDisplay.push(currentLogCommit);
        if (currentLogCommit.parentId) {
            currentLogCommit = commits.find(c => c.id === currentLogCommit!.parentId);
        } else {
            currentLogCommit = undefined;
        }
    }

    if (commitsToDisplay.length === 0) return `fatal: your current branch '${currentBranch}' does not have any commits yet`;
    
    let logOutput = '\n';
    commitsToDisplay.forEach(commit => {
        const isHeadOfCurrentBranch = commit.id === headCommitForLog!.id;
        let branchRefs = allBranches.filter(b => getBranchHeadCommit(b)?.id === commit.id)
                                    .map(b => b === currentBranch && isHeadOfCurrentBranch ? `HEAD -> ${b}` : b)
                                    .join(', ');
        const headIndicator = branchRefs ? ` (${branchRefs})` : '';
        
        logOutput += `commit ${commit.id}${headIndicator}\n`;
        logOutput += `Author: ${commit.author}\n`;
        logOutput += `Date:   ${commit.date}\n`;
        logOutput += `\n    ${commit.message}\n\n`;
    });
    return logOutput.trim();
  }, [isRepoInitialized, currentBranch, commits, getBranchHeadCommit, allBranches]);

  const executeGitBranch = useCallback((args: string[]): string => {
    const newBranchName = args[0];
    if (!newBranchName) {
      let branchList = '';
      // Sort branches, current branch first with asterisk
      const sortedBranches = [...allBranches].sort((a, b) => {
        if (a === currentBranch) return -1;
        if (b === currentBranch) return 1;
        return a.localeCompare(b);
      });
      sortedBranches.forEach(branch => {
        branchList += branch === currentBranch ? `* ${branch}\n` : `  ${branch}\n`;
      });
      return branchList.trim();
    } else {
      // Validar nome do branch (simplificado, Git tem regras mais complexas)
      if (newBranchName.includes(' ') || !/^[a-zA-Z0-9_\-./]+$/.test(newBranchName) || newBranchName.endsWith('/') || newBranchName.includes('//') || newBranchName.endsWith('.lock')) {
        return `error: '${newBranchName}' is not a valid branch name.`;
      }
      if (allBranches.includes(newBranchName)) {
        return `fatal: A branch named '${newBranchName}' already exists.`;
      }
      const headCommitOnCurrentBranch = getBranchHeadCommit(currentBranch);
      setAllBranches(prev => [...prev, newBranchName].sort());
      setBranchDetails(prev => new Map(prev).set(newBranchName, {
        parentBranch: currentBranch,
        parentCommitId: headCommitOnCurrentBranch ? headCommitOnCurrentBranch.id : null 
      }));
      return ''; 
    }
  }, [allBranches, currentBranch, getBranchHeadCommit, setAllBranches, setBranchDetails]);

  const executeGitCheckout = useCallback((args: string[]): string => {
    const arg1 = args[0];
    const arg2 = args[1];

    if (arg1 === '-b') {
        const newBranchName = arg2;
        if (!newBranchName) return "error: switch `b' needs a value";
        if (newBranchName.includes(' ') || !/^[a-zA-Z0-9_\-./]+$/.test(newBranchName) || newBranchName.endsWith('/') || newBranchName.includes('//') || newBranchName.endsWith('.lock')) {
             return `error: '${newBranchName}' is not a valid branch name.`;
        }
        if (allBranches.includes(newBranchName)) {
            return `fatal: A branch named '${newBranchName}' already exists.`;
        }
        const headCommitOnCurrentBranchCheckout = getBranchHeadCommit(currentBranch);
        setAllBranches(prev => [...prev, newBranchName].sort());
        setBranchDetails(prev => new Map(prev).set(newBranchName, {
            parentBranch: currentBranch,
            parentCommitId: headCommitOnCurrentBranchCheckout ? headCommitOnCurrentBranchCheckout.id : null
        }));
        setCurrentBranch(newBranchName);
        return `Switched to a new branch '${newBranchName}'`;
    } else {
        const branchToCheckout = arg1;
        if (!branchToCheckout) return "Error: branch name required."; 
        if (!allBranches.includes(branchToCheckout)) {
            return `error: pathspec '${branchToCheckout}' did not match any file(s) known to git.`;
        }
        if (currentBranch === branchToCheckout) {
            return `Already on '${branchToCheckout}'`;
        }
        setCurrentBranch(branchToCheckout);
        // Aqui, o Git real também atualizaria o working directory com os arquivos daquele branch.
        // Para esta simulação, a alteração do branch é suficiente para o grafo.
        // Se quisermos simular o conteúdo dos arquivos por branch, seria mais complexo.
        return `Switched to branch '${branchToCheckout}'`;
    }
  }, [allBranches, currentBranch, getBranchHeadCommit, setAllBranches, setBranchDetails, setCurrentBranch]);

  const executeGitPush = useCallback((args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    const remoteName = args[0];
    const branchToPush = args[1];

    if (remoteName !== 'origin') return `fatal: '${remoteName}' does not appear to be a git repository`;
    if (!branchToPush) return 'error: src refspec <branchname> does not match any.';
    if (!allBranches.includes(branchToPush)) return `error: src refspec ${branchToPush} does not match any.`;

    const localHeadCommit = getBranchHeadCommit(branchToPush);
    if (!localHeadCommit) return `error: failed to push some refs to 'origin'. Branch ${branchToPush} has no commits.`;

    const remoteBranchHeadCommitId = remoteOrigin[branchToPush] || null;
    let successMessage = '';

    if (remoteBranchHeadCommitId) { 
      if (localHeadCommit.id === remoteBranchHeadCommitId) return `Everything up-to-date`;
      
      if (isAncestor(remoteBranchHeadCommitId, localHeadCommit.id)) {
        setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));
        successMessage = `To origin/${branchToPush}\n  ${remoteBranchHeadCommitId.substring(0,7)}..${localHeadCommit.id.substring(0,7)}  ${branchToPush} -> ${branchToPush}`;
      } else {
         return `error: failed to push some refs to 'origin'\nTo prevent you from losing history, non-fast-forward updates were rejected.\nMerge the remote changes (e.g. 'git pull') before pushing again.`;
      }
    } else { 
      setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));
      successMessage = `To origin/${branchToPush}\n * [new branch]      ${branchToPush} -> ${branchToPush}`;
    }
    return successMessage;
  }, [isRepoInitialized, allBranches, remoteOrigin, getBranchHeadCommit, isAncestor, setRemoteOrigin, commits]);

  // --- Orquestração de Comandos ---
  const handleGitCommand = useCallback((gitSubCommand: string | undefined, commandParts: string[]): string => {
    const remainingArgs = commandParts.slice(2);
    if (gitSubCommand !== 'init' && !isRepoInitialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }

    if (gitSubCommand !== 'init' && isRepoInitialized && gitRepoPath) {
        const currentPathString = currentPath.join('/');
        const repoPathString = gitRepoPath.join('/');
        if (!currentPathString.startsWith(repoPathString)) {
            if (!repoPathString.startsWith(currentPathString)) {
                 return `fatal: not a git repository (or any of the parent directories): .git. Current path ${currentPathString} is not inside or a parent of ${repoPathString}`;
            }
        }
    }

    switch (gitSubCommand) {
      case 'init': return executeGitInit();
      case 'status': return executeGitStatus();
      case 'add': return executeGitAdd(remainingArgs);
      case 'commit': return executeGitCommit(commandParts);
      case 'log': return executeGitLog();
      case 'branch': return executeGitBranch(remainingArgs);
      case 'checkout': return executeGitCheckout(remainingArgs);
      case 'push': return executeGitPush(remainingArgs);
      default:
        if (gitSubCommand) return `git: '${gitSubCommand}' is not a git command. See 'git --help'.`;
        return "Usage: git <command> [<args>]";
    }
  }, [
    isRepoInitialized, gitRepoPath, currentPath, 
    executeGitInit, executeGitStatus, executeGitAdd, executeGitCommit, 
    executeGitLog, executeGitBranch, executeGitCheckout, executeGitPush
  ]);
  
  const processCommand = useCallback((command: string): string => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return '';
    const commandParts = trimmedCommand.split(/\s+/);
    const mainCommand = commandParts[0].toLowerCase();
    const firstArg = commandParts[1]?.toLowerCase();

    if (mainCommand === 'git') {
      return handleGitCommand(firstArg, commandParts);
    } else if (['cd', 'mkdir', 'touch', 'clear'].includes(mainCommand)) {
      return handleShellCommand(mainCommand, commandParts);
    } else {
      return `bash: command not found: ${mainCommand}`;
    }
  }, [handleGitCommand, handleShellCommand]);

  // --- Geração do Diagrama --- 
  const generateMermaidDiagramDefinition = useCallback((): string => {
    if (!isRepoInitialized || !gitRepoPath) {
      return 'gitGraph LR;\n  A[Repositório não inicializado];';
    }
    let mermaidString = 'gitGraph LR;\n';
    const actualCommits = commits.filter(c => c.id !== 'Initial');
    const chronologicalCommits = [...(actualCommits.length > 0 ? actualCommits : commits)].reverse();    

    if (chronologicalCommits.length === 0 || (chronologicalCommits.length === 1 && chronologicalCommits[0].id === 'Initial')) {
      mermaidString += `  checkout "${currentBranch}";\n`;
      mermaidString += '  commit id: "Initial", tag: "Sem commits ainda", type: REVERSE;\n';
      return mermaidString;
    }
    let mermaidCheckoutBranch = ''; 
    const declaredMermaidBranches = new Set<string>();

    const initialCheckout = allBranches.includes('main') ? 'main' : currentBranch;

    mermaidString += `  checkout "${initialCheckout}";\n`;
    mermaidCheckoutBranch = initialCheckout;
    declaredMermaidBranches.add(initialCheckout);

    chronologicalCommits.forEach(commit => {
      if(commit.id === 'Initial') return;

      const commitBranchMeta = branchDetails.get(commit.branch);

      if (commit.branch !== mermaidCheckoutBranch && !declaredMermaidBranches.has(commit.branch) && commitBranchMeta) {
         if (commitBranchMeta.parentBranch && commitBranchMeta.parentBranch !== mermaidCheckoutBranch) {
            if(declaredMermaidBranches.has(commitBranchMeta.parentBranch)){
                 mermaidString += `  checkout "${commitBranchMeta.parentBranch}";\n`;
                 mermaidCheckoutBranch = commitBranchMeta.parentBranch;
            } else {
                 mermaidString += `  branch "${commitBranchMeta.parentBranch}";\n`;
                 declaredMermaidBranches.add(commitBranchMeta.parentBranch);
                 mermaidString += `  checkout "${commitBranchMeta.parentBranch}";\n`;
                 mermaidCheckoutBranch = commitBranchMeta.parentBranch;
            }
        }
        if(!declaredMermaidBranches.has(commit.branch)){
            mermaidString += `  branch "${commit.branch}";\n`;
            declaredMermaidBranches.add(commit.branch);
        }
      }

      if (commit.branch !== mermaidCheckoutBranch) {
        mermaidString += `  checkout "${commit.branch}";\n`;
        mermaidCheckoutBranch = commit.branch;
      }
      
      const tag = `${commit.id.substring(0,5)}: ${commit.message.substring(0,20)}${commit.message.length > 20 ? '...' : ''}`;
      mermaidString += `  commit id: "${commit.id}", tag: "${tag}";\n`;
    });

    if (currentBranch !== mermaidCheckoutBranch) {
        if (declaredMermaidBranches.has(currentBranch)){
            mermaidString += `  checkout "${currentBranch}";\n`;
        } else if (allBranches.includes(currentBranch)){
            const meta = branchDetails.get(currentBranch);
            if(meta?.parentBranch && declaredMermaidBranches.has(meta.parentBranch)){
                mermaidString += `  checkout "${meta.parentBranch}";\n`;
            }
            mermaidString += `  branch "${currentBranch}";\n`;
            mermaidString += `  checkout "${currentBranch}";\n`;
        }
    }
    return mermaidString;
  }, [isRepoInitialized, gitRepoPath, commits, currentBranch, branchDetails, allBranches]);

  const diagramDefinition = generateMermaidDiagramDefinition();
  const currentPathDisplay = currentPath.join('/');

  return {
    processCommand,
    diagramDefinition,
    currentPathDisplay,
    currentPathArray: currentPath,
  };
}; 