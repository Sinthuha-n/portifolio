import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, GraduationCap, MapPin, Briefcase, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const { name, heroHeadline, heroIntro, targetRoles, university, location, status } =
    portfolioData.personal;

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* 1. Status badge with subtle pulse */}
          <div className="animate-hero-1 mb-6 inline-flex items-center gap-2 rounded-full border border-violet-border bg-violet-light/80 px-3.5 py-1.5 text-xs font-semibold text-violet-brand shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-brand opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-brand"></span>
            </span>
            <span>{status}</span>
          </div>

          {/* 2. Hero Name and Identity */}
          <h1 className="animate-hero-2 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.08] sm:leading-[1.12]">
            Hi, I’m <span className="text-violet-brand">{name}</span>.
          </h1>

          {/* 3. University affiliation & Core Intro */}
          <div className="animate-hero-3 mt-4 space-y-2">
            <p className="text-lg sm:text-xl font-medium text-ink-muted">
              {heroHeadline}
            </p>
            <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              {heroIntro}
            </p>
          </div>

          {/* 4. Clear Internship Positioning Highlight */}
          <div className="animate-hero-4 mt-6 inline-flex items-center gap-2.5 rounded-xl border border-violet-border/80 bg-surface px-4 py-3 text-sm font-medium text-ink shadow-xs">
            <Briefcase className="h-4 w-4 text-violet-brand shrink-0" />
            <span>{targetRoles}</span>
          </div>

          {/* 5. Context tags */}
          <div className="animate-hero-4 mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-ink-muted">
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <GraduationCap className="h-4 w-4 text-violet-brand shrink-0" />
              <span>{university}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <MapPin className="h-4 w-4 text-violet-brand shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <Terminal className="h-4 w-4 text-violet-brand shrink-0" />
              <span>Full-Stack & Mobile Engineering</span>
            </div>
          </div>

          {/* 6. Call to Action Button Group */}
          <div className="animate-hero-5 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={scrollToWork}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-violet-brand px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-violet-hover hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-brand"
            >
              <span>View my work</span>
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-surface px-5 py-3.5 text-base font-medium text-ink transition-all duration-200 hover:border-violet-border hover:bg-surface-subtle hover:-translate-y-0.5"
            >
              About me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
