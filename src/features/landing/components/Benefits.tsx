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
            Por que Usar o GitSheet?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nossa planilha interativa ajuda você a dominar o Git mais rapidamente e se tornar 
            mais produtivo com controle de versão.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Coluna Esquerda - Imagem */}
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
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mr-2">50+ Comandos</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">4 Categorias</span>
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Interativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna Direita - Benefícios */}
          <div className="space-y-8">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 rounded-full p-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Economize Tempo</h3>
                <p className="mt-2 text-gray-600">
                  Pare de procurar comandos Git na internet. Tenha tudo organizado 
                  em um só lugar com exemplos e explicações.
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
                <h3 className="text-xl font-semibold text-gray-900">Aumente a Produtividade</h3>
                <p className="mt-2 text-gray-600">
                  A função de busca e organização por categorias ajuda você a encontrar 
                  exatamente o que precisa, tornando seu fluxo de trabalho mais eficiente.
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
                <h3 className="text-xl font-semibold text-gray-900">Aprenda Progressivamente</h3>
                <p className="mt-2 text-gray-600">
                  Comece com comandos básicos e progrida para os avançados no seu próprio ritmo. 
                  A abordagem estruturada torna o aprendizado do Git intuitivo.
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
                <h3 className="text-xl font-semibold text-gray-900">Sempre Atualizado</h3>
                <p className="mt-2 text-gray-600">
                  A planilha é mantida e atualizada com os comandos Git mais recentes 
                  e melhores práticas conforme eles evoluem.
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