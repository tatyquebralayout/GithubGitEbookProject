declare module 'lucide-react' {
  import { FunctionComponent, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
  }
  
  type Icon = FunctionComponent<LucideProps>;
  
  export const GitBranch: Icon;
  export const GitCommit: Icon;
  export const GitMerge: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Search: Icon;
  export const BookOpen: Icon;
  export const Tag: Icon;
  export const Terminal: Icon;
  export const Filter: Icon;
  export const Users: Icon;
  export const Book: Icon;
  export const Folders: Icon;
  export const File: Icon;
  export const Clock: Icon;
  export const Zap: Icon;
  export const RefreshCw: Icon;
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const Github: Icon;
  export const Twitter: Icon;
  export const Linkedin: Icon;
  export const Award: Icon;
  export const Send: Icon;
  export const Crosshair: Icon;
  export const Mail: Icon;
  export const Globe: Icon;
  export const Heart: Icon;
  export const Code: Icon;
  export const Target: Icon;
  export const Calendar: Icon;
  export const Instagram: Icon;
}