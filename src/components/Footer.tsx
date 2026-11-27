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
    <footer className="border-t border-border-subtle bg-canvas py-10 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="mt-0.5 text-xs text-ink-muted">
            IT Undergraduate • {university}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-ink-subtle">
            © {currentYear} Sinthuha Nadesan. All rights reserved.
          </p>

          <a
            href="#"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-violet-border hover:text-violet-brand"
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
