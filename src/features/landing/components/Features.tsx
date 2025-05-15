import React from 'react';
import { Search, BookOpen, Tag, Terminal, Book, Folders } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-600" />,
    title: 'Organizado por Categoria',
    description:
      'Comandos agrupados em Básico, Intermediário, Avançado e Servidor para fácil referência conforme você evolui.',
  },
  {
    icon: <Search className="h-8 w-8 text-blue-600" />,
    title: 'Busca Poderosa',
    description:
      'Encontre exatamente o que precisa com uma função de busca integrada que filtra todos os comandos e descrições.',
  },
  {
    icon: <Terminal className="h-8 w-8 text-blue-600" />,
    title: 'Exemplos de Comandos',
    description:
      'Cada comando vem com exemplos do mundo real para ajudar você a entender como e quando usá-los.',
  },
  {
    icon: <Tag className="h-8 w-8 text-blue-600" />,
    title: 'Código por Cores',
    description:
      'Indicadores visuais ajudam a identificar tipos de comando, com destaque especial para operações potencialmente destrutivas.',
  },
  {
    icon: <Book className="h-8 w-8 text-blue-600" />,
    title: 'Dicas e Truques',
    description:
      'Uma seção dedicada com dicas avançadas de Git para melhorar seu fluxo de trabalho e produtividade.',
  },
  {
    icon: <Folders className="h-8 w-8 text-blue-600" />,
    title: 'Menu Personalizado',
    description:
      'Um menu conveniente que torna a navegação e descoberta de ferramentas simples e intuitiva.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            O Projeto
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Tudo que Você Precisa para Dominar o Git e GitHub
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nosso template interativo litro abertis fornece uma referência completa do Git e GitHub
            com recursos poderosos projetados para acelerar seu aprendizado e inspirar sua carreira
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:transform hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/about-author"
            className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800"
          >
            <span className="mr-2">Conheça mais sobre o projeto</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
