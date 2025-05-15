import { useState, useCallback } from 'react';
import { 
  Commit, 
  FileSystemStructure, 
  BranchMeta, 
  GitHubRepository,
  GitHubRemote,
  GitHubPullRequest,
  GitHubIssue,
  GitHubFileStructure
} from '../components/practiceChallenge/practiceChallengeTypes';

// TODO: Considerar se initialFileSystem deve ser definido aqui ou passado como argumento.
const initialFileSystem: FileSystemStructure = {
  '~': { type: 'dir', content: {} }
};

// Estado inicial do repositório GitHub simulado
const initialGitHubRepository: GitHubRepository = {
  name: 'meu-projeto',
  owner: 'usuario',
  description: 'Um repositório de exemplo',
  isPrivate: false,
  stars: 0,
  forks: 0,
  watchers: 0,
  defaultBranch: 'main',
  createdAt: new Date().toISOString(),
  lastUpdatedAt: new Date().toISOString(),
};

interface GitPracticeChallengeAPI {
  processCommand: (command: string) => string;
  currentPathDisplay: string;
  currentPathArray: string[];
  diagramDefinition: string;
  // GitHub simulado
  gitHubRepository: GitHubRepository | null;
  gitHubRemotes: GitHubRemote[];
  gitHubPullRequests: GitHubPullRequest[];
  gitHubIssues: GitHubIssue[];
  gitHubFileStructure: GitHubFileStructure;
  pushedBranches: string[];
  commits: Commit[];
  createRepository: (repoName: string, repoDescription: string, isPrivate: boolean) => void;
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

  // GitHub simulado
  const [gitHubRepository, setGitHubRepository] = useState<GitHubRepository | null>(null);
  const [gitHubRemotes, setGitHubRemotes] = useState<GitHubRemote[]>([]);
  const [gitHubPullRequests, setGitHubPullRequests] = useState<GitHubPullRequest[]>([]);
  const [gitHubIssues, setGitHubIssues] = useState<GitHubIssue[]>([]);
  const [gitHubFileStructure, setGitHubFileStructure] = useState<GitHubFileStructure>({});
  const [pushedBranches, setPushedBranches] = useState<string[]>([]);

  // Função auxiliar para obter todos os arquivos no repositório
  const getFilesInRepository = useCallback((): string[] => {
    if (!gitRepoPath) return [];
    
    // Coleta os arquivos staged e commits realizados
    const result: string[] = [...stagedFiles];
    
    // Recursivamente percorre o sistema de arquivos para encontrar todos os arquivos
    const collectFiles = (path: string[], parentFsLevel: FileSystemStructure) => {
      if (!parentFsLevel) return;
      
      Object.entries(parentFsLevel).forEach(([name, node]) => {
        const currentPath = [...path, name];
        if (node.type === 'file') {
          // Obter caminho relativo ao repositório
          if (gitRepoPath && currentPath.join('/').startsWith(gitRepoPath.join('/'))) {
            const relativePathParts = currentPath.slice(gitRepoPath.length);
            const fullRelativePath = relativePathParts.filter(p => p && p !== '~').join('/');
            if (fullRelativePath && !result.includes(fullRelativePath)) {
              result.push(fullRelativePath);
            }
          }
        } else if (node.type === 'dir' && node.content) {
          collectFiles(currentPath, node.content);
        }
      });
    };
    
    // Começar pelo diretório raiz do repositório
    const repoRoot = fileSystem['~'].content;
    if (repoRoot) {
      collectFiles(['~'], { '~': { type: 'dir', content: repoRoot } });
    }
    
    return result;
  }, [fileSystem, gitRepoPath, stagedFiles]);

