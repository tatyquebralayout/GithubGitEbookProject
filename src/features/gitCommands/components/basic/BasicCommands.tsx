import React, { useState } from 'react';
import { gitCommandsData } from '@/features/game/data/commandsData';
import type { CommandData } from '@/features/game/components/CommandTableRow';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel, Navigation } from 'swiper/modules';
import { GitBranch, GitCommit, GitMerge, Github } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import GitOfficialLogo from '@/components/icons/GitOfficialLogo';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './FlashcardGallery.css';

SwiperCore.use([EffectCards, Mousewheel, Navigation]);

// Readicionando a interface CommandWithLaymanExplanation
interface CommandWithLaymanExplanation extends CommandData {
  laymanExplanation?: string;
  commandsTextList?: string[];
  mermaidChart?: string; // Mantendo caso seja usado no futuro, mesmo que não agora
}

const BasicCommands: React.FC = () => {
  const [galleryStarted, setGalleryStarted] = useState(false);
  const [activeCommandExplanation, setActiveCommandExplanation] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeMasterSubject, setActiveMasterSubject] = useState('');

  const basicCommandsCategory = gitCommandsData.find(
    (category) => category.title === 'Primeiros Passos'
  );

  if (!basicCommandsCategory || !basicCommandsCategory.commands) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Categoria de comandos básicos não encontrada ou sem comandos.</p>
      </div>
    );
  }

  const beginnerCommands = basicCommandsCategory.commands.filter(
    (cmd) => cmd.difficultyType === 'beginner'
  );

  const commands: CommandWithLaymanExplanation[] = beginnerCommands.map((cmd) => ({
    ...cmd,
    laymanExplanation:
      (cmd as CommandWithLaymanExplanation).laymanExplanation ||
      `Explicação detalhada para leigos sobre '${cmd.name}' estará aqui.`,
    commandsTextList: (cmd as CommandWithLaymanExplanation).commandsTextList || [],
    mermaidChart: cmd.mermaidChart, // Acessando a propriedade da interface base CommandData
  }));

  const iconColors = {
    github: '#6e5494',
    gitBranch: '#f05033',
    gitCommit: '#0366d6',
    gitMerge: '#10B981',
  };

  const getMasterSubject = (commandName: string): string => {
    if (['git config', 'git init', 'git clone'].includes(commandName)) {
      return 'CONFIGURAÇÃO E INICIALIZAÇÃO';
    } else if (
      ['git status', 'git add', 'git commit', 'git push', 'git pull', 'git log'].includes(
        commandName
      )
    ) {
      return 'CICLO DE VIDA BÁSICO';
    } else if (['git branch', 'git checkout', 'git merge'].includes(commandName)) {
      return 'BRANCHES E MERGING';
    } else {
      return ''; // Default or unknown subject
    }
  };

  const handleStartGallery = () => {
    setGalleryStarted(true);
    if (commands.length > 0) {
      const firstCommand = commands[0];
      setActiveCommandExplanation(firstCommand.laymanExplanation || '');
      setActiveIndex(0);
      setActiveMasterSubject(getMasterSubject(firstCommand.name));
    }
  };

  const handleSlideChange = (swiperInstance: SwiperCore) => {
    const currentCommand = commands[swiperInstance.realIndex];
    if (currentCommand) {
      setActiveCommandExplanation(currentCommand.laymanExplanation || '');
      setActiveIndex(swiperInstance.realIndex);
      setActiveMasterSubject(getMasterSubject(currentCommand.name));
    }
  };

  const handleCopyCommand = (commandText: string) => {
    navigator.clipboard
      .writeText(commandText)
      .then(() => {
        setCopiedCommand(commandText);
        setTimeout(() => setCopiedCommand(null), 2000);
      })
      .catch((err) => {
        console.error('Falha ao copiar comando: ', err);
      });
  };

  const currentActiveCommand = commands[activeIndex];

  return (
    <div className="space-y-12">
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do Git"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Git Básico
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Comandos Básicos do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Comece sua jornada com Git dominando os comandos essenciais
          </p>
        </div>
      </section>

      <section className="bg-white pt-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-github-fg-default">Fundamentos do Git</h2>
            <p className="mt-4 text-lg text-gray-700">
              Os comandos básicos do Git são o ponto de partida para qualquer desenvolvedor iniciar
              no controle de versão. Com esses comandos, você será capaz de inicializar
              repositórios, salvar suas alterações e visualizar o histórico do seu trabalho. Estes
              são os blocos fundamentais que você utilizará diariamente em seus projetos, formando a
              base para o desenvolvimento das demais habilidades com Git.
            </p>
          </div>
        </div>
      </section>

      <section className="flashcard-gallery-section bg-gray-50 py-12">
        <div className="flashcard-gallery-content container mx-auto px-4">
          {!galleryStarted ? (
            <div className="flashcard-gallery-info text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-700">Aprenda com Flashcards!</h2>
              <p className="mb-6 text-gray-600">
                Navegue pelos cards para aprender e revisar os comandos básicos do Git de forma
                interativa. Cada card apresenta um comando essencial com sua descrição.
              </p>
              <button
                onClick={handleStartGallery}
                className="flashcard-btn rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                Começar
              </button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center">
              {activeMasterSubject && (
                <div className="sticky top-[75px] z-10 w-full bg-gray-50 py-4 text-center shadow-md">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-gray-700">
                    {activeMasterSubject}
                  </h3>
                </div>
              )}
              <div className="flashcard-swiper-container mt-6 w-full max-w-md">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  initialSlide={0}
                  mousewheel={true}
                  loop={commands.length > 3}
                  modules={[EffectCards, Mousewheel, Navigation]}
                  className="h-[450px] w-full"
                  navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  onSlideChange={handleSlideChange}
                  onSwiper={(swiper) => {
                    if (commands.length > 0) {
                      const initialCommand = commands[swiper.realIndex];
                      setActiveCommandExplanation(initialCommand.laymanExplanation || '');
                      setActiveIndex(swiper.realIndex);
                      setActiveMasterSubject(getMasterSubject(initialCommand.name));
                    }
                  }}
                >
                  {commands.map((command) => {
                    const masterSubject = getMasterSubject(command.name);
                    let slideBaseClass =
                      'flashcard-swiper-slide relative flex flex-col justify-center items-center';
                    let textColorClass = 'text-white';

                    if (masterSubject === 'CONFIGURAÇÃO E INICIALIZAÇÃO') {
                      slideBaseClass += ' flashcard-swiper-slide-config-init';
                      textColorClass = 'text-white';
                    } else if (masterSubject === 'CICLO DE VIDA BÁSICO') {
                      slideBaseClass += ' flashcard-swiper-slide-basic-lifecycle';
                      textColorClass = 'text-gray-800';
                    } else if (masterSubject === 'BRANCHES E MERGING') {
                      slideBaseClass += ' flashcard-swiper-slide-branches-merging';
                      textColorClass = 'text-white';
                    } else {
                      slideBaseClass += ' flashcard-swiper-slide-default-theme';
                      textColorClass = 'text-white';
                    }

                    return (
                      <SwiperSlide
                        key={command.name}
                        className={`${slideBaseClass} ${textColorClass}`}
                      >
                        <div className="absolute right-3 top-3 z-10 md:right-4 md:top-4">
                          <Badge
                            variant={command.difficultyType === 'beginner' ? 'success' : 'primary'}
                            size="sm"
                            className="font-bold"
                          >
                            {command.difficultyText}
                          </Badge>
                        </div>

                        <div className="flex h-full w-full flex-col items-center justify-center px-8 text-center md:px-10">
                          <GitOfficialLogo size={32} className="mb-3 rounded bg-gray-800 p-1" />
                          <h2
                            className={`flashcard-slide-title mb-2 text-xl font-bold leading-tight md:text-2xl ${textColorClass}`}
                          >
                            {command.name}
                          </h2>
                          <p
                            className={`flashcard-slide-description_short text-xs leading-relaxed opacity-90 md:text-sm ${textColorClass}`}
                          >
                            {command.description}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <div className="swiper-button-prev !text-green-500 hover:!text-green-700"></div>
                  <div className="swiper-button-next !text-green-500 hover:!text-green-700"></div>
                </Swiper>
              </div>

              {currentActiveCommand && (
                <div className="explanation-section mt-8 w-full max-w-2xl rounded-lg bg-white p-6 text-center shadow-xl">
                  <div className="flex items-center justify-center">
                    <GitOfficialLogo size={32} className="mr-3 rounded bg-gray-800 p-1" />
                    <h4 className="text-xl font-semibold text-gray-800">Explicação Detalhada:</h4>
                  </div>
                  <p className="mt-3 text-gray-600">{activeCommandExplanation}</p>
                </div>
              )}

              {currentActiveCommand &&
                currentActiveCommand.commandsTextList &&
                currentActiveCommand.commandsTextList.length > 0 && (
                  <div className="command-examples-section mt-6 w-full max-w-2xl rounded-lg bg-gray-100 p-6 shadow-lg">
                    <h4 className="mb-3 text-center text-lg font-semibold text-gray-700">
                      Exemplo de Comando:
                    </h4>
                    <ul className="space-y-2">
                      {currentActiveCommand.commandsTextList.map((cmdText, index) => (
                        <li key={index} className="relative rounded-md bg-gray-800 p-3 shadow">
                          <code className="font-mono text-sm text-green-400 md:text-base">
                            {cmdText}
                          </code>
                          <button
                            onClick={() => handleCopyCommand(cmdText)}
                            title="Copiar comando"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-gray-700 p-1.5 text-gray-400 transition-colors hover:bg-gray-600 hover:text-green-400"
                          >
                            {copiedCommand === cmdText ? 'Copiado!' : 'Copiar'}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          )}
        </div>
        <ul className="flashcard-circles absolute inset-0 z-[-1] overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const iconType = i % 4;
            let IconComponent;
            let iconColor;
            switch (iconType) {
              case 0:
                IconComponent = Github;
                iconColor = iconColors.github;
                break;
              case 1:
                IconComponent = GitBranch;
                iconColor = iconColors.gitBranch;
                break;
              case 2:
                IconComponent = GitCommit;
                iconColor = iconColors.gitCommit;
                break;
              default:
                IconComponent = GitMerge;
                iconColor = iconColors.gitMerge;
                break;
            }
            const size = Math.random() * (60 - 20) + 20;
            const styles: React.CSSProperties = {
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * (0.7 - 0.1) + 0.1,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
            };
            return (
              <li key={i} style={styles}>
                <IconComponent className="h-full w-full" color={iconColor} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default BasicCommands;
