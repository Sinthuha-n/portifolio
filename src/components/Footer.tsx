import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const { name, university, github, linkedin, medium } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-bg py-10 border-t border-theme-border transition-colors duration-200">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-5 px-6 lg:px-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-theme-text">{name}</p>
          <p className="mt-0.5 text-xs text-theme-text-muted">
            BSc (Hons) IT Undergraduate • {university}
          </p>
        </div>

        {/* Footer Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-muted hover:text-theme-text transition-colors p-1"
              aria-label="GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-muted hover:text-theme-text transition-colors p-1"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={medium}
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-text-muted hover:text-theme-text transition-colors p-1"
              aria-label="Medium profile"
            >
              <BookOpen className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-theme-text-subtle">
            © {currentYear} Sinthuha Nadesan
          </p>

          <a
            href="#"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 rounded-lg border border-theme-border bg-theme-surface px-3 py-1.5 text-xs font-medium text-theme-link transition-colors hover:border-theme-border-strong hover:text-theme-text focus-visible:outline-2"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};
