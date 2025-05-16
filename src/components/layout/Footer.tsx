import React from 'react';
import { GitBranch, Github, /* Twitter, */ Linkedin, Mail, Globe, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
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
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Tatiana Barros"
              className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover"
              loading="lazy"
            />
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold">Tatiana Barros</h3>
              <p className="mb-4 text-blue-400">Desenvolvedora Full Stack & Educadora Tech</p>
              <p className="mb-6 max-w-2xl text-gray-400">
                Com mais de 10 anos de experiência em desenvolvimento de software, dedico minha
                carreira a criar soluções inovadoras e compartilhar conhecimento com a comunidade
                tech. Sou apaixonada por ensinar e ajudar outros desenvolvedores a alcançarem seu
                potencial máximo.
              </p>
              <div className="flex justify-center space-x-4 md:justify-start">
                <a
                  href="#"
                  aria-label="GitHub de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="X (anteriormente Twitter) de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="E-mail de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Website de Tatiana Barros"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Link
              to="/"
              className="flex items-center rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
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
            <h3 className="mb-4 text-lg font-medium">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Início
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('challenges')}
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Desafios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Dúvidas Frequentes
                </button>
              </li>
              <li>
                <Link
                  to="/about-author"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Sobre a Autora
                </Link>
              </li>
              <li>
                <Link
                  to="/guest-author"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Autores Convidados
                </Link>
              </li>
              <li>
                <Link
                  to="/ebook"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  E-book
                </Link>
              </li>
              <li>
                <Link
                  to="/game"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Jogo
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Documentação do Git
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Guias de Aprendizado
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Fique Atualizado</h3>
            <p className="mb-2 text-gray-400">
              Inscreva-se para receber atualizações e novos recursos.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-l-md bg-gray-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GitSheet. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="#"
              className="rounded-sm text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="rounded-sm text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Termos de Serviço
            </a>
            <a
              href="#"
              className="rounded-sm text-sm text-gray-400 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
