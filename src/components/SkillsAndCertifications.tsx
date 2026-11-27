import React, { useState } from 'react';
import { portfolioData, Certificate } from '../data/portfolioData';
import { CertificateCard } from './CertificateCard';
import { CertificateLightboxModal } from './CertificateLightboxModal';
import { useInView } from '../hooks/useInView';
import {
  Layers,
  Smartphone,
  GitBranch,
  Code,
  FileCode,
  Server,
  Database,
  Network,
  Palette,
  Shapes,
  RotateCcw,
  RefreshCw,
  GitPullRequest,
  Zap,
  CheckCircle2,
  Package,
} from 'lucide-react';

interface NotebookTech {
  name: string;
  icon: React.ReactNode;
}

interface NotebookGroup {
  id: string;
  category: string;
  tabLabel: string;
  tabIcon: React.ReactNode;
  technologies: NotebookTech[];
}

export const SkillsAndCertifications: React.FC = () => {
  const { certificates } = portfolioData;
  const { ref, isInView } = useInView({ threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // 3 Notebook Groups: Software Engineering, Mobile Development, Build & Delivery
  const notebookGroups: NotebookGroup[] = [
    {
      id: 'swe',
      category: 'Software Engineering',
      tabLabel: 'ENG // 01',
      tabIcon: <Layers className="h-4 w-4 shrink-0 text-purple-heading dark:text-purple-dark" />,
      technologies: [
        { name: 'React', icon: <Code className="h-4 w-4" /> },
        { name: 'TypeScript', icon: <FileCode className="h-4 w-4" /> },
        { name: 'Java / Spring Boot', icon: <Server className="h-4 w-4" /> },
        { name: 'PostgreSQL', icon: <Database className="h-4 w-4" /> },
        { name: 'REST APIs', icon: <Network className="h-4 w-4" /> },
        { name: 'Tailwind CSS', icon: <Palette className="h-4 w-4" /> },
      ],
    },
    {
      id: 'mobile',
      category: 'Mobile Development',
      tabLabel: 'MOB // 02',
      tabIcon: <Smartphone className="h-4 w-4 shrink-0 text-purple-heading dark:text-purple-dark" />,
      technologies: [
        { name: 'React Native', icon: <Smartphone className="h-4 w-4" /> },
        { name: 'Expo SDK', icon: <Layers className="h-4 w-4" /> },
        { name: 'SQLite Autosave', icon: <Database className="h-4 w-4" /> },
        { name: 'SVG Vector Canvas', icon: <Shapes className="h-4 w-4" /> },
        { name: 'State History Stack', icon: <RotateCcw className="h-4 w-4" /> },
        { name: 'TypeScript', icon: <FileCode className="h-4 w-4" /> },
      ],
    },
    {
      id: 'devops',
      category: 'Build & Delivery',
      tabLabel: 'OPS // 03',
      tabIcon: <GitBranch className="h-4 w-4 shrink-0 text-purple-heading dark:text-purple-dark" />,
      technologies: [
        { name: 'GitHub Actions CI', icon: <GitBranch className="h-4 w-4" /> },
        { name: 'Flyway Migrations', icon: <RefreshCw className="h-4 w-4" /> },
        { name: 'Git Branching', icon: <GitPullRequest className="h-4 w-4" /> },
        { name: 'Vite', icon: <Zap className="h-4 w-4" /> },
        { name: 'ESLint & Vitest', icon: <CheckCircle2 className="h-4 w-4" /> },
        { name: 'Maven', icon: <Package className="h-4 w-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'} space-y-12`}
        >
          {/* Section Header */}
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

          {/* Engineering Notebook Grid: 3 Equal-Width Columns on Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {notebookGroups.map((group, idx) => (
              <div
                key={group.id}
                className={`notebook-page relative rounded-xl border border-gray-200/90 dark:border-slate-800 bg-white dark:bg-[#111A2E] shadow-[0_3px_12px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden text-left ${
                  isInView ? 'notebook-page-visible' : 'notebook-page-hidden'
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                {/* Slim Purple Index Tab Containing Group Heading (Aligned Baseline Across Columns) */}
                <div className="h-11 px-4 flex items-center justify-between border-b border-purple-200/80 dark:border-purple-900/50 bg-[#F5F3FF] dark:bg-[#1E1B4B]/60 transition-colors">
                  <div className="flex items-center gap-2">
                    {group.tabIcon}
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-heading dark:text-purple-dark">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-purple-500 dark:text-purple-300">
                    {group.tabLabel}
                  </span>
                </div>

                {/* Notebook Page Body with Faint Dot-Grid Margin */}
                <div className="relative flex-1 p-6 pt-5 notebook-dot-grid">
                  {/* Subtle vertical notebook margin guide */}
                  <div className="absolute top-0 bottom-0 left-4 w-px bg-red-200/40 dark:bg-red-900/25 pointer-events-none" />

                  {/* Semantic vertical list: one technology per row (Aligned First Row Across Columns) */}
                  <ul className="space-y-3.5 text-xs sm:text-sm pl-3">
                    {group.technologies.map((tech) => (
                      <li key={tech.name} className="flex items-center gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded text-theme-text-subtle">
                          {tech.icon}
                        </span>
                        <span className="font-medium text-theme-text leading-snug">
                          {tech.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Layered Paper Edge Footer Accent */}
                <div className="h-1.5 border-t border-gray-100 dark:border-slate-800/80 bg-gray-50/70 dark:bg-slate-900/40" />
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
                  Hover or click any certificate to inspect credential image. Use “Open full size” for an uncropped modal preview.
                </p>
              </div>

              <div className="inline-flex self-start sm:self-auto items-center gap-1.5 rounded-full border border-theme-border bg-theme-surface px-3 py-1 text-xs font-medium text-theme-text-subtle">
                <span>{certificates.length} credentials earned</span>
              </div>
            </div>

            {/* Responsive 3-Column Desktop, 2-Column Tablet, 1-Column Mobile Flip Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onOpenFullSize={(c) => setSelectedCert(c)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Full Size Lightbox Modal */}
      <CertificateLightboxModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
