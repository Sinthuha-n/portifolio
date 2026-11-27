import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { name, resumeUrl } = portfolioData.personal;

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-canvas/85 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-semibold text-ink transition-colors hover:text-violet-brand"
          aria-label={`${name} - Return to top`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-brand text-xs font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            SN
          </span>
          <span className="text-base tracking-tight font-bold">{name}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-violet-brand"
            >
              {link.label}
            </a>
          ))}

          {resumeUrl && resumeUrl.trim() !== '' && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-violet-brand/30 bg-violet-light px-3.5 py-1.5 text-xs font-semibold text-violet-brand transition-colors hover:bg-violet-brand hover:text-white"
            >
              Résumé
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-ink-muted hover:bg-surface hover:text-ink focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-border-subtle bg-surface px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="rounded-md px-3 py-2 text-base font-medium text-ink hover:bg-surface-subtle hover:text-violet-brand"
              >
                {link.label}
              </a>
            ))}
            {resumeUrl && resumeUrl.trim() !== '' && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-violet-brand px-4 py-2 text-sm font-semibold text-white"
              >
                Résumé
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
