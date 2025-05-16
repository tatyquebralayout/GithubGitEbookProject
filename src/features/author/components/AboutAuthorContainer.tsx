import React from 'react';
import AboutAuthor from './AboutAuthor';

const AboutAuthorContainer: React.FC = () => {
  // Dados fixos, mas poderiam vir de um hook, API, etc.
  const authorData = {
    name: 'Tatiana Barros',
    role: 'Autora do Projeto',
    avatarUrl:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=256&h=256&fit=crop&auto=compress,format',
    description: 'Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.',
    socialLinks: {
      github: '#',
      linkedin: '#',
      twitter: '#',
      email: '#',
      website: '#',
    },
  };

  return <AboutAuthor {...authorData} />;
};

export default AboutAuthorContainer;
