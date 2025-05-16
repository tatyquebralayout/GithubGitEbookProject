import { CommandData } from '../components/CommandTableRow';
import { commandDiagrams } from './commandDiagrams';

// Define um tipo para autores que corresponde ao requisito do AvatarGroup
type Author = {
  src: string;
  alt: string;
};

// Dados dos autores (movidos de Game.tsx)
export const gameAuthors: Author[] = [
  {
    src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 1',
  },
  {
    src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 2',
  },
  {
    src: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 3',
  },
  {
    src: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 4',
  },
  {
    src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 5',
  },
  {
    src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=64&h=64&fit=crop&auto=compress,format',
    alt: 'Autor 6',
  },
];

export interface CommandCategory {
  title: string;
  commands: CommandData[];
}

export const gitCommandsData: CommandCategory[] = [
  {
    title: 'Comandos Básicos',
    commands: [
      {
        name: 'git init',
        mermaidChart: commandDiagrams['git init'],
        description: 'Inicializa um novo repositório Git.',
        chapterLink: '/game/basic-commands#init',
        chapterText: 'Cap. 1: Setup',
        authors: gameAuthors,
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
        targetPath: '/git-comandos-basicos',
      },
      {
        name: 'git clone [url]',
        mermaidChart: commandDiagrams['git clone [url]'],
        description: 'Clona um repositório existente.',
        chapterLink: '/game/basic-commands#clone',
        chapterText: 'Cap. 1: Setup',
        authors: gameAuthors,
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
      },
      {
        name: 'git add [file]',
        mermaidChart: commandDiagrams['git add [file]'],
        description: 'Adiciona arquivos ao staging area.',
        chapterLink: '/game/basic-commands#add',
        chapterText: 'Cap. 2: Mudanças',
        authors: gameAuthors,
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
      },
      {
        name: 'git commit -m "[message]"',
        mermaidChart: commandDiagrams['git commit -m "[message]"'],
        description: 'Salva as mudanças no repositório.',
        chapterLink: '/game/basic-commands#commit',
        chapterText: 'Cap. 2: Mudanças',
        authors: gameAuthors,
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
      },
      {
        name: 'git status',
        mermaidChart: commandDiagrams['git status'],
        description: 'Mostra o estado das mudanças.',
        chapterLink: '/game/basic-commands#status',
        chapterText: 'Cap. 2: Mudanças',
        authors: gameAuthors,
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
      },
    ],
  },
  {
    title: 'Comandos Intermediários',
    commands: [
      {
        name: 'git branch',
        mermaidChart: commandDiagrams['git branch'],
        description: 'Lista todos os branches.',
        chapterLink: '/game/intermediate-commands#branch',
        chapterText: 'Cap. 3: Branches',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
      {
        name: 'git branch [name]',
        mermaidChart: commandDiagrams['git branch [name]'],
        description: 'Cria um novo branch.',
        chapterLink: '/game/intermediate-commands#branch-new',
        chapterText: 'Cap. 3: Branches',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
      {
        name: 'git checkout [name]',
        mermaidChart: commandDiagrams['git checkout [name]'],
        description: 'Muda para um branch existente.',
        chapterLink: '/game/intermediate-commands#checkout',
        chapterText: 'Cap. 3: Branches',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
      {
        name: 'git merge [branch]',
        mermaidChart: commandDiagrams['git merge [branch]'],
        description: 'Combina branches.',
        chapterLink: '/game/intermediate-commands#merge',
        chapterText: 'Cap. 4: Merging',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
      {
        name: 'git pull',
        mermaidChart: commandDiagrams['git pull'],
        description: 'Atualiza o repositório local.',
        chapterLink: '/game/intermediate-commands#pull',
        chapterText: 'Cap. 5: Remotos',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
      {
        name: 'git push',
        mermaidChart: commandDiagrams['git push'],
        description: 'Envia mudanças para o remoto.',
        chapterLink: '/game/intermediate-commands#push',
        chapterText: 'Cap. 5: Remotos',
        authors: gameAuthors,
        difficultyType: 'intermediate',
        difficultyText: 'Intermediário',
      },
    ],
  },
  {
    title: 'Comandos Avançados',
    commands: [
      {
        name: 'git rebase [branch]',
        mermaidChart: commandDiagrams['git rebase [branch]'],
        description: 'Reaplica commits sobre outro branch.',
        chapterLink: '/game/advanced-commands#rebase',
        chapterText: 'Cap. 6: Rebase',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
      {
        name: 'git stash',
        mermaidChart: commandDiagrams['git stash'],
        description: 'Salva mudanças temporariamente.',
        chapterLink: '/game/advanced-commands#stash',
        chapterText: 'Cap. 7: Stash',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
      {
        name: 'git cherry-pick [commit]',
        mermaidChart: commandDiagrams['git cherry-pick [commit]'],
        description: 'Aplica um commit específico.',
        chapterLink: '/game/advanced-commands#cherry-pick',
        chapterText: 'Cap. 8: Cherry-pick',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
      {
        name: 'git log',
        mermaidChart: commandDiagrams['git log'],
        description: 'Visualiza histórico de commits.',
        chapterLink: '/game/advanced-commands#log',
        chapterText: 'Cap. 9: Histórico',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
      {
        name: 'git reset [file]',
        mermaidChart: commandDiagrams['git reset [file]'],
        description: 'Remove arquivos do staging.',
        chapterLink: '/game/advanced-commands#reset',
        chapterText: 'Cap. 10: Reset',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
      {
        name: 'git tag [name]',
        mermaidChart: commandDiagrams['git tag [name]'],
        description: 'Marca um ponto no histórico.',
        chapterLink: '/game/advanced-commands#tag',
        chapterText: 'Cap. 11: Tags',
        authors: gameAuthors,
        difficultyType: 'advanced',
        difficultyText: 'Avançado',
      },
    ],
  },
  {
    title: 'Comandos GitHub',
    commands: [
      {
        name: 'gh pr create',
        description: 'Cria um Pull Request no GitHub.',
        chapterLink: '/game/github-commands#pr-create',
        chapterText: 'Cap. 12: GitHub PRs',
        authors: gameAuthors,
        difficultyType: 'github',
        difficultyText: 'GitHub',
      },
      {
        name: 'gh issue list',
        description: 'Lista issues do repositório.',
        chapterLink: '/game/github-commands#issue-list',
        chapterText: 'Cap. 13: GitHub Issues',
        authors: gameAuthors,
        difficultyType: 'github',
        difficultyText: 'GitHub',
      },
      {
        name: 'gh repo fork',
        description: 'Faz um fork de um repositório.',
        chapterLink: '/game/github-commands#repo-fork',
        chapterText: 'Cap. 14: GitHub Forks',
        authors: gameAuthors,
        difficultyType: 'github',
        difficultyText: 'GitHub',
      },
    ],
  },
  {
    title: 'Dicas Pro',
    commands: [
      {
        name: 'git bisect',
        description: 'Encontra o commit que introduziu um bug.',
        chapterLink: '/game/advanced-commands#bisect',
        chapterText: 'Cap. 15: Debugging',
        authors: gameAuthors,
        difficultyType: 'pro',
        difficultyText: 'Pro',
      },
      {
        name: 'git shortlog -sn',
        description: 'Mostra contribuidores e contagem de commits.',
        chapterLink: '/game/advanced-commands#shortlog',
        chapterText: 'Cap. 16: Análise',
        authors: gameAuthors,
        difficultyType: 'pro',
        difficultyText: 'Pro',
      },
      {
        name: 'git reflog',
        description: 'Mostra o histórico de movimentações do HEAD.',
        chapterLink: '/game/advanced-commands#reflog',
        chapterText: 'Cap. 17: Recuperação',
        authors: gameAuthors,
        difficultyType: 'pro',
        difficultyText: 'Pro',
      },
    ],
  },
];
