import React, { useState, useEffect, useRef } from 'react';
import { GitBranch, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGameMenuOpen, setIsGameMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/'; // Checks if the current path is the homepage
  const gameMenuRef = useRef<HTMLDivElement>(null); // Ref for the game dropdown menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Set scrolled state based on scroll position
    };
    handleScroll(); // Call handler on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true); // Force scrolled state if not on homepage
    }
  }, [isHome]);

  useEffect(() => {
    // Closes the game dropdown if a click occurs outside of it
    const handleClickOutside = (event: MouseEvent) => {
      if (gameMenuRef.current && !gameMenuRef.current.contains(event.target as Node)) {
        setIsGameMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside); // Cleanup listener
  }, []);

  // Scrolls to a specific section on the page
  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      navigate('/'); // Navigate to home if not already there
      setTimeout(() => {
        // Wait for navigation then scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after scroll
  };

  // Dynamically sets link class based on scroll and homepage status
  const linkClass =
    isScrolled || !isHome ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200';

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-white py-2 shadow-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <GitBranch
            className={`h-8 w-8 ${isScrolled || !isHome ? 'text-blue-600' : 'text-white'}`}
          />
          {/* Brand name - kept in English */}
          <span
            className={`ml-2 text-xl font-bold ${isScrolled || !isHome ? 'text-gray-900' : 'text-white'}`}
          >
            GitSheet
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/"
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Início
          </Link>
          <button
            onClick={() => scrollToSection('features')}
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
          >
            O Projeto
          </button>
          <button
            onClick={() => scrollToSection('challenges')}
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
          >
            Desafios
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('sponsors')}
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
          >
            Patrocinadores
          </button>
          <div ref={gameMenuRef} className="relative">
            <button
              className={`${linkClass} inline-flex cursor-pointer items-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
              onClick={() => {
                setIsGameMenuOpen((prev) => !prev);
              }}
            >
              Jogo
            </button>
            {isGameMenuOpen && (
              <div className="absolute left-0 z-50 mt-2 w-56 rounded-md bg-white py-1 shadow-lg">
                <Link
                  to="/game"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Visão Geral do Jogo
                </Link>
                <Link
                  to="/game/basic-commands"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Comandos Básicos do Git
                </Link>
                <Link
                  to="/game/intermediate-commands"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Comandos Intermediários do Git
                </Link>
                <Link
                  to="/game/advanced-commands"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Comandos Avançados do Git
                </Link>
                <Link
                  to="/game/github-commands"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Comandos GitHub CLI
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about-author"
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Autora
          </Link>
          <Link
            to="/guest-author"
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Autores Convidados
          </Link>
          <button
            onClick={() => scrollToSection('faq')}
            className={`${linkClass} transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-blue-500 focus:ring-offset-white' : 'focus:ring-blue-300 focus:ring-offset-gray-900'}`}
          >
            Dúvidas Frequentes
          </button>
        </div>

        <Link
          to="/game"
          className={`hidden md:block ${isScrolled || !isHome ? 'bg-blue-600 text-white focus:ring-blue-300 focus:ring-offset-blue-600' : 'bg-white text-blue-900 focus:ring-blue-500 focus:ring-offset-white'} rounded-md px-5 py-2 font-medium transition-colors hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Começar Agora
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled || !isHome ? 'text-gray-700 focus:ring-gray-500' : 'text-white focus:ring-gray-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 ${isScrolled || !isHome ? 'focus:ring-offset-white' : 'focus:ring-offset-gray-900'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col space-y-4 bg-white p-4 shadow-lg md:hidden">
          <Link
            to="/"
            className="text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Início
          </Link>
          <button
            onClick={() => scrollToSection('features')}
            className="text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            O Projeto
          </button>
          <button
            onClick={() => scrollToSection('challenges')}
            className="text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Desafios
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Benefícios
          </button>
          <button
            onClick={() => scrollToSection('sponsors')}
            className="text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Patrocinadores
          </button>
          <div className="space-y-2">
            <button
              className="block w-full text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              onClick={() => {
                // Toggle mobile submenu
                const mobileSubmenu = document.getElementById('mobile-game-submenu');
                if (mobileSubmenu) {
                  mobileSubmenu.classList.toggle('hidden');
                }
              }}
            >
              Jogo
            </button>
            <div id="mobile-game-submenu" className="hidden">
              <Link
                to="/game/basic-commands"
                className="block pl-4 text-sm text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Comandos Básicos do Git
              </Link>
              <Link
                to="/game/intermediate-commands"
                className="block pl-4 text-sm text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Comandos Intermediários do Git
              </Link>
              <Link
                to="/game/advanced-commands"
                className="block pl-4 text-sm text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Comandos Avançados do Git
              </Link>
              <Link
                to="/game/github-commands"
                className="block pl-4 text-sm text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Comandos GitHub CLI
              </Link>
              <Link
                to="/game"
                className="block pl-4 text-sm text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Visão Geral do Jogo
              </Link>
            </div>
          </div>
          <Link
            to="/about-author"
            className="text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Autora
          </Link>
          <Link
            to="/guest-author"
            className="text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Autores Convidados
          </Link>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-left text-gray-700 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            Dúvidas Frequentes
          </button>
          <Link
            to="/game"
            className="rounded-md bg-blue-600 px-5 py-2 text-center font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-600"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Começar Agora
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
