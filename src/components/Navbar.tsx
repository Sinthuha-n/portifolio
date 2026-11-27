import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';
import { ThemeChoice } from '../context/ThemeContextDefinition';
import { Menu, X, ArrowUpRight, Sun, Moon, Laptop, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const { name, resumeUrl } = portfolioData.personal;

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  // Close theme dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setThemeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themeOptions: { value: ThemeChoice; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'system', label: 'System', icon: <Laptop className="h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-theme-border bg-theme-bg/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 lg:px-10">
        {/* Name / Logo */}
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

        {/* Desktop Navigation */}
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

          {/* Theme Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-link shadow-theme-sm transition-colors hover:border-theme-border-strong hover:text-theme-text focus-visible:outline-2"
              aria-label={`Theme selector: Current theme is ${theme}`}
              aria-expanded={themeDropdownOpen}
            >
              {theme === 'dark' ? (
                <Moon className="h-4 w-4" />
              ) : theme === 'light' ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Laptop className="h-4 w-4" />
              )}
            </button>

            {themeDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-36 rounded-xl border border-theme-border bg-theme-surface p-1.5 shadow-theme-lg z-50 animate-hero-1"
                role="menu"
              >
                {themeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setTheme(opt.value);
                      setThemeDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                      theme === opt.value
                        ? 'bg-gray-100 dark:bg-slate-800 text-purple-heading dark:text-purple-dark font-semibold'
                        : 'text-theme-text-muted hover:bg-gray-50 dark:hover:bg-slate-800/60 hover:text-theme-text'
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center gap-2">
                      {opt.icon}
                      {opt.label}
                    </span>
                    {theme === opt.value && <Check className="h-3.5 w-3.5" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => {
              if (theme === 'light') setTheme('dark');
              else if (theme === 'dark') setTheme('system');
              else setTheme('light');
            }}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-theme-border bg-theme-surface text-theme-link"
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? (
              <Moon className="h-4 w-4" />
            ) : theme === 'light' ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Laptop className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-theme-border bg-theme-surface p-2 text-theme-link hover:text-theme-text"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-theme-border bg-theme-surface px-6 py-4 md:hidden animate-hero-1">
          <nav className="flex flex-col space-y-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="rounded-lg px-3 py-2 text-base font-medium text-theme-text hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-purple-heading"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-theme-border flex items-center justify-between">
              <span className="text-xs font-medium text-theme-text-muted">Theme</span>
              <div className="flex rounded-lg border border-theme-border p-0.5 bg-theme-bg">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTheme(opt.value)}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                      theme === opt.value
                        ? 'bg-theme-surface text-purple-heading dark:text-purple-dark shadow-theme-sm font-semibold'
                        : 'text-theme-text-muted hover:text-theme-text'
                    }`}
                  >
                    {opt.icon}
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
