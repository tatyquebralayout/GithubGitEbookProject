import React, { useState, useEffect, useRef, FormEvent } from 'react';

export interface TerminalHistoryItem {
  id: number;
  command: string;
  output: string;
  pathAtCommand: string[]; // Store path for historic prompts
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
  currentPath: string[]; // Current path from parent
}

const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onProcessCommand,  // Prop received from parent
  currentPath,       // Prop received from parent
}) => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState<TerminalHistoryItem[]>([]);
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
      setHistory([]);
      setInputValue('');
      // Focus after a very short delay to ensure DOM is updated and form is visible
      requestAnimationFrame(() => inputRef.current?.focus());
      return;
    }

    output = onProcessCommand(commandToProcess);

    setHistory(prevHistory => [
      ...prevHistory,
      { id: Date.now(), command: inputValue, output, pathAtCommand: [...currentPath] }, // Store currentPath with the command
    ]);
    setInputValue('');

    // Re-focus the input after command submission using a microtask
    // and preventScroll to avoid page jump if possible
    Promise.resolve().then(() => {
        inputRef.current?.focus({ preventScroll: true });
    });
  };

  const getPathString = (pathArray: string[]): string => {
    if (pathArray.length === 1 && pathArray[0] === '~') return '~';
    return pathArray.join('/').replace(/^~\//, '~/'); // Ensure ~/ is at the start if present
  };

  return (
    <div className="h-full flex flex-col bg-github-code-bg rounded-lg font-mono text-sm text-gray-300">
      <div ref={historyContainerRef} className="flex-grow overflow-y-auto p-2 space-y-1">
        {history.map(item => (
          <div key={item.id}>
            <div className="flex">
              <span className="text-green-400">user@gitsheet:</span>
              <span className="text-blue-400">{getPathString(item.pathAtCommand)}</span> 
              <span className="text-gray-300">$</span>
              <span className="pl-2">{item.command}</span>
            </div>
            {item.output && (
              <div className="whitespace-pre-wrap text-gray-300">{item.output}</div>
            )}
          </div>
        ))}
         {/* Anchor for scrolling to bottom, if needed, though direct scrollTop manipulation is used */}
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="flex-shrink-0 p-2 border-t border-slate-700">
        <div className="flex items-center flex-wrap gap-x-2">
          <label htmlFor="commandInput" className="flex-shrink-0">
            <span className="text-green-400">user@gitsheet:</span>
            <span className="text-blue-400">{getPathString(currentPath)}</span>
            <span className="text-gray-300">$</span>
          </label>
          <input
            id="commandInput"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="flex-grow bg-transparent text-gray-300 outline-none min-w-[100px]"
            autoComplete="off"
            spellCheck="false"
          />
          <button 
            type="submit" 
            className="bg-slate-600 hover:bg-slate-500 text-white px-3 py-1 rounded text-xs flex-shrink-0"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default InteractiveTerminal; 