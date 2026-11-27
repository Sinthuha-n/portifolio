import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface FeaturedWorkProps {
  onOpenPlanoraCaseStudy: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenPlanoraCaseStudy }) => {
  const { projects } = portfolioData;

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

        {/* All Projects in Full-Width Horizontal Row Type Layout */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <div key={project.id} id={`project-${project.id}`} className="w-full scroll-mt-24">
              <ProjectCard
                project={project}
                isWide={true}
                onOpenCaseStudy={project.id === 'planora' ? onOpenPlanoraCaseStudy : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
