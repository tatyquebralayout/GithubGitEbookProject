import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="sponsors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            Patrocinadores
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Quem Apoia o litro abertis
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que acreditam no poder da educação em tecnologia e apoiam nossa missão.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg" 
              alt="Tech Solutions" 
              className="w-32 h-32 object-cover rounded-lg mb-4 filter grayscale hover:grayscale-0 transition-all"
            />
            <h3 className="text-lg font-semibold text-gray-900">Tech Solutions</h3>
            <p className="text-sm text-gray-600 text-center">Soluções em Tecnologia</p>
          </div>

          {/* Sponsor 2 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg" 
              alt="Dev Academy" 
              className="w-32 h-32 object-cover rounded-lg mb-4 filter grayscale hover:grayscale-0 transition-all"
            />
            <h3 className="text-lg font-semibold text-gray-900">Dev Academy</h3>
            <p className="text-sm text-gray-600 text-center">Educação em Tecnologia</p>
          </div>

          {/* Sponsor 3 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
              alt="Cloud Systems" 
              className="w-32 h-32 object-cover rounded-lg mb-4 filter grayscale hover:grayscale-0 transition-all"
            />
            <h3 className="text-lg font-semibold text-gray-900">Cloud Systems</h3>
            <p className="text-sm text-gray-600 text-center">Infraestrutura Cloud</p>
          </div>

          {/* Sponsor 4 */}
          <div className="flex flex-col items-center">
            <img 
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg" 
              alt="Code Labs" 
              className="w-32 h-32 object-cover rounded-lg mb-4 filter grayscale hover:grayscale-0 transition-all"
            />
            <h3 className="text-lg font-semibold text-gray-900">Code Labs</h3>
            <p className="text-sm text-gray-600 text-center">Laboratório de Inovação</p>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
            Seja um Patrocinador
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Junte-se a nós na missão de democratizar o conhecimento em Git e GitHub
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 