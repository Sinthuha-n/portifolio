import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { name, university } = portfolioData.personal;
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-theme-bg py-10 transition-colors duration-200">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-5 px-6 lg:px-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-theme-text">{name}</p>
          <p className="mt-0.5 text-xs text-theme-text-muted">
            IT Undergraduate • {university}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-theme-text-subtle">
            © {currentYear} Sinthuha Nadesan. All rights reserved.
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
