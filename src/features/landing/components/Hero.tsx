import React, { useState, useEffect } from 'react';
import { GitBranch, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
        commands: Math.min(
          Math.floor((targetStats.commands / steps) * currentStep),
          targetStats.commands
        ),
        categories: Math.min(
          Math.floor((targetStats.categories / steps) * currentStep),
          targetStats.categories
        ),
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
    <section
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 py-32"
      id="hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute left-0 top-20 font-mono text-xs text-github-fg-default">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2">
              $ git {['status', 'commit', 'push', 'pull', 'branch', 'checkout', 'merge'][i % 7]}{' '}
              {i % 3 === 0 ? '-m "update feature"' : ''}
            </div>
          ))}
        </div>
        <div className="absolute bottom-20 right-0 font-mono text-xs text-github-fg-default">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="my-2">
              $ git {['init', 'add .', 'clone', 'fetch', 'rebase', 'tag', 'stash'][i % 7]}{' '}
              {i % 3 === 0 ? 'origin main' : ''}
            </div>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-400 backdrop-blur-sm">
              Mussum Ipsum, cacilds vidis litro abertis.
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Suco de cevadiss deixa as pessoas mais interessantis.
            <br className="hidden md:block" />
            Viva Forevis aptent taciti sociosqu ad litora torquent.{' '}
            <span className="text-blue-400">GitSheet</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 md:text-xl">
            Leite de capivaris, leite de mula manquis sem cabeça. {stats.commands} Si num tem leite
            então bota uma pinga aí cumpadi!
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/about-author"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center rounded-lg bg-blue-500 px-8 py-4 font-medium text-white transition-colors hover:bg-blue-600"
            >
              <GitBranch className="mr-2 h-5 w-5" />
              cacilds vidis
            </Link>
            <Link
              to="/about-author"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center justify-center rounded-lg bg-gray-700 px-8 py-4 font-medium text-white transition-colors hover:bg-gray-600"
            >
              <GitMerge className="mr-2 h-5 w-5" />
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Interactive Stats Cards */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          <div className="transform rounded-lg border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
              {stats.commands}+
            </div>
            <p className="text-sm text-gray-400 md:text-base">litro abertis</p>
          </div>

          <div className="transform rounded-lg border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">
              {stats.categories}
            </div>
            <p className="text-sm text-gray-400 md:text-base">litro abertis</p>
          </div>

          <div className="transform rounded-lg border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">{stats.tips}+</div>
            <p className="text-sm text-gray-400 md:text-base">litro abertis</p>
          </div>

          <div className="transform rounded-lg border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="mb-2 text-3xl font-bold text-blue-400 md:text-4xl">{stats.free}%</div>
            <p className="text-sm text-gray-400 md:text-base">litro abertis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
