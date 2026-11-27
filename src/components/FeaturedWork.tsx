import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { GitBranch, CheckCircle2 } from 'lucide-react';

interface FeaturedWorkProps {
  onOpenPlanoraCaseStudy: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenPlanoraCaseStudy }) => {
  const { projects, cicd } = portfolioData;

  const planoraProject = projects.find((p) => p.id === 'planora') || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== 'planora');

  return (
    <section id="work" className="py-16 sm:py-20 border-t border-theme-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
            Featured Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed">
            Production-grade systems highlighting full-stack state management, robust API architecture, and offline-capable mobile development.
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

          {/* 2. Two-Column Desktop Grid for CheckINN and Page-Bloom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isWide={false} />
            ))}
          </div>

          {/* 3. Conditional CI/CD Entry (Kept out of UI until verified) */}
          {cicd?.configured && (
            <div className="mt-8 rounded-2xl border border-theme-accent-border bg-theme-surface p-6 shadow-theme-sm">
              <div className="flex items-center gap-2.5 text-sm font-bold text-theme-text">
                <GitBranch className="h-4 w-4 text-theme-accent" />
                <span>Build & Delivery Pipeline</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-theme-text-muted">
                {cicd.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cicd.checks.map((check) => (
                  <span
                    key={check}
                    className="inline-flex items-center gap-1 rounded-md bg-theme-surface-subtle px-2.5 py-1 text-xs font-medium text-theme-text-muted border border-theme-border"
                  >
                    <CheckCircle2 className="h-3 w-3 text-theme-accent" />
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
