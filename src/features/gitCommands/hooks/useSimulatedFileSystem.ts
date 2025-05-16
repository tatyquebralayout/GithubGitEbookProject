import { useState } from 'react';
import { FileSystemStructure } from '../components/practiceChallenge/practiceChallengeTypes';

// Hook responsável por gerenciar o sistema de arquivos virtual
export function useSimulatedFileSystem(initialFileSystem: FileSystemStructure) {
  // Estado do sistema de arquivos
  const [fileSystem, setFileSystem] = useState<FileSystemStructure>(
    JSON.parse(JSON.stringify(initialFileSystem)) // Deep copy
  );
  // Caminho atual
  const [currentPath, setCurrentPath] = useState<string[]>(['~']);
  // Caminho do repositório Git (se houver)
  const [gitRepoPath, setGitRepoPath] = useState<string[] | null>(null);
  // Arquivos do diretório de trabalho
  const [workingDirectoryFiles, setWorkingDirectoryFiles] = useState<string[]>([]);

  // Criação de diretório (mkdir)
  function createDirectory(dirName: string): string {
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
    if (!effectiveFsLevel)
      return `mkdir: cannot create directory '${dirName}': Invalid current path`;

    if (!effectiveFsLevel[dirName]) {
      effectiveFsLevel[dirName] = { type: 'dir', content: {} };
      setFileSystem((prevFs) => ({ ...prevFs }));
      return '';
    } else {
      return `mkdir: cannot create directory '${dirName}': File exists`;
    }
  }

  // Navegação de diretório (cd)
  function navigateTo(targetDir: string): string {
    if (targetDir === '..') {
      if (currentPath.length > 1) {
        setCurrentPath((prev) => prev.slice(0, -1));
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
      pathSegmentsToNavigate = targetDir
        .substring(targetDir.startsWith('~/') ? 2 : 1)
        .split('/')
        .filter((p) => p);
    } else {
      newPathAttempt = [...currentPath];
      baseFsLevelForTraversal = fileSystem['~'].content;
      pathSegmentsToNavigate = targetDir.split('/').filter((p) => p);
    }

    let effectiveFsLevel = baseFsLevelForTraversal;
    for (const segment of pathSegmentsToNavigate) {
      if (
        effectiveFsLevel &&
        effectiveFsLevel[segment] &&
        effectiveFsLevel[segment].type === 'dir'
      ) {
        effectiveFsLevel = effectiveFsLevel[segment].content!;
        newPathAttempt.push(segment);
      } else {
        return `cd: ${targetDir}: No such file or directory`;
      }
    }
    setCurrentPath(newPathAttempt);
    return '';
  }

  // Criação de arquivo (touch)
  function createFile(path: string[], fileName: string): string {
    let effectiveFsLevel = fileSystem['~'].content;
    if (path.length > 1) {
      for (const part of path.slice(1)) {
        if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
          effectiveFsLevel = effectiveFsLevel[part].content!;
        } else {
          return `touch: cannot touch '${fileName}': No such file or directory in path`;
        }
      }
    }
    if (!effectiveFsLevel) return `touch: cannot touch '${fileName}': Invalid current path`;

    if (!effectiveFsLevel[fileName]) {
      effectiveFsLevel[fileName] = { type: 'file', content: '' };
      setFileSystem((prevFs) => ({ ...prevFs }));
      return '';
    } else {
      // touch on existing file updates timestamp, for simulação, no-op
      return '';
    }
  }

  // Deleção de arquivo (rm)
  function deleteFile(path: string[], fileName: string): string {
    let effectiveFsLevel = fileSystem['~'].content;
    if (path.length > 1) {
      for (const part of path.slice(1)) {
        if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
          effectiveFsLevel = effectiveFsLevel[part].content!;
        } else {
          return `rm: cannot remove '${fileName}': No such file or directory in path`;
        }
      }
    }
    if (!effectiveFsLevel) return `rm: cannot remove '${fileName}': Invalid current path`;

    if (effectiveFsLevel[fileName] && effectiveFsLevel[fileName].type === 'file') {
      delete effectiveFsLevel[fileName];
      setFileSystem((prevFs) => ({ ...prevFs }));
      return '';
    } else {
      return `rm: cannot remove '${fileName}': No such file`;
    }
  }

  // Leitura de arquivo (cat)
  function readFile(path: string[], fileName: string): string {
    let effectiveFsLevel = fileSystem['~'].content;
    if (path.length > 1) {
      for (const part of path.slice(1)) {
        if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
          effectiveFsLevel = effectiveFsLevel[part].content!;
        } else {
          return `cat: ${fileName}: No such file or directory in path`;
        }
      }
    }
    if (!effectiveFsLevel) return `cat: ${fileName}: Invalid current path`;

    if (effectiveFsLevel[fileName] && effectiveFsLevel[fileName].type === 'file') {
      return effectiveFsLevel[fileName].content || '';
    } else {
      return `cat: ${fileName}: No such file`;
    }
  }

  // Escrita de arquivo (echo > arquivo)
  function writeFile(path: string[], fileName: string, content: string): string {
    let effectiveFsLevel = fileSystem['~'].content;
    if (path.length > 1) {
      for (const part of path.slice(1)) {
        if (effectiveFsLevel && effectiveFsLevel[part] && effectiveFsLevel[part].type === 'dir') {
          effectiveFsLevel = effectiveFsLevel[part].content!;
        } else {
          return `echo: cannot write to '${fileName}': No such file or directory in path`;
        }
      }
    }
    if (!effectiveFsLevel) return `echo: cannot write to '${fileName}': Invalid current path`;

    if (!effectiveFsLevel[fileName]) {
      effectiveFsLevel[fileName] = { type: 'file', content };
    } else if (effectiveFsLevel[fileName].type === 'file') {
      effectiveFsLevel[fileName].content = content;
    } else {
      return `echo: cannot write to '${fileName}': Not a file`;
    }
    setFileSystem((prevFs) => ({ ...prevFs }));
    return '';
  }

  // Retorno do hook
  return {
    fileSystem,
    setFileSystem,
    currentPath,
    setCurrentPath,
    gitRepoPath,
    setGitRepoPath,
    workingDirectoryFiles,
    setWorkingDirectoryFiles,
    createFile,
    deleteFile,
    navigateTo,
    createDirectory,
    readFile,
    writeFile,
  };
}
