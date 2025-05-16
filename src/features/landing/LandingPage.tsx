import React from 'react';
import AppLayout from '../../components/layout/AppLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import Challenges from './components/Challenges';
import Benefits from './components/Benefits';
import Ebook from './components/Ebook';
import FAQ from './components/FAQ';
import SponsorsSection from './components/SponsorsSection';

const LandingPage: React.FC = () => (
  <AppLayout>
    <Hero />
    <Features />
    <Challenges />
    <Benefits />
    <Ebook />
    <FAQ />
    <SponsorsSection />
  </AppLayout>
);

export default LandingPage;
