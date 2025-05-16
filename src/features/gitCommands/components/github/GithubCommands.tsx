import React, { useState } from 'react';
import { gitCommandsData } from '@/features/game/data/commandsData';
import type { CommandData } from '@/features/game/components/CommandTableRow';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel, Navigation } from 'swiper/modules';
import { Github } from 'lucide-react'; // Removidos CheckSquare e Clipboard
import Badge from '@/components/ui/Badge';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '@/features/gitCommands/components/basic/FlashcardGallery.css';

SwiperCore.use([EffectCards, Mousewheel, Navigation]);

// Interface CommandWithLaymanExplanation (pode ser movida para um arquivo de tipos compartilhado no futuro)
interface CommandWithLaymanExplanation extends CommandData {
  laymanExplanation?: string;
  commandsTextList?: string[];
  mermaidChart?: string;
}

const GithubCommands: React.FC = () => {
  const [galleryStarted, setGalleryStarted] = useState(false);
  const [activeCommandExplanation, setActiveCommandExplanation] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeMasterSubject, setActiveMasterSubject] = useState(''); // Pode ser usado para subcategorias do GitHub se necessário

  const githubCommandsCategory = gitCommandsData.find(
    (category) => category.title === 'GitHub - Primeiros Passos'
  );

  if (!githubCommandsCategory || !githubCommandsCategory.commands) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Categoria de comandos GitHub não encontrada ou sem comandos.</p>
      </div>
    );
  }

  // Não há filtro de dificuldade aqui, pegamos todos os comandos da categoria GitHub
  const commands: CommandWithLaymanExplanation[] = githubCommandsCategory.commands.map((cmd) => ({
    ...cmd,
    laymanExplanation:
      (cmd as CommandWithLaymanExplanation).laymanExplanation ||
      `Explicação detalhada para leigos sobre '${cmd.name}' estará aqui.`,
    commandsTextList: (cmd as CommandWithLaymanExplanation).commandsTextList || [],
    mermaidChart: cmd.mermaidChart,
  }));

  // iconColors não está sendo usado, pode ser removido ou comentado
  // const iconColors = {
  //   github: '#181717',
  //   gitBranch: '#f05033',
  //   gitCommit: '#0366d6',
  //   gitMerge: '#10B981',
  // };

  const getMasterSubject = (_commandName: string): string => {
    // Parâmetro _commandName não utilizado
    return githubCommandsCategory?.title || 'GitHub';
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
    // Para textos que não são comandos de terminal (ex: URLs ou passos), copiar pode não ser o ideal
    // Mas mantemos a funcionalidade caso alguns itens da lista sejam copiáveis.
    navigator.clipboard
      .writeText(commandText)
      .then(() => {
        setCopiedCommand(commandText);
        setTimeout(() => setCopiedCommand(null), 2000);
      })
      .catch((err) => {
        console.error('Falha ao copiar: ', err);
      });
  };

  const currentActiveCommand = commands[activeIndex];

  return (
    <div className="space-y-12">
      {/* Seção de Banner para GitHub */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Imagem de banner temática do GitHub */}
          <img
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do GitHub"
            className="h-full w-full object-cover"
          />
          {/* Overlay escuro para o banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            GitHub Essencial
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Dominando o GitHub: Primeiros Passos
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Aprenda a hospedar seus projetos, colaborar e muito mais com o GitHub.
          </p>
        </div>
      </section>

      {/* Seção Introdutória */}
      <section className="bg-gray-800 pt-8 text-white">
        {' '}
        {/* Fundo escuro */}
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white">Fundamentos do GitHub</h2>
            <p className="mt-4 text-lg text-gray-300">
              O GitHub é uma plataforma essencial para desenvolvedores. Com estes passos, você
              aprenderá a criar contas, repositórios, clonar projetos existentes, fazer forks para
              contribuir e enviar suas alterações.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Flashcards */}
      <section className="flashcard-gallery-section bg-gray-900 py-12">
        {' '}
        {/* Fundo mais escuro */}
        <div className="flashcard-gallery-content container mx-auto px-4">
          {!galleryStarted ? (
            <div className="flashcard-gallery-info text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-200">Aprenda com Flashcards!</h2>
              <p className="mb-6 text-gray-400">
                Navegue pelos cards para aprender os passos essenciais do GitHub de forma
                interativa.
              </p>
              <button
                onClick={handleStartGallery}
                // Botão com cores que contrastem com o fundo escuro
                className="flashcard-btn rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
              >
                Começar
              </button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center">
              {activeMasterSubject && (
                <div className="sticky top-[75px] z-10 w-full bg-gray-900 py-4 text-center shadow-md">
                  {/* Adicionado wrapper para título fixo, com bg-gray-900 e top-[75px] */}
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-gray-300">
                    {activeMasterSubject}
                  </h3>
                </div>
              )}
              <div className="flashcard-swiper-container mt-6 w-full max-w-md">
                {' '}
                {/* Adicionado mt-6 para espaçamento */}
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  initialSlide={0}
                  mousewheel={true}
                  loop={commands.length > 3} // Habilitar loop se houver mais de 3 cards
                  modules={[EffectCards, Mousewheel, Navigation]}
                  className="h-[450px] w-full" // Altura ajustada se necessário
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
                    // Estilo do card GitHub: fundo preto, texto branco
                    const slideBaseClass =
                      'flashcard-swiper-slide relative flex flex-col justify-center items-center bg-black border border-gray-700 rounded-xl shadow-2xl';
                    const textColorClass = 'text-white';

                    return (
                      <SwiperSlide
                        key={command.name}
                        className={`${slideBaseClass} ${textColorClass}`}
                      >
                        {/* Badge de dificuldade no canto superior direito */}
                        <div className="absolute right-3 top-3 z-10 md:right-4 md:top-4">
                          <Badge
                            variant={command.difficultyType === 'beginner' ? 'success' : 'primary'}
                            size="sm"
                            className="font-bold"
                          >
                            {command.difficultyText}
                          </Badge>
                        </div>

                        {/* Conteúdo do Card */}
                        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-8 text-center md:px-8">
                          {/* Logo do GitHub */}
                          <Github size={40} className="mb-4 text-purple-400" />
                          <h2
                            className={`flashcard-slide-title mb-3 text-xl font-bold leading-tight md:text-2xl ${textColorClass}`}
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
                  {/* Botões de navegação do Swiper com cores ajustadas */}
                  <div className="swiper-button-prev !text-purple-500 hover:!text-purple-300"></div>
                  <div className="swiper-button-next !text-purple-500 hover:!text-purple-300"></div>
                </Swiper>
              </div>

              {/* Seção de Explicação Detalhada */}
              {currentActiveCommand && (
                <div className="explanation-section mt-8 w-full max-w-2xl rounded-lg bg-gray-800 p-6 text-center shadow-xl">
                  {' '}
                  {/* Fundo escuro */}
                  <div className="flex items-center justify-center">
                    <Github size={32} className="mr-3 text-purple-400" />
                    <h4 className="text-xl font-semibold text-gray-100">Explicação Detalhada:</h4>
                  </div>
                  <p className="mt-3 text-gray-300">{activeCommandExplanation}</p>
                </div>
              )}

              {/* Seção de Exemplos de Comando/Passos */}
              {currentActiveCommand &&
                currentActiveCommand.commandsTextList &&
                currentActiveCommand.commandsTextList.length > 0 && (
                  <div className="command-examples-section mt-6 w-full max-w-2xl rounded-lg bg-gray-800 p-6 shadow-lg">
                    {' '}
                    {/* Fundo escuro */}
                    <h4 className="mb-3 text-center text-lg font-semibold text-gray-200">
                      {currentActiveCommand.commandsTextList.some((cmd) =>
                        cmd.toLowerCase().includes('git ')
                      )
                        ? 'Exemplo de Comando:'
                        : 'Passos:'}
                    </h4>
                    <ul className="space-y-2">
                      {currentActiveCommand.commandsTextList.map((cmdText, index) => (
                        <li key={index} className="relative rounded-md bg-gray-700 p-3 shadow">
                          {' '}
                          {/* Fundo um pouco mais claro para destaque */}
                          <code
                            className={`font-mono text-sm ${cmdText.toLowerCase().includes('git ') ? 'text-green-400' : 'text-purple-300'} md:text-base`}
                          >
                            {cmdText}
                          </code>
                          {/* Só mostrar botão de copiar se for um comando git ou URL */}
                          {(cmdText.toLowerCase().includes('git ') ||
                            cmdText.toLowerCase().startsWith('http')) && (
                            <button
                              onClick={() => handleCopyCommand(cmdText)}
                              title="Copiar"
                              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-gray-600 p-1.5 text-gray-400 transition-colors hover:bg-gray-500 hover:text-purple-400"
                            >
                              {copiedCommand === cmdText ? 'Copiado!' : 'Copiar'}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          )}
        </div>
        {/* Ícones de fundo decorativos (opcional, pode ser adaptado para tema GitHub) */}
        <ul className="flashcard-circles absolute inset-0 z-[-1] overflow-hidden">
          {[...Array(10)].map((_, i) => {
            // Menos ícones para um visual mais limpo
            // Usar apenas o ícone do GitHub ou variações sutis
            const IconComponent = Github;
            // A variável iconColor aqui é local para o map e diferente da iconColors que foi comentada
            const iconColorString = 'rgba(167, 139, 250, 0.1)';

            const size = Math.random() * (50 - 20) + 20;
            const styles: React.CSSProperties = {
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * (0.5 - 0.1) + 0.1,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
            };
            return (
              <li key={i} style={styles}>
                <IconComponent className="h-full w-full" color={iconColorString} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default GithubCommands;
