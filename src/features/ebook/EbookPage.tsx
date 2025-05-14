import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import EbookContent from './components/EbookContent';

const EbookPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <EbookContent />
      </div>
      <Footer />
    </div>
  );
};

export default EbookPage; 