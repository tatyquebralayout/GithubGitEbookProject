import React, { useState, useEffect } from 'react';
import { GitBranch, Search, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [stats, setStats] = useState({
    commands: 0,
    categories: 0,
    tips: 0,
    free: 0,
  });

  useEffect(() => {
    // Simulate loading data with a counter animation
    const targetStats = {
      commands: 50,
      categories: 4,
      tips: 20,
      free: 100,
    };

    const duration = 2000; // 2 seconds
    const steps = 50;
    const interval = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setStats({
        commands: Math.min(Math.floor((targetStats.commands / steps) * currentStep), targetStats.commands),
        categories: Math.min(Math.floor((targetStats.categories / steps) * currentStep), targetStats.categories),
        tips: Math.min(Math.floor((targetStats.tips / steps) * currentStep), targetStats.tips),
        free: Math.min(Math.floor((targetStats.free / steps) * currentStep), targetStats.free),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-32" id="hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute left-0 top-20 text-github-fg-default text-xs font-mono">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2">
              $ git {['status', 'commit', 'push', 'pull', 'branch', 'checkout', 'merge'][i % 7]} {i % 3 === 0 ? '-m "update feature"' : ''}
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-20 text-github-fg-default text-xs font-mono">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2">
              $ git {['init', 'add .', 'clone', 'fetch', 'rebase', 'tag', 'stash'][i % 7]} {i % 3 === 0 ? 'origin main' : ''}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center">
            <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Referência Git Interativa
            </span>
          </div>
          
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Domine os Comandos Git <br className="hidden md:block" />
            com <span className="text-blue-400">GitSheet</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Uma referência interativa com mais de {stats.commands} comandos Git 
            organizados por categoria, pesquisáveis e com exemplos práticos.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/about-author"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <GitBranch className="mr-2 h-5 w-5" />
              Obter Template
            </Link>
            <Link 
              to="/about-author"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <GitMerge className="mr-2 h-5 w-5" />
              Saiba Mais
            </Link>
          </div>
        </div>
        
        {/* Interactive Stats Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.commands}+</div>
            <p className="text-gray-400 text-sm md:text-base">Comandos Git</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.categories}</div>
            <p className="text-gray-400 text-sm md:text-base">Categorias</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.tips}+</div>
            <p className="text-gray-400 text-sm md:text-base">Dicas Pro</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stats.free}%</div>
            <p className="text-gray-400 text-sm md:text-base">Gratuito</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 