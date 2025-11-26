import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About, HowItWorks, ServiceArea } from './components/InfoSections';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <HowItWorks />
        <ServiceArea />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;