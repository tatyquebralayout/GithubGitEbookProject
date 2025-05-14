// import React from 'react'; // Removido pois não é explicitamente usado com a nova transformação JSX
import Navbar from '../../components/layout/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Challenges from './components/Challenges';
import Benefits from './components/Benefits';
import Ebook from './components/Ebook';
import FAQ from './components/FAQ';
import SponsorsSection from './components/SponsorsSection';
import Footer from '../../components/layout/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <Challenges />
      <Benefits />
      <Ebook />
      <FAQ />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default LandingPage; 