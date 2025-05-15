import React, { useEffect } from 'react';
import Demo from './components/Demo';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const DemoPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <Demo />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
