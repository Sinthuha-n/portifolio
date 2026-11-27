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
    <section id="contact" className="py-16 sm:py-24 border-t border-theme-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          <div className="rounded-3xl border border-theme-border bg-theme-surface p-8 sm:p-12 lg:p-14 shadow-theme-lg text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-accent-light px-3.5 py-1 text-xs font-semibold text-theme-accent mb-4">
                Let’s Connect
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-theme-text">
                Get In Touch
              </h2>
              <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed">
                I am actively seeking internship opportunities across software engineering, DevOps pipelines, and mobile application engineering. Whether you have an open role, feedback, or an interesting engineering problem, I would love to hear from you.
              </p>
            </div>

            {/* Contact details & action buttons */}
            <div className="mt-8 pt-8 border-t border-theme-border grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Email callout */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2.5 rounded-xl bg-theme-accent px-5 py-3 text-sm font-semibold text-white shadow-theme-md transition-all hover:bg-theme-accent-hover focus-visible:outline-2 focus-visible:outline-theme-accent"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send an Email</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-theme-border bg-theme-surface-subtle px-4 py-3 text-sm font-medium text-theme-text hover:border-theme-border-strong transition-colors focus-visible:outline-2 focus-visible:outline-theme-accent"
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
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-text transition-colors hover:border-theme-accent hover:text-theme-accent shadow-theme-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-text transition-colors hover:border-theme-accent hover:text-theme-accent shadow-theme-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                <a
                  href={medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2.5 text-xs font-semibold text-theme-text transition-colors hover:border-theme-accent hover:text-theme-accent shadow-theme-sm"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Medium</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Context footer inside contact card */}
            <div className="mt-6 pt-4 border-t border-theme-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-theme-text-subtle">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-theme-accent" />
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
