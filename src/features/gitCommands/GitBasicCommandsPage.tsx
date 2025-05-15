import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import GitBasicCommands from './components/GitBasicCommands';

const GitBasicCommandsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        <GitBasicCommands />
      </div>
      <Footer />
    </div>
  );
};

export default GitBasicCommandsPage;
