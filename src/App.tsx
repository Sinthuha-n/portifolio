import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ResumeModalProvider, useResumeModal } from './context/ResumeModalContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { SkillsAndCertifications } from './components/SkillsAndCertifications';
import { About } from './components/About';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PlanoraCaseStudyModal } from './components/PlanoraCaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { portfolioData } from './data/portfolioData';

export const AppContent: React.FC = () => {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const { isResumeOpen, closeResume } = useResumeModal();
  const planoraProject = portfolioData.projects.find((p) => p.id === 'planora');

  // Clear stale section hash on reload and ensure page starts at the hero without a jump
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const isReload =
      (navEntries.length > 0 && navEntries[0].type === 'reload') ||
      (window.performance && (window.performance as unknown as { navigation?: { type: number } }).navigation?.type === 1);

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-theme-bg font-sans text-theme-text selection:bg-theme-accent selection:text-white flex flex-col justify-between overflow-x-hidden transition-colors duration-200">
      <Navbar />
      <main className="flex-1 w-full pt-16">
        <Hero />
        <About />
        <FeaturedWork onOpenPlanoraCaseStudy={() => setCaseStudyOpen(true)} />
        <SkillsAndCertifications />
        <Writing />
        <Contact />
      </main>
      <Footer />

      {/* Planora Case Study Modal */}
      {planoraProject?.caseStudy && (
        <PlanoraCaseStudyModal
          isOpen={caseStudyOpen}
          onClose={() => setCaseStudyOpen(false)}
          caseStudy={planoraProject.caseStudy}
          githubUrl={planoraProject.githubUrl}
        />
      )}

      {/* Same-Page Résumé Modal with Inline PDF Embed & Fallback */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
        pdfUrl={portfolioData.personal.resumeUrl || '/documents/Sinthuha_Nadesan_SoftwareEngineering_Intern_CV.pdf'}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResumeModalProvider>
        <AppContent />
      </ResumeModalProvider>
    </ThemeProvider>
  );
};

export default App;
