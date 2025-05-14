import React from 'react';
import { Users, BookOpen, Code, GitBranch, GitCommit, Terminal, Heart, Folders, Target, Zap } from 'lucide-react';

const EbookContent: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
            alt="Git & GitHub Book Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Ebook Exclusivo
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Git & GitHub: Sua Jornada Profissional
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Um guia completo para dominar Git e GitHub, impulsionar sua carreira e se destacar no mercado tech
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">300+</div>
              <div className="text-sm opacity-80">Páginas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-80">Exercícios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Alunos</div>
            </div>
          </div>
          <button className="mt-12 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
            Garantir Minha Cópia por R$ 97,00
          </button>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              O Projeto
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Desenvolva Projetos Reais
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Aprenda na prática construindo projetos do mundo real que irão te preparar para desafios profissionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <Folders className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Portfolio Dev
                </h3>
                <p className="text-gray-600 mb-4">
                  Crie seu portfólio profissional usando Git para versionamento e GitHub Pages para hospedagem
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">HTML</span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">CSS</span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">Git</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <Target className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Task Manager
                </h3>
                <p className="text-gray-600 mb-4">
                  Desenvolva um gerenciador de tarefas colaborativo usando branches e pull requests
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">React</span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">Git Flow</span>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <Zap className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  E-commerce API
                </h3>
                <p className="text-gray-600 mb-4">
                  Construa uma API RESTful com versionamento semântico e integração contínua
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">Express</span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">Docker</span>
                  <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded">CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Cada projeto inclui código fonte completo, documentação detalhada e desafios extras
            </p>
            <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors">
              Ver Todos os Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Conteúdo
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              O Que Você Vai Aprender
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fundamentos Git</h3>
              <p className="text-gray-600">
                Domine os conceitos essenciais de versionamento e controle de código
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GitCommit className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fluxos de Trabalho</h3>
              <p className="text-gray-600">
                Aprenda Git Flow e estratégias profissionais de branching
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Terminal className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comandos Avançados</h3>
              <p className="text-gray-600">
                Explore recursos avançados para resolver problemas complexos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Capítulos
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Conteúdo do Ebook
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Introdução ao Git</h3>
              <p className="text-gray-600">
                História, instalação e configuração inicial do ambiente
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Comandos Básicos</h3>
              <p className="text-gray-600">
                Init, add, commit, status e log - os fundamentos do Git
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Branches e Merging</h3>
              <p className="text-gray-600">
                Trabalho com branches, merge strategies e resolução de conflitos
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. GitHub e Colaboração</h3>
              <p className="text-gray-600">
                Pull requests, code review e boas práticas de colaboração
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">5. Git Avançado</h3>
              <p className="text-gray-600">
                Rebase, cherry-pick, bisect e outras ferramentas avançadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Bônus
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Material Complementar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Templates Prontos</h3>
                  <p className="mt-2 text-gray-600">
                    Arquivos .gitignore, README e workflows otimizados para diferentes tipos de projetos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-purple-100 rounded-full p-3">
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

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3">
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

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-3">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Comece Sua Jornada Git Hoje
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Aprenda Git e GitHub de forma prática e efetiva
            </p>
            <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors">
              Garantir Minha Cópia por R$ 97,00
            </button>
            <p className="mt-4 text-sm text-white/60">
              7 dias de garantia incondicional
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EbookContent; 