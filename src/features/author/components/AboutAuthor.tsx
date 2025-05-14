import React from 'react';
import { Github, /* Twitter, */ Linkedin, Mail, Globe, BookOpen, Users, Award, Heart, GitBranch, Code, Target } from 'lucide-react';

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
            Tatiana Barros
          </h1>
          <p className="mt-4 text-xl text-white/80">
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. 
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" aria-label="Github" className="text-white/80 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" aria-label="X" className="text-white/80 hover:text-white transition-colors">
              {/* <Twitter className="h-6 w-6" /> */}
              <span className="h-6 w-6 flex items-center justify-center font-bold">X</span>
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
              Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra viagem! 
              Diuretics paradis num copo é motivis de denguis. 
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
              </p>
              
              <p>
              Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra viagem! 
              Diuretics paradis num copo é motivis de denguis. 
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
              </p>

              <p>
              Mé faiz elementum girarzis, nisi eros vermeio. Bota 1 metro de cachacis aí pra viagem! 
              Diuretics paradis num copo é motivis de denguis. 
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50k+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">30+</div>
                <div className="text-gray-600">cachacis aí pra viagem!</div>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 bg-gray-50" id="project">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              O Projeto
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">
            cachacis aí pra viagem!
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            apien in monti palavris qui num significa nadis i pareci latim. 
            Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. 
            Sed non consequat odio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GitBranch className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">cachacis aí pra viagem!</h3>
              <p className="text-gray-600">
              apien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Desafios Práticos</h3>
              <p className="text-gray-600">
              apien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">cachacis aí pra viagem!</h3>
              <p className="text-gray-600">
              apien in monti palavris qui num significa nadis i pareci latim.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            cachacis aí pra viagem!?
            </h3>
            <div className="space-y-6 text-gray-600">
              <p>
              Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
              Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.
              </p>
              <p>
                Nossa missão é Manduma pindureta quium dia nois paga. 
              Pellentesque nec nulla ligula. 
              Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.
              </p>
              <p>
                Através do Manduma pindureta quium dia nois paga. 
              Donec gravida turpis a vulputate ultricies.
              Vide electram sadipscing et per. 
              Suco de cevadiss deixa as pessoas mais interessantis.
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
              cachacis aí pra viagem!
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">cachacis aí pra viagem!</h3>
                    <p className="text-blue-600"> Cachacis aí pra viagem!</p>
                  </div>
                  <span className="text-gray-500">2024 - Presente</span>
                </div>
                <p className="text-gray-600">
                Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
                Donec gravida turpis a vulputate ultricies.
                Vide electram sadipscing et per. 
                Suco de cevadiss deixa as pessoas mais interessantis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">cachacis aí pra viagem!</h3>
                    <p className="text-blue-600"> Cachacis aí pra viagem!</p>
                  </div>
                  <span className="text-gray-500">2024 - Presente</span>
                </div>
                <p className="text-gray-600">
                  Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
                Donec gravida turpis a vulputate ultricies.
                Vide electram sadipscing et per. 
                Suco de cevadiss deixa as pessoas mais interessantis.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">cachacis aí pra viagem!</h3>
                    <p className="text-blue-600"> Cachacis aí pra viagem!</p>
                  </div>
                  <span className="text-gray-500">2024 - Presente</span>
                </div>
                <p className="text-gray-600">
                  Manduma pindureta quium dia nois paga. Pellentesque nec nulla ligula. 
                Donec gravida turpis a vulputate ultricies.
                Vide electram sadipscing et per. 
                Suco de cevadiss deixa as pessoas mais interessantis.
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