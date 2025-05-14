import React from 'react';
import { Github, /* Twitter, */ Mail, Globe, Instagram, Linkedin } from 'lucide-react';

const Challenges: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="challenges">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Desafios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Conheça Nossos Autores Parceiros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nam vulputate dapibus suas habilidades com Git e GitHub através Nam vulputate dapibus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Profile 1 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Julia Santos</h3>
            <p className="text-gray-600 mb-4">Senior Frontend Developer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Julia Santos" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Julia Santos" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Julia Santos" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Instagram de Julia Santos" className="text-gray-600 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email de Julia Santos" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Site de Julia Santos" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pedro Alves</h3>
            <p className="text-gray-600 mb-4">Backend Developer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Pedro Alves" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Pedro Alves" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Pedro Alves" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Email de Pedro Alves" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Site de Pedro Alves" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Silva</h3>
            <p className="text-gray-600 mb-4">DevOps Engineer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Ana Silva" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Ana Silva" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Ana Silva" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Instagram de Ana Silva" className="text-gray-600 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email de Ana Silva" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 4 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lucas Oliveira</h3>
            <p className="text-gray-600 mb-4">Full Stack Developer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Lucas Oliveira" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Lucas Oliveira" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Lucas Oliveira" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Site de Lucas Oliveira" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 5 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mariana Costa</h3>
            <p className="text-gray-600 mb-4">UI/UX Developer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Mariana Costa" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Mariana Costa" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Mariana Costa" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Email de Mariana Costa" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Site de Mariana Costa" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 6 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Rafael Santos</h3>
            <p className="text-gray-600 mb-4">Mobile Developer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Rafael Santos" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Rafael Santos" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Rafael Santos" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Email de Rafael Santos" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 7 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Isabela Lima</h3>
            <p className="text-gray-600 mb-4">Cloud Architect</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Isabela Lima" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Isabela Lima" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Isabela Lima" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Site de Isabela Lima" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 8 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Gabriel Ferreira</h3>
            <p className="text-gray-600 mb-4">Security Engineer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Gabriel Ferreira" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Gabriel Ferreira" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Gabriel Ferreira" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Email de Gabriel Ferreira" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 9 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Carolina Mendes</h3>
            <p className="text-gray-600 mb-4">Data Engineer</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Carolina Mendes" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Carolina Mendes" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Carolina Mendes" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Site de Carolina Mendes" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 10 */}
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thiago Martins</h3>
            <p className="text-gray-600 mb-4">Software Architect</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub de Thiago Martins" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn de Thiago Martins" className="text-gray-600 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X de Thiago Martins" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="h-5 w-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" aria-label="Instagram de Thiago Martins" className="text-gray-600 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email de Thiago Martins" className="text-gray-600 hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Site de Thiago Martins" className="text-gray-600 hover:text-green-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges; 