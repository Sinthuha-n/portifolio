import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { name, heroHeadline, heroIntro, university, location, status } =
    portfolioData.personal;

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-border bg-violet-light/70 px-3.5 py-1.5 text-xs font-semibold text-violet-brand shadow-xs mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-brand opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-brand"></span>
            </span>
            <span>{status}</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl leading-[1.1] sm:leading-[1.12]">
            Hi, I’m <span className="text-violet-brand">{name}</span>.
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-medium text-ink-muted">
            {heroHeadline}
          </p>

          {/* Core Introduction */}
          <p className="mt-6 text-lg sm:text-xl text-ink leading-relaxed font-normal text-balance">
            {heroIntro}
          </p>

          {/* Context chips */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-ink-muted">
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <GraduationCap className="h-4 w-4 text-violet-brand shrink-0" />
              <span>{university}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <MapPin className="h-4 w-4 text-violet-brand shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 border border-border-subtle shadow-2xs">
              <Sparkles className="h-4 w-4 text-violet-brand shrink-0" />
              <span>Full-Stack & Mobile Development</span>
            </div>
          </div>

          {/* Call to action button */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={scrollToWork}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-violet-brand px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-violet-hover hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-brand"
            >
              <span>View my work</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-surface px-5 py-3.5 text-base font-medium text-ink transition-colors hover:border-violet-border hover:bg-surface-subtle"
            >
              About me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
