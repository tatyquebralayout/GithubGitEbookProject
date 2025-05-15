import React from 'react';

const SponsorsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="sponsors">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Patrocinadores
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Quem Apoia o litro abertis
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que acreditam no poder da educação em tecnologia e apoiam nossa missão.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {/* Sponsor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/2977565/pexels-photo-2977565.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Tech Solutions"
              className="mb-4 h-32 w-32 rounded-lg object-cover grayscale filter transition-all hover:grayscale-0"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900">Tech Solutions</h3>
            <p className="text-center text-sm text-gray-600">Soluções em Tecnologia</p>
          </div>

          {/* Sponsor 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Dev Academy"
              className="mb-4 h-32 w-32 rounded-lg object-cover grayscale filter transition-all hover:grayscale-0"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900">Dev Academy</h3>
            <p className="text-center text-sm text-gray-600">Educação em Tecnologia</p>
          </div>

          {/* Sponsor 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Cloud Systems"
              className="mb-4 h-32 w-32 rounded-lg object-cover grayscale filter transition-all hover:grayscale-0"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900">Cloud Systems</h3>
            <p className="text-center text-sm text-gray-600">Infraestrutura Cloud</p>
          </div>

          {/* Sponsor 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?w=256&h=256&fit=crop&auto=compress,format"
              alt="Code Labs"
              className="mb-4 h-32 w-32 rounded-lg object-cover grayscale filter transition-all hover:grayscale-0"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-gray-900">Code Labs</h3>
            <p className="text-center text-sm text-gray-600">Laboratório de Inovação</p>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
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
