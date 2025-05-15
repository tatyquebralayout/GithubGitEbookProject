export interface Commit {
  id: string;
  parentId: string | null;
  secondParentId?: string;
  message: string;
  author: string;
  date: string;
  branch: string;
}

export interface FileSystemNode {
  type: 'file' | 'dir';
  content?: { [key: string]: FileSystemNode }; // Content for directories
  // fileContent?: string; // Could add later for actual file content simulation
}

export interface FileSystemStructure {
  [path: string]: {
    type: 'file' | 'dir';
    content?: FileSystemStructure;
  };
}

export interface BranchMeta {
  parentBranch: string | null;
  parentCommitId: string | null;
}

// Novas interfaces para o simulador do GitHub

export interface GitHubRepository {
  name: string;
  owner: string;
  description: string;
  isPrivate: boolean;
  stars: number;
  forks: number;
  watchers: number;
  defaultBranch: string;
  createdAt: string;
  lastUpdatedAt: string;
}

export interface GitHubRemote {
  name: string;
  url: string;
  isConnected: boolean;
}

export interface GitHubPullRequest {
  id: number;
  title: string;
  description: string;
  sourceBranch: string;
  targetBranch: string;
  author: string;
  createdAt: string;
  status: 'open' | 'closed' | 'merged';
  commits: string[]; // IDs dos commits
}

export interface GitHubIssue {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  status: 'open' | 'closed';
  labels: string[];
  assignees: string[];
}

export interface FileContent {
  name: string;
  path: string;
  type: 'file' | 'directory';
  size?: number;
  content?: string;
  lastModified: string;
  lastCommitId?: string;
  lastCommitMessage?: string;
}

export interface GitHubFileStructure {
  [path: string]: FileContent;
}