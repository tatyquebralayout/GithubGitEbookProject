import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Challenges from './components/Challenges';
import Benefits from './components/Benefits';
import Ebook from './components/Ebook';
import FAQ from './components/FAQ';
import SponsorsSection from './components/SponsorsSection';

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <Features />
    <Challenges />
    <Benefits />
    <Ebook />
    <FAQ />
    <SponsorsSection />
  </>
);

export default LandingPage;
