import React from 'react';
import { Project } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import {
  ExternalLink,
  Github,
  Kanban,
  Hotel,
  Palette,
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
        return <Kanban className="h-4 w-4 text-theme-text" />;
      case 'checkinn':
        return <Hotel className="h-4 w-4 text-theme-text" />;
      case 'page-bloom':
        return <Palette className="h-4 w-4 text-theme-text" />;
      default:
        return <Layers className="h-4 w-4 text-theme-text" />;
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-item h-full ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <article
        className={`group relative flex flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-8 transition-all duration-200 hover:border-theme-border-strong hover:shadow-theme-md ${
          isWide
            ? 'w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:p-9'
            : 'h-full'
        }`}
      >
        {/* Top / Details Side */}
        <div className={`flex flex-col ${isWide ? 'lg:col-span-7 justify-between' : 'h-full justify-between'}`}>
          <div>
            {/* Category tag */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-theme-border bg-theme-bg px-2.5 py-0.5 text-xs font-medium text-theme-text-muted">
                {project.category}
              </span>
              {isWide && (
                <span className="inline-flex items-center gap-1 rounded-full border border-theme-border bg-theme-surface px-2.5 py-0.5 text-xs font-semibold text-theme-text">
                  Lead Feature
                </span>
              )}
            </div>

            {/* Title in Purple */}
            <h3 className={`font-extrabold tracking-tight text-purple-heading dark:text-purple-dark ${isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {project.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-1 text-xs sm:text-sm font-medium text-theme-text-muted">
              {project.subtitle}
            </p>

            {/* Role Highlight Callout */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-theme-border bg-theme-bg px-3 py-1.5 text-xs sm:text-sm font-medium text-theme-text">
              {getProjectIcon(project.id)}
              <span>{project.roleHighlight}</span>
            </div>

            {/* Main description */}
            <p className="mt-4 text-sm sm:text-base text-theme-text leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Feature Highlights */}
            {project.featureHighlights && project.featureHighlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-theme-text-muted">
                {project.featureHighlights.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-theme-text-muted shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom Actions & Tech Stack (Aligned at bottom) */}
          <div className="mt-6 pt-5 border-t border-theme-border">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-theme-border bg-theme-bg px-2.5 py-1 text-xs font-medium text-theme-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: Near-black primary button, white secondary buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.caseStudy && onOpenCaseStudy && (
                <button
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-4 py-2.5 text-xs font-semibold shadow-theme-sm transition-all hover:opacity-90 focus-visible:outline-2"
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text px-3.5 py-2 text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text px-3.5 py-2 text-xs font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        {isWide ? (
          <div className="mt-6 lg:mt-0 lg:col-span-5 flex flex-col justify-center">
            {hasImage ? (
              <div className="overflow-hidden rounded-xl border border-theme-border bg-theme-bg shadow-theme-sm">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full max-h-[380px] object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ) : (
              /* Clean, restrained Kanban UI preview (no gradients, no purple shadows) */
              <div className="flex flex-col justify-between rounded-xl border border-theme-border bg-theme-bg p-5 shadow-theme-sm">
                <div className="flex items-center justify-between pb-3 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-theme-border bg-theme-surface">
                      <Kanban className="h-3.5 w-3.5 text-theme-text" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-theme-text">Planora Workspace</p>
                      <p className="text-[10px] text-theme-text-muted">Kanban • Backlog • Timeline</p>
                    </div>
                  </div>
                  <span className="rounded bg-theme-surface border border-theme-border px-2 py-0.5 text-[10px] font-medium text-theme-text-muted">
                    Interactive
                  </span>
                </div>

                {/* Columns Simulation */}
                <div className="my-4 grid grid-cols-2 gap-2.5 text-xs">
                  <div className="rounded-lg border border-theme-border bg-theme-surface p-2.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-theme-text">Backlog</span>
                      <span className="rounded bg-theme-bg px-1.5 py-0.5 text-[10px] text-theme-text-muted">3</span>
                    </div>
                    <div className="rounded border border-theme-border bg-theme-bg p-2 text-[11px] text-theme-text-muted">
                      Milestone Timeline
                    </div>
                  </div>

                  <div className="rounded-lg border border-theme-border-strong bg-theme-surface p-2.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-theme-text">In Progress</span>
                      <span className="rounded bg-theme-bg px-1.5 py-0.5 text-[10px] font-bold text-theme-text">1</span>
                    </div>
                    <div className="rounded border border-theme-border bg-theme-bg p-2 text-[11px] font-medium text-theme-text">
                      <div className="flex items-center justify-between">
                        <span>Drag & Drop Board</span>
                        <GripVertical className="h-3 w-3 text-theme-text-muted shrink-0" />
                      </div>
                      <div className="mt-1 text-[9px] text-theme-text-muted">
                        ● My Lead Module
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-theme-border flex items-center justify-between text-[11px] text-theme-text-muted">
                  <span>Optimistic State Synchronization</span>
                  <span className="text-[10px] italic">Verified notes</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Secondary Cards Visual Representation */
          <div className="mt-6">
            {hasImage ? (
              <div className="overflow-hidden rounded-xl border border-theme-border bg-theme-bg shadow-theme-sm">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="h-48 sm:h-52 w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ) : project.id === 'checkinn' ? (
              <div className="rounded-xl border border-theme-border bg-theme-bg p-4">
                <div className="flex items-center justify-between pb-2 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4 text-theme-text" />
                    <span className="text-xs font-bold text-theme-text">CheckINN Room Discovery</span>
                  </div>
                  <span className="rounded bg-theme-surface border border-theme-border px-2 py-0.5 text-[10px] font-medium text-theme-text">
                    200 OK
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-[11px] font-mono text-theme-text-muted">
                  <div className="flex items-center justify-between">
                    <span>POST /api/v1/bookings</span>
                    <span className="text-theme-text font-semibold">Spring Boot</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-theme-text-subtle">
                    <span className="flex items-center gap-1">
                      <Database className="h-3 w-3 text-theme-text-muted" /> PostgreSQL ACID Model
                    </span>
                    <span>React UI</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-theme-border bg-theme-bg p-4">
                <div className="flex items-center justify-between pb-2 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-theme-text" />
                    <span className="text-xs font-bold text-theme-text">Page-Bloom Mobile Engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-medium text-theme-text">
                    <HardDriveDownload className="h-3 w-3" />
                    <span>SQLite Autosave</span>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-theme-text-muted">
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <RotateCcw className="h-3 w-3 text-theme-text-muted" /> Undo/Redo Action Stack
                  </span>
                  <span className="rounded bg-theme-surface border border-theme-border px-2 py-0.5 text-[10px] font-medium">
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
