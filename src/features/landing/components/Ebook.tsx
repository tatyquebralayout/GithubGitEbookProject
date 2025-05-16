import React from 'react';
import { Book, Users, Award, BookOpen } from 'lucide-react';

const Ebook = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24" id="ebook">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Ebook
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Git & GitHub: Sua Jornada Profissional
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Um guia completo para dominar Git e GitHub, impulsionar sua carreira e se destacar no
            mercado tech.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Book Preview */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rotate-3 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="relative -rotate-3 transform rounded-lg bg-white p-8 shadow-xl transition-transform hover:rotate-0">
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=800&auto=compress,format"
                  alt="Capa do Livro Git & GitHub"
                  className="mb-6 h-auto w-full rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400" aria-label="5 de 5 estrelas">
                      ★★★★★
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">+1000 leitores litro abertis</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Book className="mr-2 h-4 w-4 text-blue-600" />
                    <span>litro abertis páginas de conteúdo prático</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="mr-2 h-4 w-4 text-blue-600" />
                    <span>litro abertis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="mr-2 h-4 w-4 text-blue-600" />
                    <span>litro abertis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">litro abertis</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Fundamentos Sólidos</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Domine os conceitos essenciais de versionamento com Git
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Fluxos de Trabalho</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Aprenda Git Flow e estratégias de branching profissionais
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Colaboração</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Trabalhe efetivamente em equipe usando GitHub
                  </p>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold">Carreira</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Construa um portfólio impressionante no GitHub
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Bônus Especiais</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Templates Prontos</h4>
                    <p className="text-sm text-gray-600">
                      Arquivos .gitignore, README e workflows otimizados
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">litro abertis</h4>
                    <p className="text-sm text-gray-600">
                      Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.{' '}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 rounded-full bg-blue-100 p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">cacilds vidis</h4>
                    <p className="text-sm text-gray-600">Nam vulputate dapibus</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button className="flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                <Book className="mr-2 h-5 w-5" />
                Garantir Nam vulputate dapibus por R$ 7,00
              </button>
              <p className="mt-3 text-center text-sm text-gray-500">Nam vulputate dapibus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook;
