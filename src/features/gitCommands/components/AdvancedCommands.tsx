import React, { useState } from 'react';
import { Terminal, GitBranch, GitMerge, File, Github, Linkedin, Globe } from 'lucide-react';
import { gitCommandsData } from '../../../features/game/data/commandsData';
import MermaidDiagram from '../../../components/common/MermaidDiagram';
import PracticeChallengeSection from './practiceChallenge/PracticeChallengeSection';

// Define a type for our author objects for better type safety
interface AuthorProfileData {
  src: string;
  alt: string;
  miniBio?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
  dialogue?: Array<{ type: 'text' | 'image'; content?: string; src?: string; alt?: string }>;
}

// Author data for the intro section
const advancedCommandsIntroAuthors: AuthorProfileData[] = [
  {
    src: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "André Souza - Eng. de Software Sênior",
    miniBio: "André foca em construir software robusto e escalável, utilizando Git diariamente para colaboração e manutenção de código limpo.",
    socialLinks: { github: "#", linkedin: "#" },
    dialogue: [
      { type: 'text', content: "Os comandos avançados de Git podem ser intimidadores, mas são extremamente poderosos para situações complexas." },
      { type: 'text', content: "Rebase, cherry-pick e reflog são ferramentas que todo desenvolvedor sênior deve dominar para resolver crises no código." },
      { type: 'text', content: "Quando você entende o modelo de objetos interno do Git, consegue fazer 'mágica' com esses comandos avançados." },
    ],
  },
  {
    src: "https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Mariana Lima - Educadora Tech",
    miniBio: "Mariana é apaixonada por criar conteúdo educacional acessível que capacita estudantes a terem sucesso na indústria de tecnologia.",
    socialLinks: { website: "#" },
    dialogue: [
      { type: 'text', content: "Comandos avançados são como superpoderes do Git. Use-os com cuidado, mas não tenha medo de experimentar!" },
      { type: 'text', content: "Mesmo em projetos pessoais, praticar comandos avançados te prepara para resolução de problemas em projetos profissionais." },
    ],
  },
  {
    src: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Ricardo Alves - Especialista DevOps",
    miniBio: "Ricardo vive e respira automação e infraestrutura como código, onde Git desempenha um papel central.",
    socialLinks: { github: "#" },
    dialogue: [
      { type: 'text', content: "Em ambientes DevOps, comandos avançados de Git são usados diariamente para automatizar fluxos de trabalho e manter a integridade dos pipelines." },
      { type: 'text', content: "Saber como 'consertar o histórico' com rebase interativo ou como recuperar commits perdidos com reflog pode salvar seu projeto em momentos críticos." },
    ],
  },
  {
    src: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?w=128&h=128&fit=crop&auto=compress,format",
    alt: "Tatiana Barros - Autora do Projeto",
    miniBio: "Tatiana é a idealizadora do GitSheet, apaixonada por simplificar o aprendizado de Git e GitHub para todos.",
    socialLinks: { github: "https://github.com/example", linkedin: "https://linkedin.com/in/example", website: "#" },
    dialogue: [
      { type: 'text', content: "Não tenha medo dos comandos avançados! Estão aqui para ajudar quando você mais precisar deles." },
      { type: 'text', content: "É como ter um kit de ferramentas especializadas - você não usa todo dia, mas quando precisa, fica feliz por conhecê-las." },
    ],
  },
];

