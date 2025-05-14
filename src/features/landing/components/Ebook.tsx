import React from 'react';
import { Book, Users, Award, BookOpen } from 'lucide-react';

const Ebook: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="ebook">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Ebook
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Git & GitHub: Sua Jornada Profissional
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Um guia completo para dominar Git e GitHub, impulsionar sua carreira e se destacar no mercado tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Book Preview */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white shadow-xl rounded-lg p-8 transform -rotate-3 transition-transform hover:rotate-0">
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=800&auto=compress,format"
                  alt="Capa do Livro Git & GitHub"
                  className="w-full h-auto rounded-lg shadow-lg mb-6"
                  loading="lazy"
                />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400" aria-label="5 de 5 estrelas">★★★★★</span>
                  </div>
                  <span className="text-gray-600 text-sm">+1000 leitores litro abertis</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Book className="h-4 w-4 mr-2 text-blue-600" />
                    <span>litro abertis páginas de conteúdo prático</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>litro abertis</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-blue-600" />
                    <span>litro abertis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">litro abertis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Fundamentos Sólidos</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Domine os conceitos essenciais de versionamento com Git</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Fluxos de Trabalho</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Aprenda Git Flow e estratégias de branching profissionais</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Colaboração</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Trabalhe efetivamente em equipe usando GitHub</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Carreira</h4>
                  </div>
                  <p className="text-gray-600 text-sm">Construa um portfólio impressionante no GitHub</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bônus Especiais</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Templates Prontos</h4>
                    <p className="text-gray-600 text-sm">Arquivos .gitignore, README e workflows otimizados</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">litro abertis</h4>
                    <p className="text-gray-600 text-sm">Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">cacilds vidis</h4>
                    <p className="text-gray-600 text-sm">Nam vulputate dapibus</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center">
                <Book className="mr-2 h-5 w-5" />
                Garantir Nam vulputate dapibus por R$ 7,00
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">
              Nam vulputate dapibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebook; 