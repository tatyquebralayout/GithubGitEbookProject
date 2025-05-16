import React from 'react';
import { Github, /* Twitter, */ Mail, Globe, Instagram, Linkedin } from 'lucide-react';

const Challenges = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="challenges">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Desafios
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Conheça Nossos Autores Parceiros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nam vulputate dapibus suas habilidades com Git e GitHub através Nam vulputate dapibus
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile 1 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Julia Santos</h3>
            <p className="mb-4 text-gray-600">Desenvolvedora Frontend Sênior</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Julia Santos"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Julia Santos"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Julia Santos"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Instagram de Julia Santos"
                className="text-gray-600 transition-colors hover:text-red-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email de Julia Santos"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Site de Julia Santos"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Pedro Alves</h3>
            <p className="mb-4 text-gray-600">Desenvolvedor Backend</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Pedro Alves"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Pedro Alves"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Pedro Alves"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Email de Pedro Alves"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Site de Pedro Alves"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Ana Silva</h3>
            <p className="mb-4 text-gray-600">Engenheira DevOps</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Ana Silva"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Ana Silva"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Ana Silva"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Instagram de Ana Silva"
                className="text-gray-600 transition-colors hover:text-red-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email de Ana Silva"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 4 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Lucas Oliveira</h3>
            <p className="mb-4 text-gray-600">Desenvolvedor Full Stack</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Lucas Oliveira"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Lucas Oliveira"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Lucas Oliveira"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Site de Lucas Oliveira"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 5 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Mariana Costa</h3>
            <p className="mb-4 text-gray-600">Desenvolvedora UI/UX</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Mariana Costa"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Mariana Costa"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Mariana Costa"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Email de Mariana Costa"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Site de Mariana Costa"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 6 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Rafael Santos</h3>
            <p className="mb-4 text-gray-600">Desenvolvedor Mobile</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Rafael Santos"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Rafael Santos"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Rafael Santos"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Email de Rafael Santos"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 7 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Isabela Lima</h3>
            <p className="mb-4 text-gray-600">Arquiteta Cloud</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Isabela Lima"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Isabela Lima"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Isabela Lima"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Site de Isabela Lima"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 8 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Gabriel Ferreira</h3>
            <p className="mb-4 text-gray-600">Engenheiro de Segurança</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Gabriel Ferreira"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Gabriel Ferreira"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Gabriel Ferreira"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Email de Gabriel Ferreira"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 9 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Carolina Mendes</h3>
            <p className="mb-4 text-gray-600">Engenheira de Dados</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Carolina Mendes"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Carolina Mendes"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Carolina Mendes"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Site de Carolina Mendes"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile 10 */}
          <div className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-md">
            <h3 className="mb-2 text-xl font-bold text-gray-900">Thiago Martins</h3>
            <p className="mb-4 text-gray-600">Arquiteto de Software</p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="GitHub de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-blue-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="X de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <span className="flex h-5 w-5 items-center justify-center font-bold">X</span>
              </a>
              <a
                href="#"
                aria-label="Instagram de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-red-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Email de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-blue-500"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Site de Thiago Martins"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
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
