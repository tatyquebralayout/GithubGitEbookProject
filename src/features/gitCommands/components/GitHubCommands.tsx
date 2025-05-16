import React from 'react';
import { gitCommandsData, CommandCategory } from '../../../features/game/data/commandsData';
import { AuthorProfile } from '../../../types/author.types';
import { useAuthorDialog } from '../hooks/useAuthorDialog';
import GitHubCommandsPresentation from './github/GitHubCommandsPresentation';

// Author data for the intro section
const githubCommandsIntroAuthors: AuthorProfile[] = [
  {
    src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Ricardo Alves - Especialista DevOps',
    miniBio:
      'Ricardo vive e respira automação e infraestrutura como código, onde Git e GitHub CLI são fundamentais para aumentar a produtividade.',
    socialLinks: { github: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'O GitHub CLI é uma ferramenta incrível que traz todo o poder do GitHub para seu terminal.',
      },
      {
        type: 'text',
        content:
          'Com ele, você pode gerenciar issues, pull requests e repositórios sem sair da linha de comando.',
      },
      {
        type: 'text',
        content:
          'Automatizar fluxos de trabalho com GitHub CLI pode economizar horas do seu tempo toda semana.',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'Sofia Ferreira - Criadora de Conteúdo Tech',
    miniBio:
      'Sofia foca em traduzir jargões técnicos em explicações claras e envolventes para a comunidade de desenvolvedores.',
    socialLinks: { linkedin: '#', website: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'O GitHub CLI é perfeito para quem prefere trabalhar no terminal e quer integração perfeita com o GitHub.',
      },
      {
        type: 'text',
        content:
          'Imagine gerenciar todo seu fluxo de trabalho, desde criar uma issue até mergear um PR, sem sair do terminal!',
      },
    ],
  },
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
          'Dominar o GitHub CLI é um diferencial para qualquer desenvolvedor que valoriza eficiência.',
      },
      {
        type: 'text',
        content:
          'É como ter a interface web do GitHub ao alcance dos seus dedos, diretamente no terminal!',
      },
    ],
  },
  {
    src: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format',
    alt: 'André Souza - Eng. de Software Sênior',
    miniBio:
      'André foca em construir software robusto e escalável, utilizando Git e GitHub CLI para melhorar a colaboração em equipe.',
    socialLinks: { github: '#', linkedin: '#' },
    dialogue: [
      {
        type: 'text',
        content:
          'Em equipes grandes, o GitHub CLI simplifica a revisão de código e a comunicação entre desenvolvedores.',
      },
      {
        type: 'text',
        content:
          'Poder verificar o status dos PRs ou criar uma issue diretamente do terminal torna o trabalho muito mais fluido.',
      },
    ],
  },
];

const GitHubCommands = () => {
  // Obter apenas os comandos GitHub do gitCommandsData
  const githubCommands =
    gitCommandsData.find((category: CommandCategory) => category.title === 'Comandos GitHub')
      ?.commands || [];

  const { selectedAuthor, currentStep, selectAuthor, nextStep, prevStep } = useAuthorDialog(
    githubCommandsIntroAuthors,
    'Ricardo Alves'
  );

  return (
    <GitHubCommandsPresentation
      authors={githubCommandsIntroAuthors}
      commands={githubCommands}
      selectedAuthor={selectedAuthor}
      currentStep={currentStep}
      selectAuthor={selectAuthor}
      nextStep={nextStep}
      prevStep={prevStep}
    />
  );
};

export default GitHubCommands;
