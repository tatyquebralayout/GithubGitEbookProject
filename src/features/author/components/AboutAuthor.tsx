import React from 'react';
import {
  Github,
  /* Twitter, */ Linkedin,
  Mail,
  Globe,
  BookOpen,
  Users,
  Award,
  Heart,
  GitBranch,
  Code,
  Target,
} from 'lucide-react';
import AuthorProfile from '../../../components/common/AuthorProfile';

export interface AboutAuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
  description: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    website?: string;
  };
}

const AboutAuthor: React.FC<AboutAuthorProps> = ({ name, role, avatarUrl, description, socialLinks }) => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?w=1920&auto=compress,format"
            alt="Plano de Fundo da Autora"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <AuthorProfile
            name={name}
            role={role}
            avatarUrl={avatarUrl}
            description={description}
            socialLinks={socialLinks}
          />
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#"
              aria-label="GitHub"
              className="text-white/80 transition-colors hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="X (anteriormente Twitter)"
              className="text-white/80 transition-colors hover:text-white"
            >
              {/* <Twitter className="h-6 w-6" /> */}
              <span className="flex h-6 w-6 items-center justify-center font-bold">X</span>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-white/80 transition-colors hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="E-mail"
              className="text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="text-white/80 transition-colors hover:text-white"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-purple-800">
                Sobre Mim
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Minha Jornada no Mundo Tech</h2>
            </div>

            <div className="prose prose-lg mx-auto">
              <p>
                Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra
                viagem! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que
                eu tomo, mas ninguém vê os tombis que eu levo!
              </p>

              <p>
                Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra
                viagem! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que
                eu tomo, mas ninguém vê os tombis que eu levo!
              </p>

              <p>
                Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra
                viagem! Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que
                eu tomo, mas ninguém vê os tombis que eu levo!
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15k+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="bg-gray-50 py-16" id="project">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              O Projeto GitSheet
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              Mussum Ipsum, cacilds vidis litro abertis
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Sapien in monti palavris qui num significa nadis i pareci latim. Nullam volutpat risus
              nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <GitBranch className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Referência Interativa</h3>
              <p className="text-gray-600">
                Sapien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Desafios Práticos</h3>
              <p className="text-gray-600">
                Sapien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Foco no Aprendizado</h3>
              <p className="text-gray-600">
                Sapien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl rounded-lg bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              Qual a motivação por trás do GitSheet?
            </h3>
            <div className="space-y-6 text-gray-600">
              <p>
                Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec gravida
                turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de cevadiss
                deixa as pessoas mais interessantis.
              </p>
              <p>
                Nossa missão é Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula.
                Donec gravida turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de
                cevadiss deixa as pessoas mais interessantis.
              </p>
              <p>
                Através do Manduma pindureta quium dia nois paga. Donec gravida turpis a vulputate
                ultricies. Vide electram sadipscing et per. Suco de cevadiss deixa as pessoas mais
                interessantis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
                Experiência Profissional
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Minha Trajetória e Projetos</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Desenvolvedora Líder no Projeto GitSheet
                    </h3>
                    <p className="text-blue-600">Projeto Pessoal / Educacional</p>
                  </div>
                  <span className="text-gray-500">2023 - Presente</span>
                </div>
                <p className="text-gray-600">
                  Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec
                  gravida turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de
                  cevadiss deixa as pessoas mais interessantis.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Engenheira de Software Sênior
                    </h3>
                    <p className="text-blue-600">Tech Solutions Inc.</p>
                  </div>
                  <span className="text-gray-500">2018 - 2023</span>
                </div>
                <p className="text-gray-600">
                  Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec
                  gravida turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de
                  cevadiss deixa as pessoas mais interessantis.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Desenvolvedora Web Pleno</h3>
                    <p className="text-blue-600">WebWorks Co.</p>
                  </div>
                  <span className="text-gray-500">2015 - 2018</span>
                </div>
                <p className="text-gray-600">
                  Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. Donec
                  gravida turpis a vulputate ultricies. Vide electram sadipscing et per. Suco de
                  cevadiss deixa as pessoas mais interessantis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800">
                Habilidades
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Minhas Competências Técnicas
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              {[
                'JavaScript',
                'TypeScript',
                'React',
                'Node.js',
                'Python',
                'AWS',
                'Docker',
                'SQL',
              ].map((skill) => (
                <div
                  key={skill}
                  className="rounded-lg bg-white p-4 font-medium text-gray-700 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Vamos Conectar!</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Adoraria ouvir sobre seus projetos, ideias ou apenas bater um papo sobre tecnologia. Não
            hesite em entrar em contato!
          </p>
          <a
            href="mailto:tatiana.barros@example.com"
            className="rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition-colors hover:bg-gray-100"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthor;
