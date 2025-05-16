import React from 'react';
import {
  Users,
  BookOpen,
  Code,
  GitBranch,
  GitCommit,
  Terminal,
  Heart,
  Folders,
  Target,
  Zap,
} from 'lucide-react';

const EbookContent = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative flex h-[600px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
            alt="Capa do E-book Git & GitHub"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            E-book Exclusivo
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Git & GitHub: Do Iniciante ao Profissional Avançado
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Um guia completo para dominar Git e GitHub, impulsionar sua carreira e se destacar no
            mercado de tecnologia.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">300+</div>
              <div className="text-sm opacity-80">Páginas de Conteúdo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">Exercícios Práticos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Alunos Satisfeitos</div>
            </div>
          </div>
          <button className="mt-12 rounded-full bg-white px-8 py-4 font-bold text-blue-900 transition-colors hover:bg-blue-50">
            Garantir Minha Cópia por R$ 97,00
          </button>
        </div>
      </section>

      {/* Project Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              Projetos Práticos
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Desenvolva Projetos Reais e Relevantes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aprenda na prática construindo projetos do mundo real que irão te preparar para os
              desafios do mercado de trabalho.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project Card 1 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="flex h-48 items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600">
                <Folders className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Portfólio de Desenvolvedor Web
                </h3>
                <p className="mb-4 text-gray-600">
                  Crie seu portfólio profissional usando Git para versionamento e GitHub Pages para
                  hospedagem gratuita.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    HTML
                  </span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    CSS
                  </span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    JavaScript
                  </span>
                  <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Git
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="flex h-48 items-center justify-center bg-gradient-to-r from-purple-500 to-purple-600">
                <Target className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Gerenciador de Tarefas Colaborativo
                </h3>
                <p className="mb-4 text-gray-600">
                  Desenvolva um gerenciador de tarefas completo, utilizando branches e pull requests
                  para colaboração.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    React
                  </span>
                  <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    Node.js
                  </span>
                  <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    MongoDB
                  </span>
                  <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    Git Flow
                  </span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="flex h-48 items-center justify-center bg-gradient-to-r from-green-500 to-green-600">
                <Zap className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  API RESTful para E-commerce
                </h3>
                <p className="mb-4 text-gray-600">
                  Construa uma API robusta com versionamento semântico (SemVer) e integração
                  contínua (CI/CD).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Express
                  </span>
                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    PostgreSQL
                  </span>
                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Docker
                  </span>
                  <span className="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-600">
              Cada projeto inclui código-fonte completo, documentação detalhada e desafios extras
              para aprofundamento.
            </p>
            <button className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-700">
              Ver Todos os Projetos Incluídos
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              Conteúdo do E-book
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              O Que Você Vai Aprender Detalhadamente
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Fundamentos Sólidos de Git</h3>
              <p className="text-gray-600">
                Domine os conceitos essenciais de versionamento, controle de código e os principais
                comandos.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <GitCommit className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Fluxos de Trabalho Profissionais
              </h3>
              <p className="text-gray-600">
                Aprenda Git Flow, estratégias de branching eficazes e como colaborar em equipe.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Terminal className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Comandos Avançados e GitHub</h3>
              <p className="text-gray-600">
                Explore recursos avançados do Git e domine a plataforma GitHub para colaboração e
                hospedagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-800">
              Estrutura dos Capítulos
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Navegue pelo Conteúdo do E-book
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Capítulo 1: Introdução ao Controle de Versão e Git
              </h3>
              <p className="text-gray-600">
                O que é controle de versão, história do Git, instalação e configuração inicial do
                ambiente de desenvolvimento.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Capítulo 2: Comandos Fundamentais do Git
              </h3>
              <p className="text-gray-600">
                `git init`, `add`, `commit`, `status`, `log` – os pilares para o seu dia a dia com
                Git.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Capítulo 3: Ramificações (Branches) e Mesclagem (Merging)
              </h3>
              <p className="text-gray-600">
                Trabalhando com branches, estratégias de merge (fast-forward, three-way) e como
                resolver conflitos.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Capítulo 4: GitHub – Colaboração e Hospedagem
              </h3>
              <p className="text-gray-600">
                Repositórios remotos, `push`, `pull`, `fetch`, `forks`, `pull requests`, `code
                review` e boas práticas de colaboração em equipe.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Capítulo 5: Tópicos Avançados em Git
              </h3>
              <p className="text-gray-600">
                `rebase` (interativo), `cherry-pick`, `bisect`, `stash`, `tags`, `reflog` e outras
                ferramentas para otimizar seu fluxo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800">
              Bônus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Material Complementar</h2>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-blue-100 p-3">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Templates Prontos</h3>
                  <p className="mt-2 text-gray-600">
                    Arquivos .gitignore, README e workflows otimizados para diferentes tipos de
                    projetos
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-purple-100 p-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Mentorias em Grupo</h3>
                  <p className="mt-2 text-gray-600">
                    Sessões quinzenais para tirar dúvidas e networking com outros desenvolvedores
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Projetos Práticos</h3>
                  <p className="mt-2 text-gray-600">
                    5 projetos completos para aplicar seus conhecimentos e enriquecer seu portfólio
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-6">
              <div className="flex items-start">
                <div className="rounded-full bg-red-100 p-3">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Suporte Vitalício</h3>
                  <p className="mt-2 text-gray-600">
                    Acesso a todas as atualizações futuras do ebook e material complementar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">Comece Sua Jornada Git Hoje</h2>
            <p className="mb-8 text-xl text-white/80">
              Aprenda Git e GitHub de forma prática e efetiva
            </p>
            <button className="rounded-full bg-white px-8 py-4 font-bold text-blue-600 transition-colors hover:bg-blue-50">
              Garantir Minha Cópia por R$ 97,00
            </button>
            <p className="mt-4 text-sm text-white/60">7 dias de garantia incondicional</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EbookContent;