const AdvancedCommands: React.FC = () => {
  // Obter apenas os comandos avançados do gitCommandsData
  const advancedCommands = gitCommandsData.find(category => category.title === "Comandos Avançados")?.commands || [];
  
  const [selectedAuthor, setSelectedAuthor] = useState<AuthorProfileData | null>(
    advancedCommandsIntroAuthors.find(author => author.alt.includes("André Souza")) || advancedCommandsIntroAuthors[0] || null
  );
  const [currentDialogStep, setCurrentDialogStep] = useState(0);

  const handleAuthorSelect = (author: AuthorProfileData) => {
    setSelectedAuthor(author);
    setCurrentDialogStep(0);
  };

  const handleNextStep = () => {
    if (selectedAuthor && selectedAuthor.dialogue && currentDialogStep < selectedAuthor.dialogue.length - 1) {
      setCurrentDialogStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentDialogStep > 0) {
      setCurrentDialogStep(prev => prev - 1);
    }
  };
  
  return (
    <div className="space-y-24">
      {/* Seção Introdutória */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?w=1920&auto=compress,format"
            alt="Banner ilustrativo para a seção de comandos avançados do Git"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-900/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Git Avançado
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Comandos Avançados do Git
          </h1>
          <p className="mt-6 text-xl text-white/80">
            Domine técnicas avançadas de Git para resolução de problemas complexos e maior eficiência em projetos
          </p>
        </div>
      </section>

      {/* Seção de Descrição */}
      <section className="pt-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-github-fg-default">Domine os Recursos Avançados do Git</h2>
            <p className="mt-4 text-lg text-gray-700">
              Os comandos avançados do Git permitem gerenciar situações complexas e fornecem ferramentas poderosas para 
              casos específicos. Estas operações avançadas são especialmente úteis para resolver conflitos difíceis, 
              ajustar o histórico de um projeto e resolver problemas em repositórios. Dominar estes comandos fará 
              de você um especialista em Git, capaz de resolver quase qualquer situação no controle de versão.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Comandos */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-github-fg-default">Comandos Avançados do Git</h2>
            <p className="mt-2 text-lg text-gray-600">Domine ferramentas poderosas para situações complexas e emergências</p>
          </div>
          
          <div className="space-y-6">
            <div className="gh-card">
              <div className="gh-card-header">
                <Terminal className="h-5 w-5 text-github-fg-default mr-2" />
                <span className="text-sm font-medium">Comandos Avançados do Git</span>
              </div>
              <div className="gh-card-body space-y-6">
                {advancedCommands.map((command, index) => {
                  // Gerar um ID único para cada diagrama
                  const diagramId = `advanced-command-${index}-${command.name.replace(/[\s[\]]/g, '-')}`;
                  
                  return (
                    <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Coluna do comando */}
                        <div className="flex items-start space-x-4 md:w-1/3">
                          <GitBranch className="h-5 w-5 text-github-fg-default mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-github-fg-default">{command.name}</h3>
                            <p className="text-sm text-github-fg-muted">{command.description}</p>
                            <div className="mt-2">
                              <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
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
      </section>

      {/* Wrapper for Author Profiles and Dialogue Box with custom spacing */}
      <div>
        {/* Author Profiles Section - Clickable */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-github-fg-default">Conheça Nossos Especialistas</h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Nossa equipe dedicada a fornecer o melhor conteúdo sobre Git e GitHub para sua jornada. Clique em um perfil para interagir!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 max-w-5xl mx-auto">
              {advancedCommandsIntroAuthors.map(author => {
                const [name, role] = author.alt.split(' - ');
                const isSelected = selectedAuthor?.src === author.src;

                return (
                  <button 
                    type="button"
                    key={author.src} 
                    className={`flex flex-col items-center text-center p-2 rounded-lg transition-all duration-200 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSelected ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'hover:scale-105'}`}
                    onClick={() => handleAuthorSelect(author)}
                  >
                    <img 
                      src={author.src} 
                      alt={name}
                      className="w-24 h-24 rounded-full object-cover mb-2 shadow-lg"
                      loading="lazy" 
                    />
                    <h3 className="text-base font-semibold text-gray-800 mb-1">{name}</h3>
                    <p className="text-xs text-gray-600">{role}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        {selectedAuthor && selectedAuthor.dialogue && selectedAuthor.dialogue.length > 0 && (
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white" id="challenges-section">
            <div className="container mx-auto px-4">
              {/* Title for the Challenges Section */}
              <div className="text-center mb-1">
                <h2 className="text-3xl font-bold text-white">Desafios Interativos</h2>
                <p className="mt-2 text-lg text-blue-300">Interaja com nossos especialistas e teste seus conhecimentos!</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-3 items-stretch">
                {/* Left Column: Author Profile Details */}
                <div className="lg:w-1/4 w-full bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col items-center justify-center text-center sticky top-24">
                  <img 
                    src={selectedAuthor.src} 
                    alt={selectedAuthor.alt.split(' - ')[0]} 
                    className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-blue-400 shadow-md"
                  />
                  <h3 className="text-lg font-bold text-white mb-0.5">{selectedAuthor.alt.split(' - ')[0]}</h3>
                  <p className="text-sm text-blue-300 mb-1">{selectedAuthor.alt.split(' - ')[1]}</p>
                  <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                    {selectedAuthor.miniBio || "Mini biografia não disponível."}
                  </p>
                  <div className="flex space-x-3 mb-2">
                    {selectedAuthor.socialLinks?.github && (
                      <a href={selectedAuthor.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.linkedin && (
                      <a href={selectedAuthor.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {selectedAuthor.socialLinks?.website && (
                      <a href={selectedAuthor.socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-400 hover:text-blue-400 transition-colors">
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Dialogue Area */}
                <div className="lg:w-3/4 w-full bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col justify-between">
                  <div className="dialogue-content mb-2">
                    {selectedAuthor.dialogue[currentDialogStep].type === 'text' && (
                      <p className="text-sm md:text-base leading-relaxed text-gray-200">
                        {selectedAuthor.dialogue[currentDialogStep].content}
                      </p>
                    )}
                    {/* Placeholder for other dialogue types like images if needed */}
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-700 pt-1">
                    <button 
                      onClick={handlePrevStep} 
                      disabled={currentDialogStep === 0}
                      className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      Voltar
                    </button>
                    <span className="text-xs text-gray-400">
                      Passo {currentDialogStep + 1} de {selectedAuthor.dialogue.length}
                    </span>
                    <button 
                      onClick={handleNextStep} 
                      disabled={currentDialogStep === selectedAuthor.dialogue.length - 1}
                      className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800"
                    >
                      Prosseguir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Game Section: Prática do Desafio */}
        <PracticeChallengeSection />
      </div>
    </div>
  );
};

export default AdvancedCommands; 