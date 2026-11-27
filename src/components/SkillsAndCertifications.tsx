import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CertificateCard } from './CertificateCard';
import { useInView } from '../hooks/useInView';
import { Layers, Smartphone, GitBranch, Sparkles } from 'lucide-react';

export const SkillsAndCertifications: React.FC = () => {
  const { certificates, skills } = portfolioData;
  const { ref, isInView } = useInView();

  const getGroupIcon = (category: string) => {
    switch (category) {
      case 'Software Engineering':
        return <Layers className="h-4 w-4 text-theme-text" />;
      case 'Mobile Development':
        return <Smartphone className="h-4 w-4 text-theme-text" />;
      case 'Build & Delivery':
        return <GitBranch className="h-4 w-4 text-theme-text" />;
      default:
        return <Sparkles className="h-4 w-4 text-theme-text" />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'} space-y-12`}
        >
          {/* Section Header (aligned to exact left edge) */}
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-theme-text-subtle">
              Technical Capabilities
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark sm:text-4xl">
              Skills & Verified Credentials
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed max-w-2xl">
              Core technical disciplines tied directly to implemented software systems, production workflows, and completed coursework.
            </p>
          </div>

          {/* 3 Clean Groups: 3 columns on wide screens, stacked on narrow screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {skills.map((group) => (
              <div
                key={group.category}
                className="flex flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-7 shadow-theme-sm text-left transition-all hover:border-theme-border-strong hover:shadow-theme-md"
              >
                <div>
                  {/* Category Header with Icon & Tied Project Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
                        {getGroupIcon(group.category)}
                      </span>
                      <h3 className="text-base font-bold text-theme-text">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center rounded-full border border-theme-border bg-theme-bg px-2.5 py-0.5 text-[11px] font-semibold text-purple-heading dark:text-purple-dark mb-3">
                    {group.tiedWork}
                  </span>

                  {/* Short text describing actual work */}
                  <p className="text-xs sm:text-sm text-theme-text leading-relaxed font-normal">
                    {group.summary}
                  </p>
                </div>

                {/* Relevant technologies */}
                <div className="mt-6 pt-4 border-t border-theme-border">
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-theme-border bg-theme-bg px-2.5 py-1 text-xs font-medium text-theme-text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Interactive Grid Header */}
          <div className="text-left pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-purple-heading dark:text-purple-dark">
                  Verified Certifications
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-theme-text-muted">
                  Interactive 3D cards — click “View certificate” or press Space / Enter to inspect credential images.
                </p>
              </div>

              <div className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full border border-theme-border bg-theme-surface px-3 py-1 text-xs font-medium text-theme-text-subtle">
                <span>{certificates.length} credentials earned</span>
              </div>
            </div>

            {/* Responsive 3-Column Desktop, 2-Column Tablet, 1-Column Mobile Flip Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
