import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { GitBranch, CheckCircle2, ArrowUpRight, Zap } from 'lucide-react';

interface FeaturedWorkProps {
  onOpenPlanoraCaseStudy: () => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenPlanoraCaseStudy }) => {
  const { projects, cicd } = portfolioData;

  const planoraProject = projects.find((p) => p.id === 'planora') || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== 'planora');

  return (
    <section id="work" className="py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
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

          {/* 3. Verified DevOps & CI/CD Entry */}
          {cicd?.configured && (
            <div className="mt-8 rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-7 shadow-theme-sm text-left">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
                    <GitBranch className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-purple-heading dark:text-purple-dark">
                      Automated CI/CD Delivery Pipelines
                    </h3>
                    <p className="text-xs text-theme-text-muted">
                      Configured across CheckINN and Page-Bloom repositories
                    </p>
                  </div>
                </div>

                {cicd.workflowUrl && (
                  <a
                    href={cicd.workflowUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-theme-border bg-theme-bg px-3 py-1.5 text-xs font-semibold text-theme-link transition-colors hover:border-gray-400 hover:text-theme-text"
                  >
                    <span>Read CI/CD Article</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>

              <p className="mt-3 text-xs sm:text-sm text-theme-text leading-relaxed">
                {cicd.summary}
              </p>

              {cicd.trigger && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-bg px-3 py-1.5 text-xs font-medium text-theme-text-muted">
                  <Zap className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  <span>
                    <strong className="text-theme-text font-semibold">Trigger:</strong> {cicd.trigger}
                  </span>
                </div>
              )}

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cicd.checks.map((check) => (
                  <div
                    key={check}
                    className="flex items-center gap-2 rounded-lg border border-theme-border bg-theme-bg px-3 py-2 text-xs font-medium text-theme-text-muted"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{check}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
