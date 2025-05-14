/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'github-canvas-default': 'var(--color-canvas-default)',
        'github-canvas-subtle': 'var(--color-canvas-subtle)',
        'github-canvas-inset': 'var(--color-canvas-inset)',
        'github-border-default': 'var(--color-border-default)',
        'github-border-muted': 'var(--color-border-muted)',
        'github-fg-default': 'var(--color-fg-default)',
        'github-fg-muted': 'var(--color-fg-muted)',
        'github-fg-subtle': 'var(--color-fg-subtle)',
        'github-accent-fg': 'var(--color-accent-fg)',
        'github-accent-emphasis': 'var(--color-accent-emphasis)',
        'github-accent-muted': 'var(--color-accent-muted)',
        'github-accent-subtle': 'var(--color-accent-subtle)',
        'github-success-fg': 'var(--color-success-fg)',
        'github-success-emphasis': 'var(--color-success-emphasis)',
        'github-success-muted': 'var(--color-success-muted)',
        'github-success-subtle': 'var(--color-success-subtle)',
        'github-attention-fg': 'var(--color-attention-fg)',
        'github-attention-emphasis': 'var(--color-attention-emphasis)',
        'github-attention-muted': 'var(--color-attention-muted)',
        'github-attention-subtle': 'var(--color-attention-subtle)',
        'github-severe-fg': 'var(--color-severe-fg)',
        'github-severe-emphasis': 'var(--color-severe-emphasis)',
        'github-severe-muted': 'var(--color-severe-muted)',
        'github-severe-subtle': 'var(--color-severe-subtle)',
        'github-danger-fg': 'var(--color-danger-fg)',
        'github-danger-emphasis': 'var(--color-danger-emphasis)',
        'github-danger-muted': 'var(--color-danger-muted)',
        'github-danger-subtle': 'var(--color-danger-subtle)',
        'github-done-fg': 'var(--color-done-fg)',
        'github-done-emphasis': 'var(--color-done-emphasis)',
        'github-done-muted': 'var(--color-done-muted)',
        'github-done-subtle': 'var(--color-done-subtle)'
      },
      boxShadow: {
        'github-sm': 'var(--shadow-resting-small)',
        'github-md': 'var(--shadow-floating-small)',
        'github-lg': 'var(--shadow-floating-medium)'
      }
    }
  },
  plugins: []
};