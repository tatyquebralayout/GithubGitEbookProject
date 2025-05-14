import React, { useState, useEffect, useRef } from 'react';

interface TerminalHistoryItem {
  id: number;
  type: 'input' | 'output';
  content: string;
}

const InteractiveTerminal: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    { id: Date.now(), type: 'output', content: 'Bem-vindo ao Terminal Git Simulado! Digite um comando.' }
  ]);
  const historyContainerRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCommand = (command: string): string => {
    if (command.trim().toLowerCase() === 'clear') {
      setHistory([]);
      return ''; 
    }
    if (command.trim().toLowerCase() === 'git init') {
        return 'Initialized empty Git repository in ./.git/';
    }
    if (command.trim().toLowerCase() === 'git status') {
        return 'On branch main\nNo commits yet\nNothing to commit (create/copy files and use "git add" to track)';
    }
    return `Comando não reconhecido: ${command}`;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmitLogic = () => {
    const command = inputValue.trim();

    if (!command) {
      inputRef.current?.focus();
      return;
    }

    const newCommandId = Date.now();

    let tempHistory = [
      ...history,
      { id: newCommandId, type: 'input' as 'input' | 'output', content: command },
    ];
    const outputMessage = processCommand(command);
    if (outputMessage) {
      tempHistory.push({ id: newCommandId + 1, type: 'output', content: outputMessage });
    }
    setHistory(tempHistory);

    setInputValue('');

    // requestAnimationFrame(() => {
    //   inputRef.current?.focus({ preventScroll: true });
    // });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    handleSubmitLogic();
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      handleSubmitLogic();
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-white flex-shrink-0">Terminal Git Simulado</h3>
      <div 
        ref={historyContainerRef}
        className="bg-black text-sm text-green-400 font-mono p-3 rounded-md flex-grow overflow-y-auto h-full"
      >
        {history.map((item) => (
          <div key={item.id}>
            {item.type === 'input' && (
              <p><span className="text-blue-400">user@gitsheet</span>:<span className="text-purple-400">~</span>$ {item.content}</p>
            )}
            {item.type === 'output' && (
              <p className="whitespace-pre-wrap">{item.content}</p>
            )}
          </div>
        ))}
      </div>
      <form 
        onSubmit={handleFormSubmit}
        className="mt-2 flex flex-wrap items-center gap-x-1 sm:gap-x-2 flex-shrink-0"
      >
        <div className="flex-shrink-0 py-2">
          <span className="text-blue-400">user@gitsheet</span><span className="text-purple-400">:~$</span>
        </div>
        <div className="flex-grow flex min-w-[180px] sm:min-w-[250px]">
          <input 
            ref={inputRef}
            type="text" 
            value={inputValue} 
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            className="flex-grow bg-gray-800 text-green-400 p-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono text-sm"
            placeholder="Digite seu comando..."
            spellCheck="false"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 text-sm whitespace-nowrap"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default InteractiveTerminal; 