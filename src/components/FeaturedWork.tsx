import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface FeaturedWorkProps {
  onOpenPlanoraCaseStudy: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenPlanoraCaseStudy }) => {
  const { projects } = portfolioData;

  const planoraProject = projects.find((p) => p.id === 'planora') || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== 'planora');

  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        {/* Section Header (aligned to exact left edge) */}
        <div className="text-left mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-theme-text-subtle">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark sm:text-4xl">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed max-w-2xl">
            Full-stack and mobile applications highlighting drag-and-drop state synchronization, robust backend APIs, and offline-first client architecture.
          </p>
        </div>

        {/* Lead Planora Feature + Two-Column Layout for CheckINN & Page-Bloom */}
        <div className="space-y-8">
          {/* 1. Wide Lead Feature for Planora */}
          {planoraProject && (
            <div className="w-full">
              <ProjectCard
                project={planoraProject}
                isWide={true}
                onOpenCaseStudy={onOpenPlanoraCaseStudy}
              />
            </div>
          )}

          {/* 2. Equally Sized Two-Column Desktop Grid for CheckINN and Page-Bloom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isWide={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
