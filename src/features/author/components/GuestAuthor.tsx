import React, { useState } from 'react';
import { BookOpen, Crosshair, Clock, Award, Send } from 'lucide-react';

const GuestAuthor: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ebookgitadventure@gmail.com?subject=Quero Participar&body=Olá, gostaria de participar como autor convidado.%0D%0A%0D%0AEmail para contato: ${email}`;
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Colaboração"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wide backdrop-blur-sm">
            Autores
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
          Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
             
          </h1>
          <p className="mt-6 text-xl text-white/80">
          Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
          Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
          Suco de cevadiss deixa as pessoas mais interessantis.
          </p>
        </div>
      </section>

      {/* O Projeto Section */}
      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-header">
            <span className="gh-badge-primary">O Projeto</span>
            <h2 className="gh-title">Sobre  Autores</h2>
            <p className="gh-description">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="gh-card p-6">
              <div className="bg-github-accent-subtle rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-github-accent-fg" />
              </div>
              <h3 className="text-xl font-semibold text-github-fg-default mb-2">Compartilhe Conhecimento</h3>
              <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
              </p>
            </div>

            <div className="gh-card p-6">
              <div className="bg-github-success-subtle rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Crosshair className="h-6 w-6 text-github-success-fg" />
              </div>
              <h3 className="text-xl font-semibold text-github-fg-default mb-2">Alcance Global</h3>
              <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
              </p>
            </div>

            <div className="gh-card p-6">
              <div className="bg-github-attention-subtle rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-github-attention-fg" />
              </div>
              <h3 className="text-xl font-semibold text-github-fg-default mb-2">Reconhecimento</h3>
              <p className="text-github-fg-muted">
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor Section */}
      <section className="gh-section bg-white">
        <div className="gh-container">
          <div className="gh-header">
            <span className="gh-badge-primary">Proposta de Valor</span>
            <h2 className="gh-title">O Que Oferecemos</h2>
            <p className="gh-description">
            Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
            </p>
          </div>

          <div className="max-w-4xl mx-auto gh-card p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-github-fg-default mb-4">Para Você</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-github-fg-default mb-4">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-success-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-success-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">Divulgação nas redes sociais</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="gh-section">
        <div className="gh-container">
          <div className="gh-header">
            <span className="gh-badge-primary">Nossa História</span>
            <h2 className="gh-title">Como Tudo Começou</h2>
            <p className="gh-description">
              A jornada que nos trouxe até aqui
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gh-card p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-github-accent-subtle rounded-full p-3 mt-1">
                    <Clock className="h-6 w-6 text-github-accent-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-github-fg-default">Do Problema à Solução</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Tudo começou quando  Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-github-success-subtle rounded-full p-3 mt-1">
                    <Crosshair className="h-6 w-6 text-github-success-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-github-fg-default">Nossa Missão</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
            Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. 
            Suco de cevadiss deixa as pessoas mais interessantis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-github-attention-subtle rounded-full p-3 mt-1">
                    <Award className="h-6 w-6 text-github-attention-fg" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-github-fg-default">Nosso Impacto</h3>
                    <p className="mt-2 text-github-fg-muted">
                      Vide electram sadipscing et per. 
                      Suco de cevadiss deixa as pessoas mais interessantis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafio Section */}
      <section className="gh-section bg-white">
        <div className="gh-container">
          <div className="gh-header">
            <span className="gh-badge-primary">O Desafio</span>
            <h2 className="gh-title">Faça Parte da Nossa Missão</h2>
            <p className="gh-description">
              Ajude-nos a tornar o Git E Github mais acessível para todos
            </p>
          </div>

          <div className="max-w-4xl mx-auto gh-card p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-github-fg-default mb-4">O Que Procuramos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-github-accent-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-accent-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">   Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-accent-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-accent-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">Paixão por compartilhar conhecimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-github-accent-subtle rounded-full p-1 mt-1">
                      <svg className="w-4 h-4 text-github-accent-fg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-github-fg-muted">Compromisso com a qualidade</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-github-fg-default mb-4">Como Participar</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-github-fg-default mb-1">
                      Seu Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      required
                      className="w-full px-4 py-2 border border-github-border-default rounded-md focus:outline-none focus:ring-2 focus:ring-github-accent-emphasis focus:border-github-accent-emphasis bg-github-canvas-inset text-github-fg-default"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-github-accent-emphasis hover:bg-github-accent-muted text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Quero Participar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestAuthor; 