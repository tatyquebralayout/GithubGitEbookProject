import React, { useState, useEffect, useRef, FormEvent } from 'react';

export interface TerminalHistoryItem {
  id: number;
  command: string;
  output: string;
  pathAtCommand: string[]; // Continua como array para o histórico
}

// Remove Commit interface - it will be passed via props or defined in a shared types file later
// interface Commit {
//   id: string;
//   message: string;
//   author: string;
//   date: string;
// }

interface InteractiveTerminalProps {
  onProcessCommand: (command: string) => string;
  currentPathString: string; // Para o prompt atual
  currentPathForHistory: string[]; // Para salvar no histórico
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onProcessCommand,
  currentPathString, // Nova prop para o prompt
  currentPathForHistory, // Nova prop para o histórico
}) => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      id: Date.now() - 1000,
      command: '',
      output:
        'Bem-vindo ao Simulador de Terminal Git!\n\nVocê ainda não tem nenhum projeto iniciado. Para começar, você pode:\n- Criar um diretório com: mkdir meu-projeto\n- Navegar até ele com: cd meu-projeto\n- Inicializar um repositório Git com: git init\n\nDigite um comando para começar:',
      pathAtCommand: currentPathForHistory,
    },
  ]);
  const historyContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToBottom = () => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  };

  useEffect(scrollToBottom, [history]);

  useEffect(() => {
    // Focus input on initial load and when terminal becomes visible/interactive
    // This might need adjustment depending on how the component is mounted/displayed
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const commandToProcess = inputValue.trim();
    let output = '';

    if (commandToProcess.toLowerCase() === 'clear') {
      // 'clear' is handled specially by parent to reset git states
      // but terminal history clear is local
      onProcessCommand(commandToProcess); // Notify parent to reset its state
      setHistory([
        {
          id: Date.now(),
          command: '',
          output:
            'Bem-vindo ao Simulador de Terminal Git!\n\nVocê ainda não tem nenhum projeto iniciado. Para começar, você pode:\n- Criar um diretório com: mkdir meu-projeto\n- Navegar até ele com: cd meu-projeto\n- Inicializar um repositório Git com: git init\n\nDigite um comando para começar:',
          pathAtCommand: currentPathForHistory,
        },
      ]);
      setInputValue('');
      // Focus after a very short delay to ensure DOM is updated and form is visible
      requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }

    output = onProcessCommand(commandToProcess);

    setHistory((prevHistory) => [
      ...prevHistory,
      // Usar currentPathForHistory ao criar o item de histórico
      { id: Date.now(), command: inputValue, output, pathAtCommand: [...currentPathForHistory] },
    ]);
    setInputValue('');

    // Re-focus the input after command submission using a microtask
    // and preventScroll to avoid page jump if possible
    Promise.resolve().then(() => {
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  const getPathString = (pathArray: string[]): string => {
    if (!pathArray || pathArray.length === 0) return '~'; // Guarda contra pathAtCommand indefinido/vazio
    if (pathArray.length === 1 && pathArray[0] === '~') return '~';
    // Assegura que se começar com '~', mantenha, senão não adicione duplicado.
    // E remove qualquer '~' que não seja o primeiro elemento.
    const processedPath = pathArray.filter((part, index) => part !== '~' || index === 0);
    if (processedPath.length === 1 && processedPath[0] === '~') return '~';
    if (processedPath[0] === '~') return '~' + processedPath.slice(1).join('/');
    return processedPath.join('/') || '/'; // Para o caso de um path vazio após o filtro, default para root
  };

  return (
    <div className="bg-github-code-bg flex h-full flex-col rounded-lg font-mono text-sm text-gray-300">
      <div ref={historyContainerRef} className="flex-grow space-y-1 overflow-y-auto p-2">
        {history.map((item) => (
          <div key={item.id}>
            {item.command ? (
              <div className="flex">
                <span className="text-green-400">user@gitsheet:</span>
                {/* Usa getPathString para o histórico */}
                <span className="text-blue-400">{getPathString(item.pathAtCommand)}</span>
                <span className="text-gray-300">$</span>
                <span className="pl-2">{item.command}</span>
              </div>
            ) : null}
            {item.output && <div className="whitespace-pre-wrap text-gray-300">{item.output}</div>}
          </div>
        ))}
        {/* Anchor for scrolling to bottom, if needed, though direct scrollTop manipulation is used */}
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex-shrink-0 border-t border-slate-700 p-2"
      >
        <div className="flex flex-wrap items-center gap-x-2">
          <label htmlFor="commandInput" className="flex-shrink-0">
            <span className="text-green-400">user@gitsheet:</span>
            {/* Usa currentPathString diretamente para o prompt */}
            <span className="text-blue-400">{currentPathString}</span>
            <span className="text-gray-300">$</span>
          </label>
          <input
            id="commandInput"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="min-w-[100px] flex-grow bg-transparent text-gray-300 outline-none"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="flex-shrink-0 rounded bg-slate-600 px-3 py-1 text-xs text-white hover:bg-slate-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default InteractiveTerminal;
