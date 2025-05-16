import React from 'react';
import { BookOpen, Crosshair, Clock, Award, Send } from 'lucide-react';
import { GitChallengeCard } from '../../../components/ui';

export interface GuestAuthorProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const GuestAuthor: React.FC<GuestAuthorProps> = ({ email, onEmailChange, onSubmit }) => (
  <div className="space-y-24">
    {/* Hero Section */}
    <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=1920&auto=compress,format"
          alt="Pessoas colaborando em um projeto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          Autores Convidados
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
          Compartilhe Sua Expertise em Git e GitHub
        </h1>
        <p className="mt-6 text-xl text-white/80">
          Junte-se à nossa comunidade de autores e ajude a moldar o futuro do aprendizado em Git,
          contribuindo com conteúdo valioso para o GitSheet.
        </p>
      </div>
    </section>

    {/* Project Section: Guest Authors */}
    <section className="gh-section">
      <div className="gh-container">
        <div className="gh-header">
          <span className="gh-badge-primary">O Projeto</span>
          <h2 className="gh-title">Por Que Ser um Autor Convidado no GitSheet?</h2>
          <p className="gh-description">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
            turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss deixa
            as pessoas mais interessantis.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <GitChallengeCard className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-github-accent-subtle">
              <BookOpen className="h-6 w-6 text-github-accent-fg" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-github-fg-default">
              Compartilhe Conhecimento
            </h3>
            <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
              turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss
              deixa as pessoas mais interessantis.
            </p>
          </GitChallengeCard>

          <GitChallengeCard className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-github-success-subtle">
              <Crosshair className="h-6 w-6 text-github-success-fg" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-github-fg-default">
              Alcance um Público Amplo
            </h3>
            <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
              turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss
              deixa as pessoas mais interessantis.
            </p>
          </GitChallengeCard>

          <GitChallengeCard className="p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-github-attention-subtle">
              <Award className="h-6 w-6 text-github-attention-fg" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-github-fg-default">
              Ganhe Reconhecimento
            </h3>
            <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
              turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss
              deixa as pessoas mais interessantis.
            </p>
          </GitChallengeCard>
        </div>
      </div>
    </section>

    {/* Value Proposition Section */}
    <section className="gh-section bg-white">
      <div className="gh-container">
        <div className="gh-header">
          <span className="gh-badge-primary">Proposta de Valor</span>
          <h2 className="gh-title">O Que Oferecemos aos Nossos Autores</h2>
          <p className="gh-description">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
            turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss deixa
            as pessoas mais interessantis.
          </p>
        </div>

        <GitChallengeCard className="mx-auto max-w-4xl p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-github-fg-default">
                Benefícios para Você
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Plataforma para publicar seu conteúdo especializado.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Visibilidade para seu perfil profissional e projetos.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Oportunidade de colaborar com uma comunidade engajada.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-github-fg-default">
                O Que Esperamos
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Artigos originais e de alta qualidade sobre Git e GitHub.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Conteúdo prático, tutoriais, dicas ou estudos de caso.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 rounded-full bg-github-success-subtle p-1">
                    <svg
                      className="h-4 w-4 text-github-success-fg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-github-fg-muted">
                    Paixão por compartilhar conhecimento e ajudar a comunidade.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </GitChallengeCard>
      </div>
    </section>

    {/* Story Section */}
    <section className="gh-section">
      <div className="gh-container">
        <div className="gh-header">
          <span className="gh-badge-primary">Nossa História</span>
          <h2 className="gh-title">Como Tudo Começou</h2>
          <p className="gh-description">
            A jornada que nos trouxe até aqui, buscando colaboradores como você.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <GitChallengeCard className="p-8">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mt-1 rounded-full bg-github-accent-subtle p-3">
                  <Clock className="h-6 w-6 text-github-accent-fg" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-github-fg-default">
                    Do Problema à Solução Comunitária
                  </h3>
                  <p className="mt-2 text-github-fg-muted">
                    Tudo começou quando Donec gravida turpis a vulputate ultricies. Vide electram
                    sadipscing et per. Suco de cevadiss deixa as pessoas mais interessantis.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 rounded-full bg-github-success-subtle p-3">
                  <Crosshair className="h-6 w-6 text-github-success-fg" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-github-fg-default">
                    Nossa Missão Colaborativa
                  </h3>
                  <p className="mt-2 text-github-fg-muted">
                    Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec
                    gravida turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de
                    cevadiss deixa as pessoas mais interessantis.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 rounded-full bg-github-attention-subtle p-3">
                  <Award className="h-6 w-6 text-github-attention-fg" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-github-fg-default">
                    O Impacto da Sua Contribuição
                  </h3>
                  <p className="mt-2 text-github-fg-muted">
                    Vide electram sadipscing et per. Suco de cevadiss deixa as pessoas mais
                    interessantis.
                  </p>
                </div>
              </div>
            </div>
          </GitChallengeCard>
        </div>
      </div>
    </section>

    {/* Challenge Section */}
    <section className="gh-section bg-white">
      <div className="gh-container">
        <div className="gh-header">
          <span className="gh-badge-primary">O Desafio</span>
          <h2 className="gh-title">Faça Parte da Nossa Missão de Educar</h2>
          <p className="gh-description">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
            turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss deixa
            as pessoas mais interessantis.
          </p>
        </div>

        <GitChallengeCard className="mx-auto max-w-3xl p-8">
          <h3 className="mb-6 text-center text-2xl font-semibold text-github-fg-default">
            Pronto para Compartilhar Seu Conhecimento?
          </h3>
          <p className="mb-6 text-github-fg-muted">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
            turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss deixa
            as pessoas mais interessantis.
          </p>
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-github-fg-default"
              >
                Seu Melhor E-mail para Contato
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onEmailChange}
                placeholder="seu.email@exemplo.com"
                required
                className="w-full rounded-md border border-github-border-default bg-github-canvas-inset px-4 py-2 text-github-fg-default focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <Send className="mr-2 h-5 w-5" />
              Quero Participar como Autor Convidado
            </button>
          </form>
        </GitChallengeCard>
      </div>
    </section>
  </div>
);

export default GuestAuthor;
