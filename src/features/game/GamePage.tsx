import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Game from './components/Game';

const GamePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <Game />
      </div>
      <Footer />
    </div>
  );
};

export default GamePage; 