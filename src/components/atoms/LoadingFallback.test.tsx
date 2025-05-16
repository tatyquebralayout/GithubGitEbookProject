import { render, screen } from '@testing-library/react';
import LoadingFallback from './LoadingFallback';
import { describe, it, expect } from 'vitest';

describe('LoadingFallback', () => {
  it('renders the loading spinner', () => {
    render(<LoadingFallback />);
    // Usar getByRole com o aria-label que adicionamos
    const spinner = screen.getByRole('status', { name: /loading-spinner/i });
    expect(spinner).toBeInTheDocument();
  });

  it('renders the loading text "Carregando..."', () => {
    render(<LoadingFallback />);
    const loadingText = screen.getByText('Carregando...');
    expect(loadingText).toBeInTheDocument();
  });
});
