import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { GitBranch, CheckCircle2 } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  const { projects, cicd } = portfolioData;

  // Planora is the primary featured wide card
  const planoraProject = projects.find((p) => p.id === 'planora') || projects[0];
  // Secondary projects (CheckINN and Page-Bloom)
  const secondaryProjects = projects.filter((p) => p.id !== 'planora');

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-brand">
            Featured Projects
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Selected Engineering Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
            Hands-on applications demonstrating full-stack problem solving, drag-and-drop state synchronization, and offline-first client architecture.
          </p>
        </div>

        {/* Projects Hierarchy: One wide Planora card first, then CheckINN and Page-Bloom */}
        <div className="space-y-8">
          {/* 1. Large Wide Card for Planora */}
          {planoraProject && (
            <div className="w-full">
              <ProjectCard project={planoraProject} isWide={true} />
            </div>
          )}

          {/* 2. Side-by-side grid on desktop, stacked on mobile for CheckINN and Page-Bloom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isWide={false} />
            ))}
          </div>

          {/* 3. Conditional CI/CD workflow banner (kept out of published UI until verified in repo) */}
          {cicd?.configured && (
            <div className="mt-8 rounded-2xl border border-violet-border/70 bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-2.5 text-sm font-bold text-ink">
                <GitBranch className="h-4 w-4 text-violet-brand" />
                <span>Continuous Integration & Deployment</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted">
                {cicd.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cicd.checks.map((check) => (
                  <span
                    key={check}
                    className="inline-flex items-center gap-1 rounded-md bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted border border-border-subtle"
                  >
                    <CheckCircle2 className="h-3 w-3 text-violet-brand" />
                    <span>{check}</span>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
