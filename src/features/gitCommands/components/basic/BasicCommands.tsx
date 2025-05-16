import React from 'react';
import { gitCommandsData } from '../../../game/data/commandsData';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel } from 'swiper/modules';
import { Github, GitBranch, GitCommit, GitMerge } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './FlashcardGallery.css';

SwiperCore.use([EffectCards, Mousewheel]);

const BasicCommands: React.FC = () => {
  const basicCommandsCategory = gitCommandsData.find(
    (category) => category.title === 'Comandos Básicos'
  );

  if (!basicCommandsCategory || !basicCommandsCategory.commands) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Categoria de comandos básicos não encontrada ou sem comandos.</p>
      </div>
    );
  }

  const commands = basicCommandsCategory.commands;

  // Cores para os ícones
  const iconColors = {
    github: '#6e5494', // Roxo GitHub
    gitBranch: '#f05033', // Laranja Git
    gitCommit: '#0366d6', // Azul GitHub (para variação)
    gitMerge: '#10B981', // Verde (pode ser ajustado)
  };

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
        <div className="flashcard-gallery-content">
          <div className="flashcard-gallery-info">
            <h2 className="mb-4 text-2xl font-bold text-gray-700">
              Aprenda com Flashcards!
            </h2>
            <p>
              Navegue pelos cards para aprender e revisar os comandos básicos do Git de forma interativa.
              Cada card apresenta um comando essencial com sua descrição.
            </p>
          </div>
          <div className="flashcard-swiper-container">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              initialSlide={2}
              mousewheel={true}
              loop={true}
              modules={[EffectCards, Mousewheel]}
              className="h-full w-full"
            >
              {commands.map((command, index) => (
                <SwiperSlide key={index} className="flashcard-swiper-slide">
                  <div className="flashcard-slide-tag">{command.difficultyText || 'Básico'}</div>
                  <h2 className="flashcard-slide-title">{command.name}</h2>
                  <p className="flashcard-slide-description">{command.description}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <ul className="flashcard-circles">
          {[...Array(20)].map((_, i) => {
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
              default: // case 3
                IconComponent = GitMerge;
                iconColor = iconColors.gitMerge;
                break;
            }

            return (
              <li key={i}>
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
