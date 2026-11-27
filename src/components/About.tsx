import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Code2, Rocket, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const { about, personal } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'} space-y-10`}
        >
          {/* Main About & Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading and Narrative (aligned to exact left edge) */}
            <div className="lg:col-span-7 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-theme-text-subtle">
                Background & Profile
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark sm:text-4xl">
                {about.heading}
              </h2>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-theme-text leading-relaxed">
                {about.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Academic & Internship Value Pillars */}
            <div className="lg:col-span-5 text-left space-y-3.5">
              {/* Education Banner */}
              <div className="rounded-2xl border border-theme-border bg-theme-surface p-5 sm:p-6 shadow-theme-sm">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-theme-border bg-theme-bg text-theme-text">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-theme-border bg-theme-bg px-2.5 py-0.5 text-[11px] font-medium text-theme-text-muted mb-1">
                      Undergraduate
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-theme-text">
                      {personal.degree}
                    </h3>
                    <p className="text-xs text-theme-text-muted font-medium">
                      {personal.university} • {personal.location}
                    </p>
                    <p className="mt-2 text-xs text-theme-text-muted leading-relaxed">
                      Faculty of Information Technology • Hands-on training across algorithms, database systems, and software engineering architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                <div className="flex items-start gap-3 rounded-xl border border-theme-border bg-theme-surface p-3.5 shadow-theme-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-theme-text">What I Build</h4>
                    <p className="text-[11px] text-theme-text-muted">Full-stack web systems, mobile apps, and REST APIs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-theme-border bg-theme-surface p-3.5 shadow-theme-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
                    <Rocket className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-theme-text">Target Internship Roles</h4>
                    <p className="text-[11px] text-theme-text-muted">Software Engineering, DevOps, and Mobile Development.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-theme-border bg-theme-surface p-3.5 shadow-theme-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
                    <HeartHandshake className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-theme-text">Engineering Sharing</h4>
                    <p className="text-[11px] text-theme-text-muted">Author on Medium covering Git & CI/CD best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
