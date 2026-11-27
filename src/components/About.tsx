import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal, certificates } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-theme-border bg-theme-surface-subtle/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'} space-y-16`}
        >
          {/* Main About & Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading and Narrative */}
            <div className="lg:col-span-7 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                Background & Approach
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
                {about.heading}
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-theme-text-muted leading-relaxed">
                {about.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Education Banner */}
              <div className="mt-8 rounded-2xl border border-theme-border bg-theme-surface p-5 sm:p-6 shadow-theme-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-theme-accent-light text-theme-accent">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-theme-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-theme-accent mb-1">
                      Academic Foundation
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-theme-text">
                      {personal.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-accent font-medium">
                      {personal.university} • {personal.location}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-theme-text-muted">
                      Rigorous IT curriculum covering data structures, relational database architecture, distributed systems, and software lifecycle principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Engineering Toolkit */}
            <div className="lg:col-span-5 text-left">
              <div className="rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-7 shadow-theme-sm">
                <h3 className="text-lg font-bold text-theme-text flex items-center gap-2">
                  <Award className="h-5 w-5 text-theme-accent" />
                  <span>Technical Focus & Toolkit</span>
                </h3>
                <p className="mt-1 text-xs text-theme-text-muted">
                  Technologies applied directly across academic projects and applications
                </p>

                <div className="mt-6 space-y-5">
                  {about.skills.map((group) => (
                    <div key={group.category}>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-accent">
                        {group.category}
                      </h4>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <li
                            key={skill}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-theme-border bg-theme-surface-subtle px-2.5 py-1 text-xs font-medium text-theme-text"
                          >
                            <CheckCircle2 className="h-3 w-3 text-theme-accent" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-theme-accent-border bg-theme-accent-light/60 p-3.5 text-xs text-theme-text-muted">
                  <span className="font-semibold text-theme-text">Internship Target: </span>
                  Software Engineering, DevOps, and Mobile Development roles.
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section within About */}
          {certificates && certificates.length > 0 && (
            <div className="border-t border-theme-border pt-12 text-left">
              <div className="max-w-2xl mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                  Verified Credentials
                </p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-theme-text">
                  Certifications & Skill Badges
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-theme-text-muted">
                  Verified technical coursework in full-stack web development, API testing, and relational SQL.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificates.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex flex-col justify-between rounded-xl border border-theme-border bg-theme-surface p-5 shadow-theme-sm transition-all duration-200 hover:border-theme-border-strong hover:shadow-theme-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 rounded bg-theme-accent-light px-2 py-0.5 text-[10px] font-semibold text-theme-accent">
                          <ShieldCheck className="h-3 w-3" />
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-theme-text leading-snug">
                        {cert.title}
                      </h4>
                      <p className="mt-2 text-xs text-theme-text-muted leading-relaxed">
                        {cert.highlight}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-theme-border flex items-center justify-between text-[11px] text-theme-text-subtle">
                      <span>Verified Certificate</span>
                      <span className="font-mono text-[10px] text-theme-accent font-medium">✓ Completed</span>
                    </div>
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
