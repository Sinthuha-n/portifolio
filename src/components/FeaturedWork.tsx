import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export const FeaturedWork: React.FC = () => {
  const { projects } = portfolioData;

  // Planora is the primary featured card
  const planoraProject = projects.find((p) => p.id === 'planora') || projects[0];
  // Secondary projects (CheckINN and Page-Bloom)
  const secondaryProjects = projects.filter((p) => p.id !== 'planora');

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-brand">
            Portfolio
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Featured Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-ink-muted">
            Selected engineering projects demonstrating full-stack problem solving, complex UI state, and performant application architecture.
          </p>
        </div>

        {/* Projects Layout: Wide Planora card first, then 2 smaller cards side by side on desktop */}
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
        </div>
      </div>
    </section>
  );
};
