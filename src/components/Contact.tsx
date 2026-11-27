import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { Mail, Github, Linkedin, BookOpen, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { email, github, linkedin, medium, location, university, targetRoles } =
    portfolioData.personal;
  const { ref, isInView } = useInView();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* Section Header (aligned to exact left edge) */}
          <div className="text-left mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-theme-text-subtle">
              Let’s Connect
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed max-w-2xl">
              I am actively seeking internship opportunities across software engineering, DevOps pipelines, and mobile application development. Let’s discuss how I can contribute to your engineering team.
            </p>
          </div>

          {/* Contact Card spanning full container width */}
          <div className="rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-10 shadow-theme-sm text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Email actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-5 py-3 text-sm font-semibold shadow-theme-sm transition-all hover:opacity-90 focus-visible:outline-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 dark:hover:bg-slate-800 focus-visible:outline-2"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-theme-text-muted" />
                      <span>{email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social profiles */}
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-link transition-colors hover:border-gray-400 hover:text-theme-text shadow-theme-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-link transition-colors hover:border-gray-400 hover:text-theme-text shadow-theme-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <a
                  href={medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-link transition-colors hover:border-gray-400 hover:text-theme-text shadow-theme-sm"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Medium</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Context footer */}
            <div className="mt-8 pt-4 border-t border-theme-border flex flex-wrap items-center justify-between gap-3 text-xs text-theme-text-subtle">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {university} • {location}
              </span>
              <span>{targetRoles}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
