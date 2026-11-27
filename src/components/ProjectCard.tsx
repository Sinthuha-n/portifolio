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
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isWide = false }) => {
  const { ref, isInView } = useInView();

  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== '');
  const hasImage = Boolean(project.imageUrl && project.imageUrl.trim() !== '');

  // Select a contextual icon
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'planora':
        return <Kanban className="h-5 w-5 text-violet-brand" />;
      case 'checkinn':
        return <Hotel className="h-5 w-5 text-violet-brand" />;
      case 'page-bloom':
        return <Palette className="h-5 w-5 text-violet-brand" />;
      default:
        return <Layers className="h-5 w-5 text-violet-brand" />;
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
    >
      <article
        className={`group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-violet-border hover:shadow-xl hover:-translate-y-1 ${
          isWide
            ? 'w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:p-10'
            : 'h-full'
        }`}
      >
        {/* Content Side */}
        <div className={`flex flex-col ${isWide ? 'lg:col-span-7 justify-between' : 'h-full justify-between'}`}>
          <div>
            {/* Header badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-light px-3 py-1 text-xs font-semibold text-violet-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-brand"></span>
                {project.category}
              </span>
              {isWide && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-border/60 bg-surface px-3 py-1 text-xs font-semibold text-violet-brand shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-violet-brand" />
                  Primary Project
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className={`font-extrabold tracking-tight text-ink ${isWide ? 'text-2xl sm:text-3xl lg:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {project.title}
            </h3>

            {/* Role Highlight Callout */}
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-surface-subtle px-3 py-1.5 text-xs sm:text-sm font-semibold text-violet-brand border border-border-subtle">
              {getProjectIcon(project.id)}
              <span>{project.roleHighlight}</span>
            </div>

            {/* Primary description */}
            <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Key Engineering Details */}
            {project.featureHighlights && project.featureHighlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-ink-muted">
                {project.featureHighlights.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-brand shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom section: Tech tags & links */}
          <div className="mt-6 pt-4 border-t border-border-subtle">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted border border-border-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links (Rendered only when real URLs are provided) */}
            {(hasGithub || hasLive) && (
              <div className="mt-5 flex items-center gap-3">
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-violet-border hover:text-violet-brand"
                    aria-label={`${project.title} code on GitHub`}
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
                    className="inline-flex items-center gap-1.5 rounded-lg bg-violet-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-violet-hover"
                    aria-label={`${project.title} live preview`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Visual Graphic Mock Side */}
        {isWide ? (
          <div className="mt-6 lg:mt-0 lg:col-span-5 flex flex-col justify-center">
            {hasImage ? (
              <img
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                className="w-full rounded-xl object-cover shadow-sm border border-border-subtle transition-transform duration-300 group-hover:scale-[1.01]"
              />
            ) : (
              /* Polished, high-fidelity Kanban UI preview card */
              <div className="flex flex-col justify-between rounded-xl border border-violet-border/60 bg-gradient-to-br from-violet-light/50 via-surface to-canvas p-5 sm:p-6 shadow-xs">
                {/* Board header */}
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-2xs border border-violet-border/50">
                      <Kanban className="h-4 w-4 text-violet-brand" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-ink">Planora Workspace</p>
                      <p className="text-[10px] text-ink-subtle">Kanban • Backlog • Timeline</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-violet-light px-2.5 py-0.5 text-[10px] font-semibold text-violet-brand">
                    Interactive
                  </span>
                </div>

                {/* Mini Kanban Columns & Draggable Card Simulation */}
                <div className="my-4 grid grid-cols-2 gap-2.5 text-xs">
                  {/* Column 1: Backlog */}
                  <div className="rounded-lg bg-surface/90 p-2.5 border border-border-subtle shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-ink">Backlog</span>
                      <span className="rounded bg-canvas px-1.5 py-0.5 text-[10px] text-ink-subtle">3</span>
                    </div>
                    <div className="rounded bg-canvas p-2 border border-border-subtle/80 text-[11px] text-ink-muted">
                      Milestone Timeline Sync
                    </div>
                  </div>

                  {/* Column 2: In Progress with Drag Handle */}
                  <div className="rounded-lg bg-surface/90 p-2.5 border border-violet-border/70 shadow-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-[11px] text-violet-brand">In Progress</span>
                      <span className="rounded bg-violet-light px-1.5 py-0.5 text-[10px] font-bold text-violet-brand">1</span>
                    </div>
                    <div className="group/card relative rounded bg-violet-light/40 p-2 border border-violet-border/50 text-[11px] font-medium text-ink shadow-2xs">
                      <div className="flex items-center justify-between">
                        <span className="truncate">Drag-and-Drop Board</span>
                        <GripVertical className="h-3 w-3 text-violet-brand shrink-0" />
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[9px] text-violet-brand font-semibold">
                        <span>● My Core Module</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer annotation */}
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-[11px] text-ink-muted">
                  <span className="font-medium text-ink">State Engine: Reactive Drag & Drop</span>
                  <span className="text-[10px] text-ink-subtle italic">Screenshots ready for drop-in</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Secondary project cards visual preview */
          <div className="mt-6">
            {hasImage ? (
              <img
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                className="w-full rounded-xl object-cover shadow-sm border border-border-subtle transition-transform duration-300 group-hover:scale-[1.01]"
              />
            ) : project.id === 'checkinn' ? (
              /* Full-stack Spring Boot + PostgreSQL visual */
              <div className="rounded-xl border border-border-subtle bg-surface-subtle/80 p-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Hotel className="h-4 w-4 text-violet-brand" />
                    <span className="text-xs font-bold text-ink">CheckINN Full-Stack API</span>
                  </div>
                  <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                    200 OK
                  </span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-[11px] font-mono text-ink-muted">
                  <div className="flex items-center justify-between">
                    <span>POST /api/v1/bookings</span>
                    <span className="text-violet-brand font-semibold">Spring Boot</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-ink-subtle">
                    <span className="flex items-center gap-1">
                      <Database className="h-3 w-3 text-violet-brand" /> PostgreSQL ACID Schema
                    </span>
                    <span>React TS UI</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Page-Bloom offline canvas visual */
              <div className="rounded-xl border border-border-subtle bg-surface-subtle/80 p-4">
                <div className="flex items-center justify-between pb-2.5 border-b border-border-subtle">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-violet-brand" />
                    <span className="text-xs font-bold text-ink">Page-Bloom Engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-semibold text-violet-brand">
                    <HardDriveDownload className="h-3 w-3" />
                    <span>Autosave On</span>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] text-ink-muted">
                  <span className="flex items-center gap-1 font-mono text-[10px]">
                    <RotateCcw className="h-3 w-3 text-violet-brand" /> Undo/Redo Stack
                  </span>
                  <span className="rounded bg-canvas px-2 py-0.5 text-[10px] font-medium border border-border-subtle">
                    SVG Regions
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
