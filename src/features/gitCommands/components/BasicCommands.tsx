import React from 'react';
import { Terminal, GitCommit, GitMerge, File } from 'lucide-react';
import { gitCommandsData } from '../../../features/game/data/commandsData';
import MermaidDiagram from '../../../components/common/MermaidDiagram';

const BasicCommands: React.FC = () => {
  // Obter apenas os comandos básicos do gitCommandsData
  const basicCommands = gitCommandsData.find(category => category.title === "Comandos Básicos")?.commands || [];
  
  return (
    <div className="space-y-12">
      {/* Seção Introdutória */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos básicos do Git"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Git Básico
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Comandos Básicos do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Comece sua jornada com Git dominando os comandos essenciais
          </p>
        </div>
      </section>

      {/* Seção de Descrição */}
      <section className="pt-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Fundamentos do Git</h2>
            <p className="mt-4 text-lg text-gray-700">
              Os comandos básicos do Git são o ponto de partida para qualquer desenvolvedor iniciar no controle de versão.
              Com esses comandos, você será capaz de inicializar repositórios, salvar suas alterações e visualizar o histórico
              do seu trabalho. Estes são os blocos fundamentais que você utilizará diariamente em seus projetos, formando
              a base para o desenvolvimento das demais habilidades com Git.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Comandos */}
      <div className="space-y-6">
        <div className="gh-card">
          <div className="gh-card-header">
            <Terminal className="h-5 w-5 text-github-fg-default mr-2" />
            <span className="text-sm font-medium">Comandos Básicos do Git</span>
          </div>
          <div className="gh-card-body space-y-6">
            {basicCommands.map((command, index) => {
              // Gerar um ID único para cada diagrama
              const diagramId = `basic-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;
              
              return (
                <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Coluna do comando */}
                    <div className="flex items-start space-x-4 md:w-1/3">
                      <GitCommit className="h-5 w-5 text-github-fg-default mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                        <p className="text-sm text-github-fg-muted">{command.description}</p>
                        <div className="mt-2">
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                            {command.difficultyText}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coluna do diagrama */}
                    <div className="md:w-2/3 bg-gray-50 p-2 rounded-lg">
                      {command.mermaidChart ? (
                        <MermaidDiagram chart={command.mermaidChart} diagramId={diagramId} />
                      ) : (
                        <div className="flex justify-center items-center h-24 text-gray-400">
                          <File className="mr-2" /> Visualização não disponível
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Link para detalhes */}
                  <div className="mt-3 text-right">
                    <a 
                      href={command.chapterLink} 
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                    >
                      <GitMerge className="h-3 w-3 mr-1" />
                      {command.chapterText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicCommands; 