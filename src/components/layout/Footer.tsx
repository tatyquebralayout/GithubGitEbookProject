import React from 'react';
import { GitBranch, Github, /* Twitter, */ Linkedin, Mail, Globe, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        window.location.href = `/#${sectionId}`;
      }, 100);
      return;
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Author Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Julia Santos"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Julia Santos</h3>
              <p className="text-blue-400 mb-4">Desenvolvedora Full Stack & Educadora Tech</p>
              <p className="text-gray-400 max-w-2xl mb-6">
                Com mais de 10 anos de experiência em desenvolvimento de software, 
                dedico minha carreira a criar soluções inovadoras e compartilhar 
                conhecimento com a comunidade tech. Sou apaixonada por ensinar e 
                ajudar outros desenvolvedores a alcançarem seu potencial máximo.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" aria-label="GitHub de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" aria-label="X (anteriormente Twitter) de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
                </a>
                <a href="#" aria-label="LinkedIn de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Instagram de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" aria-label="E-mail de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" aria-label="Website de Julia Santos" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Link 
              to="/" 
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <GitBranch className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">GitSheet</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Domine os comandos Git com nossa referência interativa.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Início
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('challenges')} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  Desafios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('benefits')} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  Benefícios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">
                  Dúvidas Frequentes
                </button>
              </li>
              <li>
                <Link 
                  to="/about-author" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Sobre a Autora
                </Link>
              </li>
              <li>
                <Link 
                  to="/guest-author" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Autores Convidados
                </Link>
              </li>
              <li>
                <Link 
                  to="/ebook" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  E-book
                </Link>
              </li>
              <li>
                <Link 
                  to="/game" 
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Jogo
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-medium mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Documentação do Git</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Guias de Aprendizado</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Suporte</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">Fique Atualizado</h3>
            <p className="text-gray-400 mb-2">
              Inscreva-se para receber atualizações e novos recursos.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Digite seu e-mail" 
                  className="px-4 py-2 w-full bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GitSheet. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Termos de Serviço</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 focus:ring-offset-gray-900 rounded-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 