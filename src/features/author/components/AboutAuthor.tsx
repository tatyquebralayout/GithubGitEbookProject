import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe, BookOpen, Users, Award, Heart, GitBranch, Code, Target, Calendar } from 'lucide-react';

const AboutAuthor: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
            alt="Author Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
            alt="Julia Santos"
            className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Julia Santos
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Desenvolvedora Full Stack & Educadora Tech
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" aria-label="Github" className="text-white/80 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Email" className="text-white/80 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Website" className="text-white/80 hover:text-white transition-colors">
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Sobre Mim
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Minha Jornada no Mundo Tech
              </h2>
            </div>

            <div className="prose prose-lg mx-auto">
              <p>
                Com mais de 10 anos de experiência em desenvolvimento de software, 
                tenho dedicado minha carreira a criar soluções inovadoras e compartilhar 
                conhecimento com a comunidade tech.
              </p>
              
              <p>
                Minha paixão por ensinar me levou a criar conteúdo educacional 
                que já impactou mais de 50.000 desenvolvedores em todo o Brasil. 
                Acredito que o conhecimento deve ser acessível e prático.
              </p>

              <p>
                Além do desenvolvimento de software, sou palestrante em eventos 
                de tecnologia e mentora de desenvolvedores iniciantes, ajudando-os 
                a construir carreiras sólidas na área.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600">Alunos</div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">Mentorias</div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">Palestras</div>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15k+</div>
                <div className="text-gray-600">Seguidores</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-16 bg-gray-50" id="project">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              O Projeto
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
              GitSheet: Sua Referência Interativa de Git
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Uma plataforma educacional completa para ajudar desenvolvedores a dominarem Git e GitHub 
              através de recursos interativos e conteúdo prático.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GitBranch className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Referência Completa</h3>
              <p className="text-gray-600">
                Mais de 50 comandos Git organizados por categoria, com exemplos práticos e explicações detalhadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desafios Práticos</h3>
              <p className="text-gray-600">
                Aprenda através de desafios reais, com feedback instantâneo e progressão gradual de dificuldade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidade Ativa</h3>
              <p className="text-gray-600">
                Conecte-se com outros desenvolvedores, compartilhe experiências e aprenda colaborativamente.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Por Que Criar o GitSheet?
            </h3>
            <div className="space-y-6 text-gray-600">
              <p>
                O GitSheet nasceu da minha experiência como educadora e da observação das dificuldades 
                que muitos desenvolvedores enfrentam ao aprender Git. Percebi que faltava uma ferramenta 
                que combinasse teoria e prática de forma interativa e engajadora.
              </p>
              <p>
                Nossa missão é democratizar o conhecimento sobre controle de versão, tornando o 
                aprendizado de Git mais acessível, prático e divertido. Acreditamos que dominar 
                estas ferramentas é fundamental para qualquer desenvolvedor moderno.
              </p>
              <p>
                Através do GitSheet, oferecemos não apenas uma referência de comandos, mas um 
                ecossistema completo de aprendizado que inclui desafios práticos, projetos reais 
                e uma comunidade ativa de desenvolvedores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Experiência
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Trajetória Profissional
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Tech Lead</h3>
                    <p className="text-blue-600">Empresa Inovadora Tech</p>
                  </div>
                  <span className="text-gray-500">2020 - Presente</span>
                </div>
                <p className="text-gray-600">
                  Liderança técnica de equipe full stack, desenvolvimento de 
                  arquitetura de microsserviços e mentoria de desenvolvedores júnior.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Desenvolvedora Senior</h3>
                    <p className="text-blue-600">StartupXYZ</p>
                  </div>
                  <span className="text-gray-500">2017 - 2020</span>
                </div>
                <p className="text-gray-600">
                  Desenvolvimento de aplicações web escaláveis, implementação de 
                  CI/CD e otimização de performance.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Desenvolvedora Full Stack</h3>
                    <p className="text-blue-600">Empresa Tech Solutions</p>
                  </div>
                  <span className="text-gray-500">2015 - 2017</span>
                </div>
                <p className="text-gray-600">
                  Desenvolvimento full stack com foco em aplicações React e Node.js, 
                  integração com APIs e implementação de features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Habilidades
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                Minhas Especialidades
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[ "JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "SQL"].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm text-gray-700 font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAuthor; 