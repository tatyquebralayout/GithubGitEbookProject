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
    { id: 1, description: 'Inicialize o repositório', status: 'completed' },
    { id: 2, description: 'Adicione arquivos ao stage', status: 'current' },
    { id: 3, description: 'Faça seu primeiro commit', status: 'pending' },
    { id: 4, description: 'Crie uma nova branch', status: 'pending' },
    { id: 5, description: 'Faça merge da branch', status: 'pending' },
  ];

  // Exemplo de estado de conclusão do desafio
  const isChallengeCompleted = false; // Isso virá da lógica do jogo

  return (
    <>
      <h3 className="mb-3 text-xl font-semibold text-github-fg-default">Progresso do Desafio</h3>
      <div className="mb-4 flex-grow space-y-1 overflow-y-auto pr-2">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`rounded-md p-2 text-sm ${step.status === 'completed' ? 'bg-green-100 text-green-700' : step.status === 'current' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
          >
            <span className={`font-semibold ${step.status === 'completed' ? 'line-through' : ''}`}>
              {step.description}
            </span>
            {step.status === 'completed' && <span className="ml-2">✅</span>}
            {step.status === 'current' && <span className="ml-2">➡️</span>}
          </div>
        ))}
      </div>

      {isChallengeCompleted && (
        <div className="my-3 rounded-lg bg-green-100 p-3 text-center text-green-700">
          <p className="text-base font-bold">Parabéns, você concluiu o desafio!</p>
          {/* <button className="mt-1 text-sm text-green-600 hover:underline focus:outline-none">Ver recompensa!</button> */}
        </div>
      )}

      <div className="mt-auto space-y-2.5 border-t border-gray-200 pt-2">
        <button className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
          Recomeçar Desafio
        </button>
        <button
          className="w-full rounded-lg bg-green-600 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          disabled={!isChallengeCompleted} // Habilitar apenas se o desafio estiver completo
        >
          Concluir Missão
        </button>
      </div>
    </>
  );
};

export default ChallengeProgress;
