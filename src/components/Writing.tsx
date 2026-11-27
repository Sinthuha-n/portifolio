import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useMediumArticles } from '../hooks/useMediumArticles';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, BookOpen, Newspaper, ExternalLink } from 'lucide-react';

export const Writing: React.FC = () => {
  const { personal } = portfolioData;
  const { articles } = useMediumArticles();
  const { ref, isInView } = useInView();

  const displayArticles = articles && articles.length > 0 ? articles : portfolioData.writing;
  if (!displayArticles || displayArticles.length === 0) return null;

  const featuredArticle = displayArticles[0];
  const sideArticles = displayArticles.slice(1, 3);

  return (
    <section id="writing" className="scroll-mt-20 py-16 sm:py-20 border-b border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal-item ${isInView ? 'reveal-visible' : 'reveal-hidden'}`}
        >
          {/* Section Header (aligned to exact left edge, purple heading) */}
          <div className="text-left mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-theme-border bg-theme-surface text-theme-text-muted">
                <Newspaper className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-theme-text-subtle">
                Press & Technical Writing
              </p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark sm:text-4xl">
              Engineering Notes & Publications
            </h2>
            <p className="mt-3 text-base sm:text-lg text-theme-text-muted leading-relaxed max-w-2xl">
              Architecture insights, Git workflow discipline, and automated delivery pipelines published on Medium.
            </p>
          </div>

          {/* Newspaper-style Pinboard Container */}
          <div className="relative rounded-3xl border border-theme-border bg-[#F5F2EB]/50 dark:bg-slate-900/50 p-5 sm:p-8 md:p-10 shadow-inner">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 1. FEATURED CLIPPING: Largest Clipping (Planora CI/CD Article) */}
              {featuredArticle && (
                <div className="lg:col-span-7">
                  <article className="group relative flex flex-col justify-between rounded-2xl border border-[#E7E2D6] dark:border-slate-700 bg-[#FDFBF7] dark:bg-[#151D2E] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-theme-lg hover:-translate-y-1 -rotate-[0.6deg] hover:rotate-0 text-left">
                    {/* Realistic Pushpin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none" aria-hidden="true">
                      <div className="h-4 w-4 rounded-full bg-gradient-to-br from-rose-500 via-red-600 to-rose-800 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] border border-rose-900/40" />
                      <div className="h-1.5 w-1 bg-slate-400 -mt-0.5 rounded-b-xs shadow-xs" />
                    </div>

                    <div>
                      {/* Newspaper Masthead / Dateline */}
                      <div className="border-b-2 border-neutral-300 dark:border-slate-700 pb-2 mb-4">
                        <div className="flex flex-wrap items-center justify-between text-[11px] font-mono tracking-widest uppercase text-theme-text-muted gap-2">
                          <span className="font-bold text-neutral-800 dark:text-neutral-200">
                            SPECIAL FEATURE • {featuredArticle.publication}
                          </span>
                          <span>{featuredArticle.date || 'OCT 2024'} • {featuredArticle.readTime}</span>
                        </div>
                      </div>

                      {/* Headline with Soft Yellow Marker Highlight */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
                        <span className="bg-[#FEF08A]/80 dark:bg-[#A16207]/45 dark:text-amber-100 px-1.5 py-0.5 rounded-xs box-decoration-clone">
                          {featuredArticle.title}
                        </span>
                      </h3>

                      {/* Lead Subtitle / Byline */}
                      <p className="mt-3 text-xs font-serif italic text-theme-text-muted">
                        By {featuredArticle.author || 'Sinthuha Nadesan'} • {featuredArticle.publication}
                      </p>

                      {/* Excerpt */}
                      <p className="mt-4 text-sm sm:text-base font-serif text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {featuredArticle.description}
                      </p>

                      {/* Editorial Callout Box */}
                      <div className="my-5 rounded-xl border border-neutral-300/80 dark:border-slate-700 bg-[#F7F4EB] dark:bg-slate-800/60 p-4 text-xs font-mono text-theme-text-muted leading-relaxed">
                        <p className="font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                          Core Topics:
                        </p>
                        <p>
                          {featuredArticle.tags && featuredArticle.tags.length > 0
                            ? featuredArticle.tags.map((t) => `#${t}`).join('  •  ')
                            : 'Software Engineering  •  Architecture  •  Best Practices'}
                        </p>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {featuredArticle.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-neutral-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-mono text-neutral-700 dark:text-neutral-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href={featuredArticle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-4 py-2.5 text-xs font-semibold shadow-theme-sm transition-all hover:opacity-90 focus-visible:outline-2"
                        aria-label={`Read "${featuredArticle.title}" on Medium`}
                      >
                        <span>Read on Medium</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                </div>
              )}

              {/* 2. SIDE CLIPPINGS: Two Smaller Verified Articles */}
              <div className="lg:col-span-5 space-y-7">
                {sideArticles.map((article, index) => (
                  <article
                    key={article.title}
                    className={`group relative flex flex-col justify-between rounded-2xl border border-[#E7E2D6] dark:border-slate-700 bg-[#FDFBF7] dark:bg-[#151D2E] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05),0_2px_6px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:shadow-theme-lg hover:-translate-y-1 ${
                      index === 0 ? 'rotate-[0.8deg] hover:rotate-0' : '-rotate-[0.8deg] hover:rotate-0'
                    } text-left`}
                  >
                    {/* Realistic Pushpin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none" aria-hidden="true">
                      <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-rose-500 via-red-600 to-rose-800 shadow-[0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.5)] border border-rose-900/40" />
                      <div className="h-1.5 w-0.5 bg-slate-400 -mt-0.5 rounded-b-xs shadow-xs" />
                    </div>

                    <div>
                      {/* Clipping Header */}
                      <div className="border-b border-neutral-300 dark:border-slate-700 pb-2 mb-3">
                        <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-theme-text-muted">
                          <span className="font-bold text-neutral-800 dark:text-neutral-200">
                            {article.publication}
                          </span>
                          <span>{article.date || '2024'} • {article.readTime}</span>
                        </div>
                      </div>

                      {/* Headline with Soft Yellow Marker Highlight */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-snug">
                        <span className="bg-[#FEF08A]/75 dark:bg-[#A16207]/45 dark:text-amber-100 px-1 py-0.5 rounded-xs box-decoration-clone">
                          {article.title}
                        </span>
                      </h3>

                      {/* Excerpt */}
                      <p className="mt-3 text-xs sm:text-sm font-serif text-neutral-800 dark:text-neutral-200 leading-relaxed">
                        {article.description}
                      </p>
                    </div>

                    {/* Footer Link */}
                    <div className="mt-5 pt-3 border-t border-neutral-200 dark:border-slate-700 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-theme-text-muted">
                        #{article.tags[0]}
                      </span>

                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1 text-xs font-bold text-theme-link hover:text-purple-heading dark:hover:text-purple-dark focus-visible:outline-2"
                        aria-label={`Read "${article.title}" on Medium`}
                      >
                        <span>Read on Medium</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Bottom Pinboard Bar: View All Articles on Medium */}
            <div className="mt-8 pt-6 border-t border-neutral-300/80 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-2 text-xs font-mono text-theme-text-muted">
                <BookOpen className="h-4 w-4" />
                <span>Published on Medium • All canonical articles verified</span>
              </div>

              <a
                href={personal.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-theme-btn-secondary-border bg-theme-btn-secondary-bg text-theme-btn-secondary-text px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all hover:bg-gray-50 dark:hover:bg-slate-800 shadow-theme-sm focus-visible:outline-2"
              >
                <span>View all articles on Medium</span>
                <ExternalLink className="h-3.5 w-3.5 text-theme-text-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