  // Função para atualizar o estado do GitHub após um push
  const updateGitHubAfterPush = useCallback((remoteName: string, branchName: string, headCommit: Commit) => {
    // Atualizar a estrutura de arquivos no GitHub
    const updatedFileStructure: GitHubFileStructure = { ...gitHubFileStructure };
    
    // Simulação simples: adicionar todos os arquivos do commit ao GitHub
    // Em um caso real, analisaríamos o histórico de commits e mudanças
    const filePathsInRepo = getFilesInRepository();
    
    filePathsInRepo.forEach(filePath => {
      if (!updatedFileStructure[filePath]) {
        updatedFileStructure[filePath] = {
          name: filePath.split('/').pop() || '',
          path: filePath,
          type: 'file',
          size: 0,
          lastModified: new Date().toISOString(),
          lastCommitId: headCommit.id,
          lastCommitMessage: headCommit.message
        };
      } else {
        updatedFileStructure[filePath] = {
          ...updatedFileStructure[filePath],
          lastModified: new Date().toISOString(),
          lastCommitId: headCommit.id,
          lastCommitMessage: headCommit.message
        };
      }
    });
    
    setGitHubFileStructure(updatedFileStructure);
    
    // Atualizar timestamp do repositório
    if (gitHubRepository) {
      setGitHubRepository({
        ...gitHubRepository,
        lastUpdatedAt: new Date().toISOString()
      });
    }

    // Se a branch não estiver na lista de branches pushed, adicione
    if (!pushedBranches.includes(branchName)) {
      setPushedBranches(prev => [...prev, branchName]);
    }
  }, [gitHubFileStructure, gitHubRepository, pushedBranches, getFilesInRepository]);

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
    // Verificar se já é um repositório Git
    if (isRepoInitialized && gitRepoPath) {
      // Se já estiver no mesmo caminho, apenas retornar aviso
      if (gitRepoPath.join('/') === currentPath.join('/')) {
        return `Reinitialized existing Git repository in ${currentPath.join('/')}/.git/`;
      }
    }
    
    // Se a pasta já existe, mas não é o mesmo repo, então é uma inicialização nova
    const existingRemotes = gitHubRemotes;
    const existingRepo = gitHubRepository;
    
    setGitRepoPath([...currentPath]); 
    setIsRepoInitialized(true);
    setStagedFiles([]);
    setCommits([]);
    setWorkingDirectoryFiles([]); 
    setCurrentBranch('main'); 
    setAllBranches(['main']); 
    setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
    
    // Reset GitHub states apenas se não for uma reinicialização
    if (!isRepoInitialized || gitRepoPath?.join('/') !== currentPath.join('/')) {
      setGitHubRepository(null);
      setGitHubRemotes([]);
      setGitHubPullRequests([]);
      setGitHubIssues([]);
      setGitHubFileStructure({});
      setPushedBranches([]);
    } else {
      // Preservar remotes e repositório se for reinicialização
      setGitHubRemotes(existingRemotes);
      setGitHubRepository(existingRepo);
    }
    
