import { type CommandData } from '../components/CommandTableRow';
// import { commandDiagrams } from './commandDiagrams'; // Removido se não usado diretamente pelos comandos abaixo

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
    title: 'Primeiros Passos',
    commands: [
      {
        name: 'git config --global user.name "Seu Nome"',
        description: 'Configura seu nome de usuário globalmente para o Git.',
        laymanExplanation:
          'Este comando diz ao Git quem você é. Seu nome será associado a todas as suas futuras contribuições (commits) em qualquer projeto Git no seu computador. Faça isso uma vez!',
        commandsTextList: ['git config --global user.name "Seu Nome Completo"'],
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'git config --global user.email "seu@email.com"',
        description: 'Configura seu email globalmente para o Git.',
        laymanExplanation:
          'Similar ao nome, este comando configura o seu email. Ele também será associado aos seus commits. Use o mesmo email que você usa em plataformas como GitHub ou GitLab. Faça isso uma vez!',
        commandsTextList: ['git config --global user.email "seu.email@exemplo.com"'],
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'git init',
        description: 'Inicia um novo repositório Git na pasta atual.',
        laymanExplanation:
          'Transforma a pasta atual do seu projeto em um repositório Git. Isso cria uma subpasta oculta chamada .git, onde o Git guardará todo o histórico e informações de versão do seu projeto. Use este comando dentro da pasta principal do seu novo projeto.',
        commandsTextList: ['git init'],
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'git clone https://github.com/usuario/repositorio.git',
        description:
          'Cria uma cópia local de um repositório existente no GitHub (ou outro servidor).',
        laymanExplanation:
          'Baixa um projeto inteiro que já existe em algum lugar (como no GitHub) para o seu computador. Você terá uma cópia completa, incluindo todos os arquivos, branches e histórico. Substitua a URL pelo link do repositório que você quer clonar.',
        commandsTextList: ['git clone https://github.com/nome-do-usuario/nome-do-repositorio.git'],
        difficultyType: 'beginner',
        difficultyText: 'Iniciante',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
    ],
  },
  // Outras categorias foram temporariamente removidas para simplificação.
  // Você precisará readicioná-las manualmente do seu histórico Git ou backup se forem necessárias.
];

// Se commandDiagrams for usado em outras partes, mantenha sua exportação.
// export { commandDiagrams };
