import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { About } from './components/About';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink selection:bg-violet-brand selection:text-white flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <FeaturedWork />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