    return `Initialized empty Git repository in ${currentPath.join('/')}/.git/`;
  }, [
    currentPath, 
    isRepoInitialized,
    gitRepoPath,
    gitHubRemotes,
    gitHubRepository,
    setGitRepoPath, 
    setIsRepoInitialized, 
    setStagedFiles, 
    setCommits, 
    setWorkingDirectoryFiles, 
    setCurrentBranch, 
    setAllBranches, 
    setBranchDetails
  ]);

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
    
    let remoteName: string;
    let branchToPush: string;
    
    // Caso específico para git push -u origin main
    if (args[0] === '-u' && args.length >= 2) {
      remoteName = args[1];
      branchToPush = args.length >= 3 ? args[2] : currentBranch;
    } else {
      remoteName = args[0] || 'origin';
      branchToPush = args[1] || currentBranch;
    }

    // Verificar se o remote existe
    const remote = gitHubRemotes.find(r => r.name === remoteName);
    if (!remote) {
      return `fatal: '${remoteName}' does not appear to be a git repository`;
    }

    if (!allBranches.includes(branchToPush)) {
      return `error: src refspec ${branchToPush} does not match any.`;
    }

    const localHeadCommit = getBranchHeadCommit(branchToPush);
    if (!localHeadCommit) {
      return `error: failed to push some refs to '${remoteName}'. Branch ${branchToPush} has no commits.`;
    }

    const remoteBranchHeadCommitId = remoteOrigin[branchToPush] || null;
    let successMessage = '';

    if (remoteBranchHeadCommitId) { 
      if (localHeadCommit.id === remoteBranchHeadCommitId) {
        return `Everything up-to-date`;
      }
      
      if (isAncestor(remoteBranchHeadCommitId, localHeadCommit.id)) {
        setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));

        // Atualizar GitHub após push bem-sucedido
        updateGitHubAfterPush(remoteName, branchToPush, localHeadCommit);
        
        successMessage = `To ${remote.url}\n  ${remoteBranchHeadCommitId.substring(0,7)}..${localHeadCommit.id.substring(0,7)}  ${branchToPush} -> ${branchToPush}`;
      } else {
        return `error: failed to push some refs to '${remoteName}'\nTo prevent you from losing history, non-fast-forward updates were rejected.\nMerge the remote changes (e.g. 'git pull') before pushing again.`;
      }
    } else { 
      setRemoteOrigin(prev => ({ ...prev, [branchToPush]: localHeadCommit.id }));
      
      // Atualizar GitHub após push bem-sucedido
      updateGitHubAfterPush(remoteName, branchToPush, localHeadCommit);

      // Adicionar a branch como pushed
      if (!pushedBranches.includes(branchToPush)) {
        setPushedBranches(prev => [...prev, branchToPush]);
      }
      
      successMessage = `To ${remote.url}\n * [new branch]      ${branchToPush} -> ${branchToPush}`;
    }
    
    return successMessage;
  }, [
    isRepoInitialized, 
    allBranches, 
    remoteOrigin, 
    getBranchHeadCommit, 
    isAncestor, 
    gitHubRemotes,
    currentBranch,
    pushedBranches,
    updateGitHubAfterPush
  ]);

  const executeGitMerge = useCallback((args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    
    const branchToMerge = args[0];
    if (!branchToMerge) return 'error: branch name required';
    
    if (!allBranches.includes(branchToMerge)) {
      return `fatal: branch '${branchToMerge}' not found`;
    }
    
    if (branchToMerge === currentBranch) {
      return `Already up to date. (Cannot merge a branch into itself)`;
    }
    
    // Verificar se o branch atual tem commits
    const currentHeadCommit = getBranchHeadCommit(currentBranch);
    if (!currentHeadCommit) {
      return `fatal: branch '${currentBranch}' does not have any commits yet`;
    }
    
    // Verificar se o branch a ser mesclado tem commits
    const mergeBranchHeadCommit = getBranchHeadCommit(branchToMerge);
    if (!mergeBranchHeadCommit) {
      return `fatal: branch '${branchToMerge}' does not have any commits yet`;
    }
    
    // Se o commit do branch a ser mesclado já é um ancestral do branch atual, não há nada a mesclar
    if (isAncestor(mergeBranchHeadCommit.id, currentHeadCommit.id)) {
      return `Already up to date. '${branchToMerge}' is already incorporated in '${currentBranch}'`;
    }
    
    // Criar o commit de merge
    const mergeCommit: Commit = {
      id: Math.random().toString(36).substring(2, 7),
      parentId: currentHeadCommit.id, 
      secondParentId: mergeBranchHeadCommit.id, // Adicionando referência ao branch mesclado
      message: `Merge branch '${branchToMerge}' into ${currentBranch}`,
      author: 'User <user@gitsheet.com>',
      date: new Date().toUTCString(),
      branch: currentBranch,
    };
    
    setCommits(prev => [mergeCommit, ...prev]);
    
    return `Merge made by the 'recursive' strategy.\n ${branchToMerge} -> ${currentBranch}`;
  }, [
    isRepoInitialized, currentBranch, allBranches, 
    getBranchHeadCommit, isAncestor, setCommits
  ]);

  // Novas funções para GitHub
  
  const executeGitRemote = useCallback((args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';

    const subCommand = args[0]?.toLowerCase();

    if (!subCommand || subCommand === '-v' || subCommand === '--verbose') {
      if (gitHubRemotes.length === 0) {
        return '';
      }
      return gitHubRemotes.map(remote => 
        `${remote.name}\t${remote.url} (fetch)\n${remote.name}\t${remote.url} (push)`
      ).join('\n');
    }

    if (subCommand === 'add') {
      const remoteName = args[1];
      const remoteUrl = args[2];

      if (!remoteName) return 'error: No remote name specified';
      if (!remoteUrl) return 'error: No remote URL specified';

      const existingRemote = gitHubRemotes.find(r => r.name === remoteName);
      if (existingRemote) {
        return `error: remote ${remoteName} already exists.`;
      }

      // Criar repositório GitHub se for o primeiro remote
      if (gitHubRemotes.length === 0 && remoteName === 'origin') {
        const repoName = gitRepoPath ? gitRepoPath[gitRepoPath.length - 1] : 'meu-projeto';
        const newGitHubRepo = {
          ...initialGitHubRepository,
          name: repoName,
          createdAt: new Date().toISOString(),
          lastUpdatedAt: new Date().toISOString()
        };
        setGitHubRepository(newGitHubRepo);
      }

      const newRemote = { 
        name: remoteName, 
        url: remoteUrl,
        isConnected: true
      };
      
      setGitHubRemotes(prev => [...prev, newRemote]);

      return '';
    }

    if (subCommand === 'remove' || subCommand === 'rm') {
      const remoteName = args[1];
      if (!remoteName) return 'error: No remote name specified';

      const existingRemoteIndex = gitHubRemotes.findIndex(r => r.name === remoteName);
      if (existingRemoteIndex === -1) {
        return `error: No such remote: ${remoteName}`;
      }

      setGitHubRemotes(prev => prev.filter(r => r.name !== remoteName));
      return '';
    }

    return `error: Unknown subcommand: ${subCommand}`;
  }, [isRepoInitialized, gitHubRemotes, gitRepoPath]);

  const executeGitPull = useCallback((args: string[]): string => {
    if (!isRepoInitialized) return 'fatal: not a git repository (or any of the parent directories): .git';
    
    const remoteName = args[0] || 'origin';
    const branchName = args[1] || currentBranch;

    // Verificar se o remote existe
    const remote = gitHubRemotes.find(r => r.name === remoteName);
    if (!remote) {
      return `fatal: '${remoteName}' does not appear to be a git repository`;
    }

    // Verificar se a branch existe no remote (foi pushed)
    if (!pushedBranches.includes(branchName)) {
      return `fatal: couldn't find remote ref ${branchName}`;
    }

    // Simulação simples de pull (apenas para fins didáticos)
    // Em um cenário real, verificaríamos mudanças remotas, conflitos, etc.
    return `Already up to date.`;
  }, [isRepoInitialized, gitHubRemotes, currentBranch, pushedBranches]);

  // Adicionar função para implementar git clone
  const executeGitClone = useCallback((args: string[]): string => {
    const repoUrl = args[0];
    
    if (!repoUrl) {
      return 'usage: git clone <repository> [<directory>]';
    }
    
    // Extrair nome do repositório da URL
    let repoName = '';
    try {
      // Extrai o último segmento da URL sem a extensão .git
      repoName = repoUrl.split('/').pop()?.replace(/\.git$/, '') || '';
      if (!repoName) {
        return 'fatal: invalid repository URL format';
      }
    } catch (error) {
      return 'fatal: unable to parse repository URL';
    }
    
    // Verificar se diretório já existe no caminho atual
    let effectiveFsLevel = fileSystem['~'].content;
    if (currentPath.length > 1) {
      for (const part of currentPath.slice(1)) {
        if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
          effectiveFsLevel = effectiveFsLevel[part].content!;
        } else {
          return `fatal: destination path '${repoName}' already exists and is not an empty directory.`;
        }
      }
    }
    
    // Verificar se pasta destino já existe
    if (effectiveFsLevel && effectiveFsLevel[repoName]) {
      return `fatal: destination path '${repoName}' already exists and is not an empty directory.`;
    }
    
    // Criar diretório para o repositório
    if (effectiveFsLevel) {
      // Criar diretório do repositório
      effectiveFsLevel[repoName] = { type: 'dir', content: {} };
      setFileSystem(prevFs => ({ ...prevFs }));
      
      // Navegar para o diretório (similar ao CD)
      setCurrentPath(prev => [...prev, repoName]);
      
      // Inicializar um repositório Git nesse diretório
      setGitRepoPath([...currentPath, repoName]);
      setIsRepoInitialized(true);
      setStagedFiles([]);
      setCommits([]);
      setWorkingDirectoryFiles([]);
      setCurrentBranch('main');
      setAllBranches(['main']);
      setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
      
      // Simulação de conexão com repositório remoto
      const remoteUrl = repoUrl;
      const remoteName = 'origin';

      // Criar repositório no GitHub simulado
      const newGitHubRepo = {
        ...initialGitHubRepository,
        name: repoName,
        createdAt: new Date().toISOString(),
        lastUpdatedAt: new Date().toISOString()
      };
      
      setGitHubRepository(newGitHubRepo);
      
      // Adicionar o remote origin
      setGitHubRemotes([{ 
        name: remoteName, 
        url: remoteUrl,
        isConnected: true
      }]);
      
      return `Cloning into '${repoName}'...\nremote: Enumerating objects: 0, done.\nremote: Counting objects: 100% (0/0), done.\nremote: Compressing objects: 100% (0/0), done.\nremote: Total 0 (delta 0), reused 0 (delta 0), pack-reused 0\nConnected to ${remoteUrl}\nRepositório inicializado em ${[...currentPath, repoName].join('/')}/.git/\n\n# Você já está na pasta ${repoName}`;
    } else {
      return `fatal: unable to create directory for '${repoName}'`;
    }
  }, [
    fileSystem, 
    currentPath, 
    setFileSystem, 
    setCurrentPath, 
    setGitRepoPath,
    setIsRepoInitialized,
    setStagedFiles,
    setCommits,
    setWorkingDirectoryFiles,
    setCurrentBranch,
    setAllBranches,
    setBranchDetails,
    setGitHubRepository,
    setGitHubRemotes
  ]);

  // --- Orquestração de Comandos ---
  const handleGitCommand = useCallback((gitSubCommand: string | undefined, commandParts: string[]): string => {
    const remainingArgs = commandParts.slice(2);
    if (gitSubCommand !== 'init' && gitSubCommand !== 'clone' && !isRepoInitialized) {
      return 'fatal: not a git repository (or any of the parent directories): .git';
    }

    if (gitSubCommand !== 'init' && gitSubCommand !== 'clone' && isRepoInitialized && gitRepoPath) {
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
      case 'clone': return executeGitClone(remainingArgs);
      case 'status': return executeGitStatus();
      case 'add': return executeGitAdd(remainingArgs);
      case 'commit': return executeGitCommit(commandParts);
      case 'log': return executeGitLog();
      case 'branch': return executeGitBranch(remainingArgs);
      case 'checkout': return executeGitCheckout(remainingArgs);
      case 'push': return executeGitPush(remainingArgs);
      case 'merge': return executeGitMerge(remainingArgs);
      case 'remote': return executeGitRemote(remainingArgs);
      case 'pull': return executeGitPull(remainingArgs);
      default:
        if (gitSubCommand) return `git: '${gitSubCommand}' is not a git command. See 'git --help'.`;
        return "Usage: git <command> [<args>]";
    }
  }, [
    isRepoInitialized, gitRepoPath, currentPath, 
    executeGitInit, executeGitStatus, executeGitAdd, executeGitCommit, 
    executeGitLog, executeGitBranch, executeGitCheckout, executeGitPush, executeGitMerge,
    executeGitRemote, executeGitPull, executeGitClone
  ]);
  
  const processCommand = useCallback((command: string): string => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return '';
    
    // Verificar se é o comando cd.. sem espaço
    if (trimmedCommand === 'cd..') {
      if (currentPath.length > 1) {
        setCurrentPath(prev => prev.slice(0, -1));
      }
      return '';
    }
    
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
  }, [handleGitCommand, handleShellCommand, currentPath, setCurrentPath]);

  // --- Geração do Diagrama --- 
  const generateMermaidDiagramDefinition = useCallback((): string => {
    if (!isRepoInitialized || !gitRepoPath) {
      // Retorna string vazia para não mostrar diagrama ao iniciar
      return '';
    }
    
    // Atualizar a sintaxe para Mermaid 11.6.0
    let mermaidString = 'gitGraph TB:\n';
    
    // Adicionar configuração para tornar a visualização mais clara
    mermaidString += '  config {\n';
    mermaidString += '    showBranches: true,\n';
    mermaidString += '    showCommitLabel: true,\n';
    mermaidString += '    mainBranchName: "main"\n';
    mermaidString += '  }\n';
    
    const actualCommits = commits.filter(c => c.id !== 'Initial');
    const chronologicalCommits = [...(actualCommits.length > 0 ? actualCommits : commits)].reverse();

    // Função para escapar aspas duplas em strings para uso seguro em tags/nomes Mermaid
    const escapeMermaidString = (str: string): string => str.replace(/"/g, '').replace(/'/g, '');

    if (chronologicalCommits.length === 0 || (chronologicalCommits.length === 1 && chronologicalCommits[0].id === 'Initial')) {
      // Se não houver commits reais, ainda garantir que há um commit inicial no diagrama
      mermaidString += `  commit id: "Initial"\n`;
      mermaidString += `  commit tag: "No commits yet"\n`;
      mermaidString += `  checkout "${escapeMermaidString(currentBranch)}"\n`;
      return mermaidString;
    }
    
    let mermaidCheckoutBranch = ''; 
    const declaredMermaidBranches = new Set<string>();
    const initialCheckout = allBranches.includes('main') ? 'main' : currentBranch;

    mermaidString += `  checkout "${escapeMermaidString(initialCheckout)}"\n`;
    mermaidCheckoutBranch = initialCheckout;
    declaredMermaidBranches.add(initialCheckout);

    // Mapa para rastrear commits já processados e evitar duplicações
    const processedCommits = new Set<string>();
    
    chronologicalCommits.forEach(commit => {
      if(commit.id === 'Initial') return;

      const commitBranchMeta = branchDetails.get(commit.branch);
      const safeCommitBranchName = escapeMermaidString(commit.branch);

      if (commit.branch !== mermaidCheckoutBranch && !declaredMermaidBranches.has(commit.branch) && commitBranchMeta) {
         const safeParentBranchName = commitBranchMeta.parentBranch ? escapeMermaidString(commitBranchMeta.parentBranch) : null;
         if (safeParentBranchName && safeParentBranchName !== mermaidCheckoutBranch) {
            if(declaredMermaidBranches.has(safeParentBranchName)){
                 mermaidString += `  checkout "${safeParentBranchName}"\n`;
                 mermaidCheckoutBranch = safeParentBranchName;
            } else {
                 mermaidString += `  branch "${safeParentBranchName}"\n`;
                 declaredMermaidBranches.add(safeParentBranchName);
                 mermaidString += `  checkout "${safeParentBranchName}"\n`;
                 mermaidCheckoutBranch = safeParentBranchName;
            }
        }
        if(!declaredMermaidBranches.has(safeCommitBranchName)){
            mermaidString += `  branch "${safeCommitBranchName}"\n`;
            declaredMermaidBranches.add(safeCommitBranchName);
        }
      }

      if (commit.branch !== mermaidCheckoutBranch) {
        mermaidString += `  checkout "${safeCommitBranchName}"\n`;
        mermaidCheckoutBranch = safeCommitBranchName;
      }
      
      // Se este commit é um merge (tem secondParentId), vamos adicionar o comando merge
      if (commit.secondParentId) {
        // Verificar de qual branch está vindo o segundo pai
        const secondParentCommit = commits.find(c => c.id === commit.secondParentId);
        if (secondParentCommit) {
          const secondParentBranch = secondParentCommit.branch;
          const safeSecondParentBranch = escapeMermaidString(secondParentBranch);
          
          // Se ainda não processamos este comando merge
          if (!processedCommits.has(`merge_${commit.id}`)) {
            mermaidString += `  merge "${safeSecondParentBranch}"\n`;
            processedCommits.add(`merge_${commit.id}`);
          }
        }
      } else {
        // Commit normal (não é merge)
        const sanitizedMessage = escapeMermaidString(commit.message).substring(0, 30);
        
        // Adicionar commit normal com tag formatada
        if (sanitizedMessage.length > 0) {
          mermaidString += `  commit id: "${commit.id.substring(0,5)}" tag: "${sanitizedMessage}"\n`;
        } else {
          mermaidString += `  commit id: "${commit.id.substring(0,5)}"\n`;
        }
      }
    });

    if (currentBranch !== mermaidCheckoutBranch) {
        const safeCurrentBranch = escapeMermaidString(currentBranch);
        if (declaredMermaidBranches.has(safeCurrentBranch)){
            mermaidString += `  checkout "${safeCurrentBranch}"\n`;
        } else if (allBranches.includes(currentBranch)){
            const meta = branchDetails.get(currentBranch);
            const safeParentBranch = meta?.parentBranch ? escapeMermaidString(meta.parentBranch) : null;
            if(safeParentBranch && declaredMermaidBranches.has(safeParentBranch)){
                mermaidString += `  checkout "${safeParentBranch}"\n`;
            }
            mermaidString += `  branch "${safeCurrentBranch}"\n`;
            mermaidString += `  checkout "${safeCurrentBranch}"\n`;
        }
    }
    
    return mermaidString;
  }, [isRepoInitialized, gitRepoPath, commits, currentBranch, branchDetails, allBranches]);

  const diagramDefinition = generateMermaidDiagramDefinition();
  const currentPathDisplay = currentPath.join('/');

  // Adicionar função para criar repositório diretamente (para ser chamada pelo componente)
  const createRepository = useCallback((repoName: string, repoDescription: string, isPrivate: boolean): void => {
    // Só cria se não tiver repositório inicializado
    if (!isRepoInitialized) {
      setGitRepoPath([...currentPath]); 
      setIsRepoInitialized(true);
      setStagedFiles([]);
      setCommits([]);
      setWorkingDirectoryFiles([]); 
      setCurrentBranch('main'); 
      setAllBranches(['main']); 
      setBranchDetails(new Map([['main', { parentBranch: null, parentCommitId: null }]]));
    }
    
    // Criar o repositório GitHub
    const newGitHubRepo = {
      ...initialGitHubRepository,
      name: repoName || 'meu-projeto',
      description: repoDescription || 'Um repositório de exemplo',
      isPrivate: isPrivate,
      createdAt: new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString()
    };
    
    setGitHubRepository(newGitHubRepo);
    
    // Adicionar o remote origin automaticamente
    const newRemote = { 
      name: 'origin', 
      url: `https://github.com/usuario/${repoName || 'meu-projeto'}.git`,
      isConnected: true
    };
    
    setGitHubRemotes(prev => [...prev, newRemote]);
  }, [
    currentPath, 
    isRepoInitialized,
    setGitRepoPath, 
    setIsRepoInitialized, 
    setStagedFiles, 
    setCommits, 
    setWorkingDirectoryFiles, 
    setCurrentBranch, 
    setAllBranches, 
    setBranchDetails
  ]);

  return {
    processCommand,
    diagramDefinition,
    currentPathDisplay,
    currentPathArray: currentPath,
    // GitHub simulado
    gitHubRepository,
    gitHubRemotes,
    gitHubPullRequests,
    gitHubIssues,
    gitHubFileStructure,
    pushedBranches,
    commits,
    createRepository  // Nova função exportada
  };
}; 