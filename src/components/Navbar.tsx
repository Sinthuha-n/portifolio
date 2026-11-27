import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import { Menu, X, ArrowUpRight, Sun, Moon, Send } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { name, resumeUrl } = portfolioData.personal;

  // Nav links order: About, Work, Skills, Writing, Contact
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  // Mobile drawer links: remaining links (Contact is already pinned in mobile top bar)
  const mobileDrawerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
  ];

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-theme-border bg-theme-bg/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 lg:px-10">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-bold text-purple-heading dark:text-purple-dark transition-colors"
          aria-label={`${name} - Return to top`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] dark:bg-white text-white dark:text-[#111827] text-xs font-bold shadow-theme-sm transition-transform group-hover:scale-105">
            SN
          </span>
          <span className="text-base tracking-tight text-purple-heading dark:text-purple-dark">
            {name}
          </span>
        </a>

        {/* Desktop Navigation (>= 768px) */}
        <div className="hidden items-center gap-7 md:flex">
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-theme-link transition-colors hover:text-purple-heading dark:hover:text-purple-dark focus-visible:outline-2"
              >
                {link.label}
              </a>
            ))}

            {resumeUrl && resumeUrl.trim() !== '' && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-theme-border bg-theme-surface px-3 py-1 text-xs font-semibold text-theme-text transition-colors hover:border-gray-400"
              >
                <span>Résumé</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </nav>

          {/* Clearly labelled Light / Dark toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-xl border border-theme-border bg-theme-surface px-3 py-1.5 text-xs font-semibold text-theme-text shadow-theme-sm transition-colors hover:border-theme-border-strong hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="h-3.5 w-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="h-3.5 w-3.5 text-slate-700" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Top Bar Controls (< 768px): Keep Contact & Theme Toggle visible */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Pinned Contact link directly accessible from top bar */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="inline-flex items-center gap-1 rounded-lg bg-theme-btn-primary-bg text-theme-btn-primary-text px-2.5 py-1.5 text-xs font-semibold shadow-theme-sm focus-visible:outline-2"
          >
            <Send className="h-3 w-3" />
            <span>Contact</span>
          </a>

          {/* Pinned Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-text transition-colors hover:bg-gray-50 dark:hover:bg-slate-800"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>

          {/* Mobile menu toggle for remaining links */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-theme-border bg-theme-surface p-1.5 text-theme-link hover:text-theme-text focus-visible:outline-2"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-theme-border bg-theme-surface px-6 py-4 md:hidden animate-hero-1 shadow-theme-md">
          <nav className="flex flex-col space-y-2.5 text-left" aria-label="Mobile navigation">
            {mobileDrawerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-theme-text hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-purple-heading dark:hover:text-purple-dark transition-colors"
              >
                {link.label}
              </a>
            ))}

            {resumeUrl && resumeUrl.trim() !== '' && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-theme-text hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span>Résumé (PDF)</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-theme-text-muted" />
              </a>
            )}

            <div className="pt-2 border-t border-theme-border flex items-center justify-between">
              <span className="text-xs font-medium text-theme-text-muted">Appearance</span>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 rounded-lg border border-theme-border bg-theme-bg px-3 py-1.5 text-xs font-semibold text-theme-text"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="h-3.5 w-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5 text-slate-700" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
