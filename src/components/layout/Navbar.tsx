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
      setTimeout(() => { // Wait for navigation then scroll
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
  const linkClass = isScrolled || !isHome
    ? 'text-gray-700 hover:text-blue-600' 
    : 'text-white hover:text-blue-200';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHome ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <GitBranch className={`h-8 w-8 ${isScrolled || !isHome ? 'text-blue-600' : 'text-white'}`} />
          {/* Brand name - kept in English */}
          <span className={`ml-2 text-xl font-bold ${isScrolled || !isHome ? 'text-gray-900' : 'text-white'}`}>GitSheet</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`${linkClass} transition-colors`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Início
          </Link>
          <button onClick={() => scrollToSection('features')} className={`${linkClass} transition-colors`}>
            O Projeto
          </button>
          <button onClick={() => scrollToSection('challenges')} className={`${linkClass} transition-colors`}>
            Desafios
          </button>
          <button onClick={() => scrollToSection('benefits')} className={`${linkClass} transition-colors`}>
            Benefícios
          </button>
          <button onClick={() => scrollToSection('sponsors')} className={`${linkClass} transition-colors`}>
            Patrocinadores
          </button>
          <div 
            ref={gameMenuRef}
            className="relative"
          >
            <Link 
              to="/game"
              className={`${linkClass} transition-colors inline-flex items-center cursor-pointer`}
              onClick={() => {
                navigate('/game');
                setIsGameMenuOpen(prev => !prev);
              }}
            >
              Jogo
            </Link>
            {isGameMenuOpen && (
              <div 
                className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50"
              >
                <Link
                  to="/game"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Visão Geral do Jogo
                </Link>
                <Link
                  to="/game/basic-commands"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setIsGameMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Comandos Básicos do Git
                </Link>
              </div>
            )}
          </div>
          <Link 
            to="/about-author" 
            className={`${linkClass} transition-colors`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Autora
          </Link>
          <Link 
            to="/guest-author" 
            className={`${linkClass} transition-colors`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Autores Convidados
          </Link>
          <button onClick={() => scrollToSection('faq')} className={`${linkClass} transition-colors`}>
            Dúvidas Frequentes
          </button>
        </div>
        
        <Link 
          to="/game"
          className={`hidden md:block ${isScrolled || !isHome ? 'bg-blue-600 text-white' : 'bg-white text-blue-900'} font-medium px-5 py-2 rounded-md transition-colors hover:bg-opacity-90`}
        >
          Começar Agora
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Início
          </Link>
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
          >
            O Projeto
          </button>
          <button 
            onClick={() => scrollToSection('challenges')}
            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
          >
            Desafios
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('sponsors')}
            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
          >
            Patrocinadores
          </button>
          <div className="space-y-2">
            <Link 
              to="/game" 
              className="text-gray-700 hover:text-blue-600 transition-colors block"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Jogo
            </Link>
            <Link
              to="/game/basic-commands"
              className="text-gray-700 hover:text-blue-600 transition-colors block pl-4 text-sm"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Comandos Básicos do Git
            </Link>
          </div>
          <Link 
            to="/about-author" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Autora
          </Link>
          <Link 
            to="/guest-author" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Autores Convidados
          </Link>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-gray-700 hover:text-blue-600 transition-colors text-left"
          >
            Dúvidas Frequentes
          </button>
          <Link 
            to="/game"
            className="bg-blue-600 text-white font-medium px-5 py-2 rounded-md text-center transition-colors hover:bg-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Começar Agora
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 