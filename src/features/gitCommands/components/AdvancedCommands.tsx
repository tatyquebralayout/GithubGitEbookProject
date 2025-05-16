import React from 'react';
import { gitCommandsData, CommandCategory } from '../../../features/game/data/commandsData';
import { AuthorProfile } from '../../../types/author.types';
// import { useAuthorDialog } from '../hooks/useAuthorDialog'; // Não mais necessário aqui diretamente
// import AdvancedCommandsPresentation from './advanced/AdvancedCommandsPresentation'; // Será substituído por CommandsBase
import CommandsBase from './CommandsBase'; // Caminho corrigido

// Dados específicos para Comandos Avançados
const advancedCommandsIntroAuthors: AuthorProfile[] = [
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
          'Os comandos avançados de Git podem ser intimidadores, mas são extremamente poderosos para situações complexas.',
      },
      {
        type: 'text',
        content:
          'Rebase, cherry-pick e reflog são ferramentas que todo desenvolvedor sênior deve dominar para resolver crises no código.',
      },
      {
        type: 'text',
        content:
          "Quando você entende o modelo de objetos interno do Git, consegue fazer 'mágica' com esses comandos avançados.",
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
          'Comandos avançados são como superpoderes do Git. Use-os com cuidado, mas não tenha medo de experimentar!',
      },
      {
        type: 'text',
        content:
          'Mesmo em projetos pessoais, praticar comandos avançados te prepara para resolução de problemas em projetosissionais.',
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
          'Em ambientes DevOps, comandos avançados de Git são usados diariamente para automatizar fluxos de trabalho e manter a integridade dos pipelines.',
      },
      {
        type: 'text',
        content:
          "Saber como 'consertar o histórico' com rebase interativo ou como recuperar commits perdidos com reflog pode salvar seu projeto em momentos críticos.",
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
          'Não tenha medo dos comandos avançados! Estão aqui para ajudar quando você mais precisar deles.',
      },
      {
        type: 'text',
        content:
          'É como ter um kit de ferramentas especializadas - você não usa todo dia, mas quando precisa, fica feliz por conhecê-las.',
      },
    ],
  },
];

const AdvancedCommands = () => {
  const advancedGitCommands =
    gitCommandsData.find((category: CommandCategory) => category.title === 'Comandos Avançados')
      ?.commands || [];

  return (
    <CommandsBase
      categoryText="Git Avançado"
      title="Comandos Avançados do Git"
      description="Os comandos avançados do Git permitem gerenciar situações complexas e fornecem ferramentas poderosas para casos específicos. Estas operações avançadas são especialmente úteis para resolver conflitos difíceis, ajustar o histórico de um projeto e resolver problemas em repositórios. Dominar estes comandos fará de você um especialista em Git, capaz de resolver quase qualquer situação no controle de versão."
      bannerImage="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?w=1920&auto=compress,format"
      gradientFrom="from-red-700/90"
      gradientTo="to-red-900/90"
      pageSubtitle="Domine técnicas avançadas de Git para resolução de problemas complexos e maior eficiência em projetos"
      commandsSectionTitle="Comandos Avançados do Git"
      commandsSectionSubtitle="Domine ferramentas poderosas para situações complexas e emergências"
      commands={advancedGitCommands}
      authors={advancedCommandsIntroAuthors}
      defaultAuthorNameHint="André Souza"
      showPracticeChallenge={true} // Ou false, dependendo da intenção para esta página
    />
  );
};

export default AdvancedCommands;
