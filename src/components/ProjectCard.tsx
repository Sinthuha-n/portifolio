import React from 'react';
import { Project } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import {
  ExternalLink,
  Github,
  Kanban,
  Hotel,
  Palette,
  Sparkles,
  CheckCircle2,
  Database,
  Layers,
  GripVertical,
  RotateCcw,
  HardDriveDownload,
  BookOpen,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isWide?: boolean;
  onOpenCaseStudy?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isWide = false,
  onOpenCaseStudy,
}) => {
  const { ref, isInView } = useInView();

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== '');
  const hasImage = Boolean(project.imageUrl && project.imageUrl.trim() !== '');

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'planora':
        return <Kanban className="h-5 w-5 text-theme-accent" />;
      case 'checkinn':
        return <Hotel className="h-5 w-5 text-theme-accent" />;
      case 'page-bloom':
        return <Palette className="h-5 w-5 text-theme-accent" />;
      default:
        return <Layers className="h-5 w-5 text-theme-accent" />;
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <article
        className={`group relative flex flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-8 transition-all duration-300 hover:border-theme-border-strong hover:shadow-theme-xl hover:-translate-y-1 ${
          isWide
            ? 'w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:p-10'
            : 'h-full'
        }`}
      >
        {/* Text Details Side */}
        <div className={`flex flex-col ${isWide ? 'lg:col-span-7 justify-between' : 'h-full justify-between'}`}>
          <div>
            {/* Category badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-accent-light px-3 py-1 text-xs font-semibold text-theme-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-theme-accent"></span>
                {project.category}
              </span>
              {isWide && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-theme-accent-border bg-theme-surface px-3 py-1 text-xs font-semibold text-theme-accent shadow-theme-sm">
                  <Sparkles className="h-3.5 w-3.5 text-theme-accent" />
                  Lead Feature
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className={`font-extrabold tracking-tight text-theme-text ${isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {project.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-theme-text-muted">
              {project.subtitle}
            </p>

            {/* Role Highlight Callout */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-theme-surface-subtle px-3 py-1.5 text-xs sm:text-sm font-semibold text-theme-accent border border-theme-border">
              {getProjectIcon(project.id)}
              <span>{project.roleHighlight}</span>
            </div>

            {/* Main description */}
            <p className="mt-4 text-sm sm:text-base text-theme-text-muted leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Feature Highlights */}
            {project.featureHighlights && project.featureHighlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-theme-text-muted">
                {project.featureHighlights.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-theme-accent shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom Actions & Tech Tags */}
          <div className="mt-6 pt-4 border-t border-theme-border">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-theme-surface-subtle px-2.5 py-1 text-xs font-medium text-theme-text-muted border border-theme-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.caseStudy && onOpenCaseStudy && (
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-theme-accent px-4 py-2 text-xs font-semibold text-white shadow-theme-sm transition-all hover:bg-theme-accent-hover focus-visible:outline-2 focus-visible:outline-theme-accent"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Read Case Study</span>
                </button>
              )}

              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-theme-border bg-theme-surface px-3 py-2 text-xs font-semibold text-theme-text transition-colors hover:border-theme-border-strong hover:text-theme-accent"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>View Code</span>
                </a>
              )}

              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-theme-accent-border bg-theme-accent-light px-3 py-2 text-xs font-semibold text-theme-accent transition-colors hover:bg-theme-accent hover:text-white"
                  aria-label={`${project.title} live preview`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visual Graphic Mock Side */}
        {isWide ? (
          <div className="mt-6 lg:mt-0 lg:col-span-5 flex flex-col justify-center">
            {hasImage ? (
              <img
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                className="w-full rounded-xl object-cover shadow-theme-sm border border-theme-border"
              />
            ) : (
              /* Polished, high-fidelity Kanban UI preview */
              <div className="flex flex-col justify-between rounded-xl border border-theme-accent-border bg-gradient-to-br from-theme-accent-light/40 via-theme-surface to-theme-surface-subtle p-5 sm:p-6 shadow-theme-sm">
                <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-surface shadow-theme-sm border border-theme-accent-border">
                      <Kanban className="h-4 w-4 text-theme-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-theme-text">Planora Kanban Board</p>
                      <p className="text-[10px] text-theme-text-subtle">Sprint Backlog • Live Board • Timeline</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-theme-accent-light px-2.5 py-0.5 text-[10px] font-semibold text-theme-accent">
                    Active State
                  </span>
                </div>

                {/* Columns Simulation */}
                <div className="my-4 grid grid-cols-2 gap-2.5 text-xs">
                  {/* Column: Backlog */}
                  <div className="rounded-lg bg-theme-surface p-2.5 border border-theme-border shadow-theme-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-theme-text">Backlog</span>
                      <span className="rounded bg-theme-surface-subtle px-1.5 py-0.5 text-[10px] text-theme-text-subtle">3</span>
                    </div>
                    <div className="rounded bg-theme-surface-subtle p-2 border border-theme-border text-[11px] text-theme-text-muted">
                      Milestone Timeline Roadmap
                    </div>
                  </div>

                  {/* Column: In Progress (Drag target) */}
                  <div className="rounded-lg bg-theme-surface p-2.5 border border-theme-accent-border shadow-theme-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-theme-accent">In Progress</span>
                      <span className="rounded bg-theme-accent-light px-1.5 py-0.5 text-[10px] font-bold text-theme-accent">1</span>
                    </div>
                    <div className="rounded bg-theme-accent-light/40 p-2 border border-theme-accent-border text-[11px] font-medium text-theme-text shadow-theme-sm">
                      <div className="flex items-center justify-between">
                        <span>Drag & Drop Kanban</span>
                        <GripVertical className="h-3 w-3 text-theme-accent shrink-0" />
                      </div>
                      <div className="mt-1 text-[9px] text-theme-accent font-semibold">
                        ● My Lead Module
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-theme-border flex items-center justify-between text-[11px] text-theme-text-muted">
                  <span className="font-medium text-theme-text">Optimistic State Updates</span>
                  <span className="text-[10px] text-theme-text-subtle italic">Screenshots ready for drop-in</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Secondary Cards Visual Representation */
          <div className="mt-6">
            {hasImage ? (
              <img
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                className="w-full rounded-xl object-cover shadow-theme-sm border border-theme-border"
              />
            ) : project.id === 'checkinn' ? (
              /* CheckINN room discovery & booking simulation */
              <div className="rounded-xl border border-theme-border bg-theme-surface-subtle p-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4 text-theme-accent" />
                    <span className="text-xs font-bold text-theme-text">CheckINN Room Discovery</span>
                  </div>
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    200 OK • Available
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-[11px] font-mono text-theme-text-muted">
                  <div className="flex items-center justify-between">
                    <span>POST /api/v1/bookings</span>
                    <span className="text-theme-accent font-semibold">Spring Boot</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-theme-text-subtle">
                    <span className="flex items-center gap-1">
                      <Database className="h-3 w-3 text-theme-accent" /> PostgreSQL ACID Model
                    </span>
                    <span>React TS UI</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Page-Bloom mobile/tablet coloring preview */
              <div className="rounded-xl border border-theme-border bg-theme-surface-subtle p-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-theme-accent" />
                    <span className="text-xs font-bold text-theme-text">Page-Bloom Mobile Engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-theme-accent">
                    <HardDriveDownload className="h-3 w-3" />
                    <span>SQLite Autosave</span>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-theme-text-muted">
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <RotateCcw className="h-3 w-3 text-theme-accent" /> Undo/Redo Action Stack
                  </span>
                  <span className="rounded bg-theme-surface px-2 py-0.5 text-[10px] font-medium border border-theme-border">
                    React Native & Expo
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </div>
  );
};
