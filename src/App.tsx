import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { About } from './components/About';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlanoraCaseStudyModal } from './components/PlanoraCaseStudyModal';
import { portfolioData } from './data/portfolioData';

export const AppContent: React.FC = () => {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const planoraProject = portfolioData.projects.find((p) => p.id === 'planora');

  return (
    <div className="min-h-screen bg-theme-bg font-sans text-theme-text selection:bg-theme-accent selection:text-white flex flex-col justify-between overflow-x-hidden transition-colors duration-200">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <FeaturedWork onOpenPlanoraCaseStudy={() => setCaseStudyOpen(true)} />
        <About />
        <Writing />
        <Contact />
      </main>
      <Footer />

      {planoraProject?.caseStudy && (
        <PlanoraCaseStudyModal
          isOpen={caseStudyOpen}
          onClose={() => setCaseStudyOpen(false)}
          caseStudy={planoraProject.caseStudy}
          githubUrl={planoraProject.githubUrl}
        />
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
