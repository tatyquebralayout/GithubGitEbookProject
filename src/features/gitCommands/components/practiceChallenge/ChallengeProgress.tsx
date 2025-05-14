import React from 'react';

// Exemplo de tipo para os passos do desafio
interface ChallengeStep {
  id: number;
  description: string;
  status: 'completed' | 'pending' | 'current';
}

const ChallengeProgress: React.FC = () => {
  // Exemplo de dados de progresso - isso virá da lógica do jogo
  const steps: ChallengeStep[] = [
    { id: 1, description: "Inicialize o repositório", status: 'completed' },
    { id: 2, description: "Adicione arquivos ao stage", status: 'current' },
    { id: 3, description: "Faça seu primeiro commit", status: 'pending' },
    { id: 4, description: "Crie uma nova branch", status: 'pending' },
    { id: 5, description: "Faça merge da branch", status: 'pending' },
  ];

  // Exemplo de estado de conclusão do desafio
  const isChallengeCompleted = false; // Isso virá da lógica do jogo

  return (
    <>
      <h3 className="text-xl font-semibold mb-3 text-github-fg-default">Progresso do Desafio</h3>
      <div className="space-y-1 mb-4 flex-grow overflow-y-auto pr-2">
        {steps.map(step => (
          <div key={step.id} className={`p-2 rounded-md text-sm ${step.status === 'completed' ? 'bg-green-100 text-green-700' : step.status === 'current' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
            <span className={`font-semibold ${step.status === 'completed' ? 'line-through' : ''}`}>{step.description}</span>
            {step.status === 'completed' && <span className="ml-2">✅</span>}
            {step.status === 'current' && <span className="ml-2">➡️</span>}
          </div>
        ))}
      </div>

      {isChallengeCompleted && (
        <div className="my-3 p-3 bg-green-100 text-green-700 rounded-lg text-center">
          <p className="font-bold text-base">Parabéns, você concluiu o desafio!</p>
          {/* <button className="mt-1 text-sm text-green-600 hover:underline focus:outline-none">Ver recompensa!</button> */}
        </div>
      )}
      
      <div className="mt-auto space-y-2.5 pt-2 border-t border-gray-200">
        <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-sm">
          Recomeçar Desafio
        </button>
        <button 
          className="w-full px-3 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-sm"
          disabled={!isChallengeCompleted} // Habilitar apenas se o desafio estiver completo
        >
          Concluir Missão
        </button>
      </div>
    </>
  );
};

export default ChallengeProgress; 