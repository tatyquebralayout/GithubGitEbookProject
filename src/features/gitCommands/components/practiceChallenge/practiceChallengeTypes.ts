export interface Commit {
  id: string;
  parentId?: string | null; // ID do commit pai
  message: string;
  author: string;
  date: string;
  branch: string; // Branch is now mandatory
}

export interface FileSystemNode {
  type: 'file' | 'dir';
  content?: { [key: string]: FileSystemNode }; // Content for directories
  // fileContent?: string; // Could add later for actual file content simulation
}

export interface FileSystemStructure {
  [key: string]: FileSystemNode;
}

export interface BranchMeta {
  parentBranch: string | null; // null for the initial branch (e.g., main)
  parentCommitId: string | null; // null if branched before any commits on parent
} 