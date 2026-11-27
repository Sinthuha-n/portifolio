import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CertificateCard } from './CertificateCard';
import { useInView } from '../hooks/useInView';
import { CheckCircle2, Cpu } from 'lucide-react';

export const SkillsAndCertifications: React.FC = () => {
  const { certificates, skills } = portfolioData;
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-16 sm:py-20 border-t border-theme-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'} space-y-14`}
        >
          {/* Section Header */}
          <div className="max-w-2xl text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
              Expertise & Credentials
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
              Skills & Verified Certifications
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed">
              Technical foundations applied across software systems, accompanied by verified credentials in web development, relational SQL, REST APIs, and software engineering.
            </p>
          </div>

          {/* Technical Skills Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-theme-border bg-theme-surface p-5 shadow-theme-sm text-left"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="h-4 w-4 text-theme-accent shrink-0" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent">
                    {group.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1 rounded-md border border-theme-border bg-theme-surface-subtle px-2 py-0.5 text-xs font-medium text-theme-text"
                    >
                      <CheckCircle2 className="h-3 w-3 text-theme-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Interactive Grid Header */}
          <div className="text-left pt-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-theme-text">
                  Verified Certifications
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-theme-text-muted">
                  Interactive 3D cards — click “View certificate” or use Space / Enter to inspect uncropped credential images.
                </p>
              </div>

              <div className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full border border-theme-border bg-theme-surface px-3 py-1 text-xs font-medium text-theme-text-subtle">
                <span>{certificates.length} credentials earned</span>
              </div>
            </div>

            {/* Responsive 3-Column Desktop, 2-Column Tablet, 1-Column Mobile Flip Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
