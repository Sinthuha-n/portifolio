import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, GraduationCap, MapPin, Sparkles, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  const {
    name,
    heroHeadline,
    heroIntro,
    targetRoles,
    university,
    location,
    status,
    github,
    linkedin,
    email,
    resumeUrl,
    portrait,
    portraitAlt,
  } = portfolioData.personal;

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-theme-bg py-12 sm:py-16 lg:py-20 border-b border-theme-border">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Introduction & Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status indicator */}
            <div className="animate-hero-1 mb-4 inline-flex self-start items-center gap-2 rounded-full border border-theme-border bg-theme-surface px-3 py-1 text-xs font-medium text-theme-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600"></span>
              </span>
              <span>{status}</span>
            </div>

            {/* H1 Name in Purple */}
            <h1 className="animate-hero-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark leading-[1.08] sm:leading-[1.12]">
              {name}
            </h1>

            {/* University affiliation subtitle */}
            <p className="animate-hero-2 mt-2 text-base sm:text-lg font-medium text-theme-text-muted">
              {heroHeadline}
            </p>

            {/* Core introduction */}
            <p className="animate-hero-3 mt-4 text-lg sm:text-xl text-theme-text leading-relaxed font-normal">
              {heroIntro}
            </p>

            {/* Internship positioning callout */}
            <div className="animate-hero-3 mt-4 inline-flex items-center gap-2.5 rounded-xl border border-theme-border bg-theme-surface p-3 text-xs sm:text-sm font-medium text-theme-text">
              <Sparkles className="h-4 w-4 text-theme-text-muted shrink-0" />
              <span>{targetRoles}</span>
            </div>

            {/* Meta tags */}
            <div className="animate-hero-3 mt-4 flex flex-wrap items-center gap-2.5 text-xs text-theme-text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-theme-border bg-theme-surface px-2.5 py-1">
                <GraduationCap className="h-3.5 w-3.5 text-theme-text-muted" />
                {university}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-theme-border bg-theme-surface px-2.5 py-1">
                <MapPin className="h-3.5 w-3.5 text-theme-text-muted" />
                {location}
              </span>
            </div>

            {/* Primary & Secondary Action Buttons (Stacked on mobile before portrait) */}
            <div className="animate-hero-4 mt-7 flex flex-wrap items-center gap-3.5">
              {/* Primary button: Near-black with white text */}
              <a
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-6 py-3.5 text-sm sm:text-base font-semibold transition-all hover:opacity-90 shadow-theme-sm focus-visible:outline-2"
              >
                <span>View selected work</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              {/* Resume download button if available */}
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text px-5 py-3.5 text-sm sm:text-base font-semibold transition-all hover:bg-gray-50 dark:hover:bg-slate-800 shadow-theme-sm focus-visible:outline-2"
                >
                  <FileText className="h-4 w-4 text-theme-text-muted" />
                  <span>Résumé</span>
                </a>
              )}

              {/* Secondary buttons: White with gray border in light mode */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text transition-all hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
                aria-label="Sinthuha Nadesan on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text transition-all hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
                aria-label="Sinthuha Nadesan on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text transition-all hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
                aria-label="Email Sinthuha Nadesan"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait (Stacks after introduction & buttons on mobile) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="animate-hero-portrait w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]">
              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-theme-border bg-theme-surface shadow-theme-md">
                <img
                  src={portrait}
                  alt={portraitAlt}
                  width={380}
                  height={380}
                  loading="eager"
                  className="h-full w-full object-cover object-top filter-none"
                />
              </div>

              <div className="mt-2.5 text-center">
                <p className="text-xs text-theme-text-subtle">
                  Sinthuha Nadesan • University of Moratuwa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
