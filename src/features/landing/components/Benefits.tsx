import React from 'react';
import { Clock, Zap, BookOpen, RefreshCw, GitBranch } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Por que Usar o Nam vulputate dapibus?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Nam vulputate dapibus gente finis você a Diuretics paradis num copo o Git e GitHub Leite de capivaris, leite de mula manquis sem cabeça.
          com controle de versão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-600 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white shadow-lg rounded-lg p-6 transform -rotate-3 transition-transform hover:rotate-0">
                <div className="flex items-center mb-4">
                  <GitBranch className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Explorador de Comandos Git</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Sua referência organizada e pesquisável para todos os comandos Git.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-2">50+ Leite de capivaris</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">4 leite de mula manquis sem cabeça</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Interativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">tirei o pau no gatis, per gatis num morreus</h3>
                <p className="mt-2 text-gray-600">
                Sapien in monti palavris qui num significa nadis i pareci latim. 
                Viva Forevis aptent taciti sociosqu ad litora torquent..
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Quem num gosta di mé, boa gentis num é.</h3>
                <p className="mt-2 text-gray-600">
                Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Copo furadis é disculpa de bebadis</h3>
                <p className="mt-2 text-gray-600">
                arcu quam euismod magna. Manduma pindureta quium dia nois paga. 
                Quem manda na minha terra sou euzis! Paisis, filhis, espiritis santis
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Si num tem leite então bota uma pinga aí cumpadi!</h3>
                <p className="mt-2 text-gray-600">
                Eu nunca mais boto a boca num copo de cachaça, 
                agora eu só uso canudis! Interagi no mé, 
                cursus quis, vehicula ac nisi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 