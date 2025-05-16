import React from 'react';
import { AuthorProfile } from '../../../types/author.types';
import { useAuthorDialog } from '../hooks/useAuthorDialog';
import GitBasicCommandsPresentation from './basic/GitBasicCommandsPresentation';

// New author data for the intro section
const basicCommandsIntroAuthors: AuthorProfile[] = [
  {
    src: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Tatiana Barros - Autora do Projeto',
    miniBio:
      'Tatiana é a idealizadora do GitSheet, apaixonada por simplificar o aprendizado de Git e GitHub para todos.',
    socialLinks: {
      github: 'https://github.com/example',
      linkedin: 'https://linkedin.com/in/example',
      website: '#',
    },
    dialogue: [
      {
        type: 'text',
        content:
          'Olá! Sou Tatiana Barros, criadora deste projeto. Fico feliz em ver você por aqui!',
      },
      {
        type: 'text',
        content:
          'Minha missão com o GitSheet é tornar o aprendizado de Git e GitHub uma jornada mais clara e objetiva para desenvolvedores de todos os níveis.',
      },
      {
        type: 'text',
        content:
          'Navegue pelos perfis dos nossos especialistas ou explore os comandos básicos abaixo para começar. Se tiver alguma dúvida, nosso e-book e o jogo interativo estão aqui para ajudar!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Carlos Silva - Especialista Git',
    miniBio:
      'Carlos é um entusiasta de Git com mais de 10 anos de experiência ajudando equipes a otimizar seus fluxos de trabalho de desenvolvimento.',
    socialLinks: { github: '#', linkedin: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Olá! Git pode parecer intimidador no início, mas dominar o básico é transformador. Vamos começar?',
      },
      {
        type: 'text',
        content:
          "O comando 'git init' é o seu ponto de partida para qualquer novo projeto. Ele cria um novo repositório local.",
      },
      {
        type: 'text',
        content:
          "Em seguida, 'git add' e 'git commit' se tornarão seus melhores amigos para salvar seu progresso. Explore mais na tabela abaixo!",
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Beatriz Costa - Instrutora de Coding',
    miniBio:
      'Beatriz adora desmistificar conceitos complexos de programação e capacitar novos desenvolvedores com ferramentas como Git.',
    socialLinks: { linkedin: '#', website: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Bem-vindo(a) ao mundo do Git! Estou aqui para mostrar que qualquer um pode aprender versionamento.',
      },
      {
        type: 'text',
        content:
          'Pense no Git como uma máquina do tempo para o seu código. Cometer erros faz parte, e o Git te ajuda a gerenciá-los!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'André Souza - Eng. de Software Sênior',
    miniBio:
      'André foca em construir software robusto e escalável, utilizando Git diariamente para colaboração e manutenção de código limpo.',
    socialLinks: { github: '#', linkedin: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Git é fundamental não apenas para projetos solo, mas essencial para trabalho em equipe. A colaboração é a chave!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Mariana Lima - Educadora Tech',
    miniBio:
      'Mariana é apaixonada por criar conteúdo educacional acessível que capacita estudantes a terem sucesso na indústria de tecnologia.',
    socialLinks: { website: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Aprender Git abre portas! É uma habilidade valorizada em quase todas as vagas de desenvolvimento.',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Ricardo Alves - Especialista DevOps',
    miniBio:
      'Ricardo vive e respira automação e infraestrutura como código, onde Git desempenha um papel central.',
    socialLinks: { github: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'No mundo DevOps, Git é mais que versionamento de código; é usado para gerenciar configurações, infraestrutura e muito mais!',
      },
    ],
  },
  // {
  //   src: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=128&h=128&fit=crop&auto=compress,format",
  //   alt: "Sofia Ferreira - Criadora de Conteúdo Tech",
  //   miniBio: "Sofia foca em traduzir jargões técnicos em explicações claras e envolventes para a comunidade de desenvolvedores.",
  //   socialLinks: { linkedin: "#", website: "#" },
  //   dialogue: [
  //     { type: 'text', content: "Documentar seus commits e usar branches de forma eficaz são dicas de ouro para um bom trabalho com Git." },
  //   ],
  // },
];

const GitBasicCommands = () => {
  const { selectedAuthor, currentStep, selectAuthor, nextStep, prevStep } = useAuthorDialog(
    basicCommandsIntroAuthors,
    'Tatiana Barros'
  );

  return (
    <GitBasicCommandsPresentation
      authors={basicCommandsIntroAuthors}
      selectedAuthor={selectedAuthor}
      currentStep={currentStep}
      selectAuthor={selectAuthor}
      nextStep={nextStep}
      prevStep={prevStep}
    />
  );
};

export default GitBasicCommands;
