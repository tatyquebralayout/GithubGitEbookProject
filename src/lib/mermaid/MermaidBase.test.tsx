import { render, screen } from '@testing-library/react';
import { vi, describe, test, expect, beforeEach } from 'vitest';
import MermaidBase from './MermaidBase';

// Mock da biblioteca mermaid
vi.mock('mermaid', () => {
  return {
    default: {
      initialize: vi.fn(),
      render: vi.fn().mockResolvedValue({ svg: '<svg>Conteúdo SVG mockado</svg>' }),
    },
  };
});

describe('MermaidBase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('deve renderizar corretamente', async () => {
    render(<MermaidBase id="test-diagram" definition="graph TD\nA-->B" />);

    // Verifica se o container foi criado com o data-testid correto
    const container = screen.getByTestId('mermaid-diagram-test-diagram');
    expect(container).toBeInTheDocument();
  });

  test('deve usar o tema padrão quando não especificado', () => {
    render(<MermaidBase id="test-diagram" definition="graph TD\nA-->B" />);

    const container = screen.getByTestId('mermaid-diagram-test-diagram');
    expect(container).toHaveAttribute('data-theme', 'default');
  });

  test('deve aplicar o tema quando especificado', () => {
    render(<MermaidBase id="test-diagram" definition="graph TD\nA-->B" theme="dark" />);

    const container = screen.getByTestId('mermaid-diagram-test-diagram');
    expect(container).toHaveAttribute('data-theme', 'dark');
  });

  test('deve aplicar classes CSS personalizadas', () => {
    render(<MermaidBase id="test-diagram" definition="graph TD\nA-->B" className="test-class" />);

    const container = screen.getByTestId('mermaid-diagram-test-diagram');
    expect(container).toHaveClass('test-class');
  });

  test('deve chamar onRender quando a renderização for bem-sucedida', async () => {
    const onRenderMock = vi.fn();

    render(<MermaidBase id="test-diagram" definition="graph TD\nA-->B" onRender={onRenderMock} />);

    // Aguardamos que o efeito async seja executado
    await vi.waitFor(() => {
      expect(onRenderMock).toHaveBeenCalledWith('<svg>Conteúdo SVG mockado</svg>');
    });
  });
});
