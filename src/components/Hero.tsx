import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, GraduationCap, MapPin, Sparkles } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Name, Intro, Positioning, Actions */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Status pill */}
            <div className="animate-hero-1 mb-5 inline-flex self-start items-center gap-2 rounded-full border border-theme-accent-border bg-theme-accent-light px-3.5 py-1 text-xs font-semibold text-theme-accent shadow-theme-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-theme-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-theme-accent"></span>
              </span>
              <span>{status}</span>
            </div>

            {/* H1 Name */}
            <h1 className="animate-hero-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-theme-text leading-[1.08] sm:leading-[1.12]">
              {name}
            </h1>

            {/* University affiliation & role */}
            <p className="animate-hero-2 mt-3 text-base sm:text-lg font-medium text-theme-accent">
              {heroHeadline}
            </p>

            {/* Core introduction (comfortable reading width) */}
            <p className="animate-hero-3 mt-4 max-w-prose text-lg sm:text-xl text-theme-text leading-relaxed font-normal">
              {heroIntro}
            </p>

            {/* Clear internship positioning */}
            <div className="animate-hero-3 mt-5 inline-flex items-center gap-2.5 rounded-xl border border-theme-border bg-theme-surface p-3 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium text-theme-text shadow-theme-sm">
              <Sparkles className="h-4 w-4 text-theme-accent shrink-0" />
              <span>{targetRoles}</span>
            </div>

            {/* Meta chips */}
            <div className="animate-hero-3 mt-5 flex flex-wrap items-center gap-2.5 text-xs text-theme-text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-theme-border bg-theme-surface-subtle px-2.5 py-1">
                <GraduationCap className="h-3.5 w-3.5 text-theme-accent" />
                {university}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-theme-border bg-theme-surface-subtle px-2.5 py-1">
                <MapPin className="h-3.5 w-3.5 text-theme-accent" />
                {location}
              </span>
            </div>

            {/* Primary Action & Social Links */}
            <div className="animate-hero-4 mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={scrollToWork}
                className="group inline-flex items-center gap-2 rounded-xl bg-theme-accent px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-theme-md transition-all duration-200 hover:bg-theme-accent-hover hover:shadow-theme-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent"
              >
                <span>View selected work</span>
                <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </a>

              {/* GitHub Link */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-theme-border bg-theme-surface text-theme-text-muted shadow-theme-sm transition-all duration-200 hover:border-theme-border-strong hover:text-theme-text hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-theme-accent"
                aria-label="Sinthuha Nadesan on GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-theme-border bg-theme-surface text-theme-text-muted shadow-theme-sm transition-all duration-200 hover:border-theme-border-strong hover:text-theme-text hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-theme-accent"
                aria-label="Sinthuha Nadesan on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${email}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-theme-border bg-theme-surface text-theme-text-muted shadow-theme-sm transition-all duration-200 hover:border-theme-border-strong hover:text-theme-text hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-theme-accent"
                aria-label="Email Sinthuha Nadesan"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portrait in softly rounded, near-square frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="animate-hero-portrait relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Subtle ambient decorative backplate */}
              <div
                className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-theme-accent/20 to-transparent blur-md -z-10"
                aria-hidden="true"
              ></div>

              <div className="aspect-square w-full overflow-hidden rounded-2xl border border-theme-border bg-theme-surface shadow-theme-lg">
                <img
                  src={portrait}
                  alt={portraitAlt}
                  width={400}
                  height={400}
                  loading="eager"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Subtle caption pill */}
              <div className="mt-3 text-center">
                <p className="text-xs text-theme-text-subtle font-medium">
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
