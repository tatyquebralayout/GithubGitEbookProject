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
  // Nova categoria para GitHub
  {
    title: 'GitHub - Primeiros Passos',
    commands: [
      {
        name: 'Criar conta no GitHub',
        description: 'Acesse github.com e registre-se.',
        laymanExplanation:
          'Para usar o GitHub, você primeiro precisa criar uma conta gratuita em seu site oficial. Isso permitirá que você crie seus próprios repositórios, colabore em projetos de outras pessoas e muito mais.',
        commandsTextList: ['Acesse https://github.com/signup'], // Link direto para a página de registro
        difficultyType: 'beginner',
        difficultyText: 'Fácil',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'Criar novo repositório no GitHub',
        description: 'Cria um espaço no GitHub para hospedar seu projeto.',
        laymanExplanation:
          'Um repositório (ou "repo") é como uma pasta para o seu projeto no GitHub. Ele guarda todo o seu código, arquivos, imagens e o histórico de todas as alterações. Criar um repositório é o primeiro passo para colocar seu projeto no GitHub.',
        // Como são passos na UI, não comandos de terminal, vamos listá-los.
        // Poderíamos usar `mermaidChart` para ilustrar isso no futuro.
        commandsTextList: [
          '1. No GitHub, clique no botão "+" no canto superior direito.',
          '2. Selecione "New repository".',
          '3. Dê um nome ao seu repositório (ex: "meu-projeto-incrivel").',
          '4. Adicione uma descrição (opcional, mas recomendado).',
          '5. Escolha se será Público (qualquer um pode ver) ou Privado (só você e quem você convidar).',
          '6. (Opcional) Marque "Add a README file" para começar com um arquivo de descrição.',
          '7. Clique em "Create repository."',
        ],
        difficultyType: 'beginner',
        difficultyText: 'Fácil',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'git clone [URL do Repositório]',
        description: 'Baixa uma cópia de um repositório do GitHub para seu computador.',
        laymanExplanation:
          "'Clonar' um repositório significa fazer uma cópia local completa de um projeto que está no GitHub. Isso inclui todos os arquivos, o histórico de mudanças e todas as branches (versões). Depois de clonar, você pode trabalhar no projeto no seu próprio computador.",
        commandsTextList: ['git clone https://github.com/usuario/nome-do-repositorio.git'],
        difficultyType: 'beginner',
        difficultyText: 'Fácil',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'Fork de um repositório no GitHub',
        description: 'Cria sua própria cópia de um repositório de outra pessoa no GitHub.',
        laymanExplanation:
          "Fazer um 'fork' de um repositório é como criar sua própria cópia pessoal de um projeto de outra pessoa que está no GitHub. Essa cópia fica na sua conta do GitHub. É útil para quando você quer fazer alterações em um projeto sem afetar o original, ou para propor melhorias (Pull Requests) para o projeto original.",
        // Ação na UI
        commandsTextList: [
          '1. Navegue até o repositório que deseja copiar.',
          '2. Clique no botão "Fork" no canto superior direito da página do repositório.',
        ],
        difficultyType: 'beginner',
        difficultyText: 'Fácil',
        chapterLink: '',
        chapterText: '',
        authors: [],
      },
      {
        name: 'git push origin main',
        description: 'Envia seus commits locais (alterações salvas) para o repositório no GitHub.',
        laymanExplanation:
          "Depois que você fez alterações no seu projeto localmente e as salvou com 'git commit', o comando 'git push' envia essas alterações para o seu repositório no GitHub. 'origin' é geralmente o nome padrão do seu repositório remoto (no GitHub), e 'main' é o nome da branch principal. Isso atualiza o projeto no GitHub com seu trabalho mais recente.",
        commandsTextList: ['git push origin main'], // Pode ser 'master' em repositórios mais antigos
        difficultyType: 'beginner',
        difficultyText: 'Fácil',
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
