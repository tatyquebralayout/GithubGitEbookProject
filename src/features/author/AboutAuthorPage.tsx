import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutAuthor from './components/AboutAuthor';

const AboutAuthorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <AboutAuthor />
      </div>
      <Footer />
    </div>
  );
};

export default AboutAuthorPage; 