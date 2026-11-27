import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

export const Writing: React.FC = () => {
  const { writing } = portfolioData;
  const { ref, isInView } = useInView();

  if (!writing || writing.length === 0) return null;

  return (
    <section id="writing" className="py-16 sm:py-20 border-t border-theme-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* Section Header */}
          <div className="max-w-2xl text-left mb-10 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-theme-accent">
              Writing & Publications
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-theme-text sm:text-4xl">
              Engineering Notes & Articles
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed">
              Technical writing on Git version control best practices, developer productivity, and intentional technology culture published on Medium.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {writing.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-6 transition-all duration-300 hover:border-theme-border-strong hover:shadow-theme-lg hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-theme-accent"
              >
                <div>
                  {/* Meta header: Publication & Read time */}
                  <div className="flex items-center justify-between text-xs text-theme-text-subtle mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-accent-light px-2.5 py-0.5 font-semibold text-theme-accent">
                      <BookOpen className="h-3 w-3" />
                      {article.publication}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-theme-text group-hover:text-theme-accent transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-xs sm:text-sm text-theme-text-muted leading-relaxed">
                    {article.description}
                  </p>
                </div>

                {/* Footer: Tags & Arrow */}
                <div className="mt-6 pt-4 border-t border-theme-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-theme-surface-subtle px-2 py-0.5 text-[11px] font-medium text-theme-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-theme-accent group-hover:translate-x-0.5 transition-transform">
                    <span>Read</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
