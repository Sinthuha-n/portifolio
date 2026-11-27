import React from 'react';
import { Project } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Layers,
  Kanban,
  Hotel,
  Palette,
  Sparkles,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isWide = false }) => {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== '');
  const hasImage = Boolean(project.imageUrl && project.imageUrl.trim() !== '');

  // Select a contextual icon for clean text-based representation
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'planora':
        return <Kanban className="h-6 w-6 text-violet-brand" />;
      case 'checkinn':
        return <Hotel className="h-6 w-6 text-violet-brand" />;
      case 'page-bloom':
        return <Palette className="h-6 w-6 text-violet-brand" />;
      default:
        return <Layers className="h-6 w-6 text-violet-brand" />;
    }
  };

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 transition-all duration-200 hover:border-violet-border hover:shadow-lg ${
        isWide
          ? 'w-full lg:grid lg:grid-cols-12 lg:gap-8 lg:p-10'
          : 'h-full'
      }`}
    >
      {/* Content Side */}
      <div className={`flex flex-col ${isWide ? 'lg:col-span-7 justify-between' : 'h-full justify-between'}`}>
        <div>
          {/* Header Row: Category badge & Role highlight */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-light px-3 py-1 text-xs font-semibold text-violet-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-brand"></span>
              {project.category}
            </span>
            {isWide && (
              <span className="inline-flex items-center gap-1 rounded-full border border-border-subtle bg-canvas px-3 py-1 text-xs font-medium text-ink-muted">
                <Sparkles className="h-3 w-3 text-violet-brand" />
                Featured Project
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className={`font-bold tracking-tight text-ink ${isWide ? 'text-2xl sm:text-3xl lg:text-3xl' : 'text-xl sm:text-2xl'}`}>
            {project.title}
          </h3>

          {/* Role Highlight if present */}
          {project.roleHighlight && (
            <p className="mt-1 text-sm font-semibold text-violet-brand">
              {project.roleHighlight}
            </p>
          )}

          {/* Exact Project Description */}
          <p className="mt-4 text-base sm:text-lg text-ink-muted leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom meta: Tech stack tags & Links */}
        <div className="mt-6 pt-4 border-t border-border-subtle/80">
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted border border-border-subtle/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Conditional Links: Rendered only when real URLs are supplied */}
          {(hasGithub || hasLive) && (
            <div className="mt-5 flex items-center gap-3">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-violet-brand"
                  aria-label={`${project.title} source code on GitHub`}
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-brand hover:underline"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Visual / Graphic Side */}
      {isWide ? (
        <div className="mt-6 lg:mt-0 lg:col-span-5 flex flex-col justify-center">
          {hasImage ? (
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              className="w-full rounded-xl object-cover shadow-sm border border-border-subtle"
            />
          ) : (
            /* Clean, elegant text-based graphic card until screenshots are uploaded */
            <div className="flex flex-col justify-between rounded-xl border border-violet-border/60 bg-gradient-to-br from-violet-light/50 via-surface to-canvas p-6 sm:p-7 min-h-[220px]">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-violet-border/40">
                  {getProjectIcon(project.id)}
                </div>
                <span className="text-xs font-mono font-medium text-violet-brand/80 uppercase tracking-wider">
                  Interactive Preview
                </span>
              </div>

              <div className="my-auto py-4">
                <p className="text-sm font-medium text-ink">
                  Core Architecture Highlights
                </p>
                <div className="mt-2 space-y-2 text-xs text-ink-muted">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-brand"></span>
                    <span>Smooth drag-and-drop state management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-brand"></span>
                    <span>Integrated Backlog & Timeline views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-brand"></span>
                    <span>Component architecture optimized for real-time updates</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-ink-subtle italic">
                Real product screenshots will be connected in future milestones.
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Smaller secondary card placeholder visual */
        <div className="mt-6">
          {hasImage ? (
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              className="w-full rounded-xl object-cover shadow-sm border border-border-subtle"
            />
          ) : (
            <div className="flex items-center gap-3.5 rounded-xl border border-border-subtle bg-surface-subtle/70 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface border border-border-subtle shadow-2xs">
                {getProjectIcon(project.id)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-ink truncate">
                  {project.id === 'checkinn' ? 'Spring Boot & PostgreSQL Backend' : 'Offline State & Vector Canvas'}
                </p>
                <p className="text-[11px] text-ink-subtle truncate">
                  Clean text-based milestone card
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};
