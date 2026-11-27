import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Code2, Rocket } from 'lucide-react';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border-subtle bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading and Bio */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-brand">
              Background
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {about.heading}
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-ink-muted leading-relaxed">
              {about.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border-subtle">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-light text-violet-brand">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Moratuwa IT</h4>
                  <p className="text-xs text-ink-subtle">Rigorous CS foundation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-light text-violet-brand">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Modern Stack</h4>
                  <p className="text-xs text-ink-subtle">React, TS, Java & SQL</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-light text-violet-brand">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-ink">Ready to Ship</h4>
                  <p className="text-xs text-ink-subtle">Seeking SWE internship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Skill Areas */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-ink">
                Technical Focus
              </h3>
              <p className="mt-1 text-xs text-ink-muted">
                Skills applied across academic projects and applications
              </p>

              <div className="mt-6 space-y-6">
                {about.skills.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-brand">
                      {group.category}
                    </h4>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-canvas px-3 py-1 text-xs font-medium text-ink border border-border-subtle"
                        >
                          <CheckCircle2 className="h-3 w-3 text-violet-brand" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-violet-light/50 p-4 border border-violet-border/50 text-xs text-ink-muted">
                <span className="font-semibold text-ink">Looking for internship contact info?</span> Real LinkedIn, GitHub, email, and résumé links will be attached to these sections once provided.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
