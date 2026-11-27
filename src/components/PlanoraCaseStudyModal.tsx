import React, { useEffect } from 'react';
import { PlanoraCaseStudy } from '../data/portfolioData';
import { X, Kanban, CheckCircle2, Cpu, Users, GitBranch, Github } from 'lucide-react';

interface PlanoraCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: PlanoraCaseStudy;
  githubUrl?: string;
}

export const PlanoraCaseStudyModal: React.FC<PlanoraCaseStudyModalProps> = ({
  isOpen,
  onClose,
  caseStudy,
  githubUrl,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-8 shadow-theme-lg z-10 my-8 max-h-[90vh] overflow-y-auto animate-hero-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-theme-border pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-theme-border bg-theme-bg px-3 py-1 text-xs font-semibold text-theme-text-muted mb-2">
              <Kanban className="h-3.5 w-3.5" />
              <span>Engineering Case Study</span>
            </div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark">
              Planora Architecture & Execution
            </h2>
            <p className="mt-1 text-sm text-theme-text-muted">
              Team Project • Lead Frontend & Drag-and-Drop State Engineer
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-theme-border p-2 text-theme-text-muted hover:bg-theme-bg hover:text-theme-text transition-colors"
            aria-label="Close case study modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="mt-6 space-y-6 text-left">
          {/* Section 1: Problem & Context */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span>Project Background & Team Problem</span>
            </h3>
            <p className="mt-2 text-sm sm:text-base text-theme-text leading-relaxed">
              {caseStudy.problem}
            </p>
            <div className="mt-3 rounded-xl border border-theme-border bg-theme-bg p-3.5 text-xs text-theme-text-muted">
              <span className="font-semibold text-theme-text">Team Context: </span>
              {caseStudy.teamContext}
            </div>
          </div>

          {/* Section 2: Specific Ownership */}
          <div className="border-t border-theme-border pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" />
              <span>My Ownership & Feature Delivery</span>
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm text-theme-text">
              {caseStudy.myContributions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-theme-bg border border-theme-border text-theme-text text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Technical Decision */}
          <div className="border-t border-theme-border pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text flex items-center gap-1.5">
              <Cpu className="h-4 w-4" />
              <span>Key Architectural & Technical Decision</span>
            </h3>
            <div className="mt-3 rounded-xl border border-theme-border bg-theme-bg p-4 text-sm text-theme-text leading-relaxed">
              {caseStudy.technicalDecision}
            </div>
          </div>

          {/* Section 4: Tech Stack */}
          <div className="border-t border-theme-border pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-theme-text flex items-center gap-1.5 mb-2.5">
              <GitBranch className="h-4 w-4" />
              <span>Technologies Applied</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-theme-border bg-theme-bg px-3 py-1 text-xs font-medium text-theme-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-theme-border flex items-center justify-between">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-theme-link hover:text-theme-text transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>View Source on GitHub</span>
            </a>
          ) : (
            <span />
          )}

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-5 py-2.5 text-xs font-semibold shadow-theme-sm hover:opacity-90 transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
