import React from 'react';
import { Project } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import {
  ExternalLink,
  Github,
  Kanban,
  Hotel,
  Palette,
  Users,
  User,
  Database,
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

  return (
    <div
      ref={ref}
      className={`reveal-item h-full ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <article
        className={`group relative flex flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-5 sm:p-7 transition-all duration-200 hover:border-theme-border-strong hover:shadow-theme-md ${
          isWide
            ? 'w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:p-8'
            : 'h-full'
        }`}
      >
        {/* Details Section */}
        <div className={`flex flex-col ${isWide ? 'lg:col-span-7 justify-between' : 'h-full justify-between'}`}>
          <div>
            {/* Top row: Badges & Repo link */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-theme-border bg-theme-bg px-2.5 py-0.5 text-xs font-semibold text-theme-text">
                  {project.isTeamProject ? (
                    <>
                      <Users className="h-3 w-3 text-purple-heading dark:text-purple-dark" />
                      <span>Team project</span>
                    </>
                  ) : (
                    <>
                      <User className="h-3 w-3 text-theme-text-muted" />
                      <span>Personal project</span>
                    </>
                  )}
                </span>

                <span className="inline-flex items-center rounded-full border border-theme-border bg-theme-surface px-2.5 py-0.5 text-xs font-medium text-theme-text-muted">
                  {project.category}
                </span>

                {isWide && (
                  <span className="inline-flex items-center rounded-full border border-purple-200 dark:border-purple-900 bg-purple-50 dark:bg-purple-950/40 px-2.5 py-0.5 text-xs font-semibold text-purple-heading dark:text-purple-dark">
                    Lead Feature
                  </span>
                )}
              </div>

              {/* Real repo link beside title/header */}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-bg px-3 py-1 text-xs font-semibold text-theme-link transition-all hover:border-gray-400 hover:text-theme-text shadow-theme-sm ${
                    isInView ? 'animate-repo-pulse' : ''
                  }`}
                  aria-label={`${project.title} ${project.repoLabel || 'Repository'}`}
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>{project.repoLabel || 'Repository'}</span>
                  <ExternalLink className="h-3 w-3 text-theme-text-muted" />
                </a>
              )}
            </div>

            {/* Title in Purple */}
            <h3 className={`font-extrabold tracking-tight text-purple-heading dark:text-purple-dark ${isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {project.title}
            </h3>

            {/* One-Sentence Summary */}
            <p className="mt-2 text-sm sm:text-base text-theme-text leading-relaxed font-normal">
              {project.oneLiner || project.description}
            </p>

            {/* Scannable "My contribution" line */}
            <div className="mt-3.5 rounded-xl border border-theme-border bg-theme-bg/60 p-3 text-xs sm:text-sm text-theme-text">
              <div className="flex items-start gap-2">
                <span className="font-bold text-purple-heading dark:text-purple-dark shrink-0">
                  My contribution:
                </span>
                <span className="font-medium text-theme-text leading-relaxed">
                  {project.myContribution || project.roleHighlight}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Actions & Tech Stack */}
          <div className="mt-5 pt-4 border-t border-theme-border">
            <div className="flex flex-wrap gap-1.5 mb-3.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-theme-border bg-theme-bg px-2.5 py-0.5 text-xs font-medium text-theme-text-muted"
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
                  className="inline-flex items-center gap-1.5 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-4 py-2 text-xs font-semibold shadow-theme-sm transition-all hover:opacity-90 focus-visible:outline-2"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Read Case Study</span>
                </button>
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

        {/* Compact Visual Graphic Representation */}
        {isWide ? (
          <div className="mt-5 lg:mt-0 lg:col-span-5 flex flex-col justify-center">
            {hasImage ? (
              <div className="overflow-hidden rounded-xl border border-theme-border bg-theme-bg shadow-theme-sm">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full max-h-[240px] sm:max-h-[260px] object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex flex-col justify-between rounded-xl border border-theme-border bg-theme-bg p-4 shadow-theme-sm">
                <div className="flex items-center justify-between pb-2.5 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-theme-border bg-theme-surface">
                      <Kanban className="h-3 w-3 text-theme-text" />
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

                <div className="my-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg border border-theme-border bg-theme-surface p-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-[10px] text-theme-text">Backlog</span>
                      <span className="rounded bg-theme-bg px-1 py-0.5 text-[9px] text-theme-text-muted">3</span>
                    </div>
                    <div className="rounded border border-theme-border bg-theme-bg p-1.5 text-[10px] text-theme-text-muted">
                      Milestone Timeline
                    </div>
                  </div>

                  <div className="rounded-lg border border-theme-border-strong bg-theme-surface p-2">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-[10px] text-theme-text">In Progress</span>
                      <span className="rounded bg-theme-bg px-1 py-0.5 text-[9px] font-bold text-theme-text">1</span>
                    </div>
                    <div className="rounded border border-theme-border bg-theme-bg p-1.5 text-[10px] font-medium text-theme-text">
                      <div className="flex items-center justify-between">
                        <span>Drag & Drop Board</span>
                        <GripVertical className="h-2.5 w-2.5 text-theme-text-muted shrink-0" />
                      </div>
                      <div className="mt-0.5 text-[9px] text-theme-text-muted">
                        ● My Lead Module
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-theme-border flex items-center justify-between text-[10px] text-theme-text-muted">
                  <span>Optimistic State Sync</span>
                  <span className="text-[9px] italic">Verified notes</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-5">
            {hasImage ? (
              <div className="overflow-hidden rounded-xl border border-theme-border bg-theme-bg shadow-theme-sm">
                <img
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  className="h-40 sm:h-44 w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ) : project.id === 'checkinn' ? (
              <div className="rounded-xl border border-theme-border bg-theme-bg p-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-3.5 w-3.5 text-theme-text" />
                    <span className="text-xs font-bold text-theme-text">CheckINN Room Discovery</span>
                  </div>
                  <span className="rounded bg-theme-surface border border-theme-border px-1.5 py-0.5 text-[9px] font-medium text-theme-text">
                    200 OK
                  </span>
                </div>
                <div className="mt-2 space-y-1 text-[10px] font-mono text-theme-text-muted">
                  <div className="flex items-center justify-between">
                    <span>POST /api/v1/bookings</span>
                    <span className="text-theme-text font-semibold">Spring Boot</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] text-theme-text-subtle">
                    <span className="flex items-center gap-1">
                      <Database className="h-2.5 w-2.5 text-theme-text-muted" /> PostgreSQL ACID Model
                    </span>
                    <span>React UI</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-theme-border bg-theme-bg p-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-theme-border">
                  <div className="flex items-center gap-2">
                    <Palette className="h-3.5 w-3.5 text-theme-text" />
                    <span className="text-xs font-bold text-theme-text">Page-Bloom Mobile Engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-medium text-theme-text">
                    <HardDriveDownload className="h-2.5 w-2.5" />
                    <span>SQLite Autosave</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px] text-theme-text-muted">
                  <span className="flex items-center gap-1 font-mono text-[9px]">
                    <RotateCcw className="h-2.5 w-2.5 text-theme-text-muted" /> Undo/Redo Action Stack
                  </span>
                  <span className="rounded bg-theme-surface border border-theme-border px-1.5 py-0.5 text-[9px] font-medium">
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