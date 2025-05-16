import React from 'react';
import { Clock, Zap, BookOpen, RefreshCw, GitBranch } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="benefits">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Por que Usar o Nam vulputate dapibus?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nam vulputate dapibus gente finis você a Diuretics paradis num copo o Git e GitHub Leite
            de capivaris, leite de mula manquis sem cabeça. com controle de versão.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rotate-3 transform rounded-lg bg-blue-600"></div>
              <div className="relative -rotate-3 transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:rotate-0">
                <div className="mb-4 flex items-center">
                  <GitBranch className="mr-2 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Explorador de Comandos Git
                  </h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Sua referência organizada e pesquisável para todos os comandos Git.
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-2 rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      50+ Leite de capivaris
                    </span>
                    <span className="mr-2 rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      4 leite de mula manquis sem cabeça
                    </span>
                    <span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                      Interativo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="rounded-full bg-blue-100 p-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  tirei o pau no gatis, per gatis num morreus
                </h3>
                <p className="mt-2 text-gray-600">
                  Sapien in monti palavris qui num significa nadis i pareci latim. Viva Forevis
                  aptent taciti sociosqu ad litora torquent..
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="rounded-full bg-blue-100 p-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Quem num gosta di mé, boa gentis num é.
                </h3>
                <p className="mt-2 text-gray-600">
                  Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um
                  alcoolatra anonimis.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="rounded-full bg-blue-100 p-3">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Copo furadis é disculpa de bebadis
                </h3>
                <p className="mt-2 text-gray-600">
                  arcu quam euismod magna. Manduma pindureta quium dia nois paga. Quem manda na
                  minha terra sou euzis! Paisis, filhis, espiritis santis
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="rounded-full bg-blue-100 p-3">
                  <RefreshCw className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Si num tem leite então bota uma pinga aí cumpadi!
                </h3>
                <p className="mt-2 text-gray-600">
                  Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Interagi
                  no mé, cursus quis, vehicula ac nisi
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
