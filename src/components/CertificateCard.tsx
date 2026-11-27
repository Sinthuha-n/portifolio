import React, { useState, useRef, useEffect } from 'react';
import { Certificate } from '../data/portfolioData';
import { Award, CalendarDays, RotateCw, RotateCcw, ExternalLink, ShieldCheck } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const viewButtonRef = useRef<HTMLButtonElement>(null);
  const flipBackButtonRef = useRef<HTMLButtonElement>(null);
  const isFirstMount = useRef(true);

  // Manage accessible focus when flipping
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (isFlipped) {
      // Small timeout ensures element is mounted/visible before focusing
      const timer = setTimeout(() => {
        flipBackButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        viewButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="h-[360px] sm:h-[380px] w-full [perspective:1400px]">
      <div
        className={`card-flip-container relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT FACE */}
        <div
          className={`absolute inset-0 flex h-full flex-col justify-between rounded-2xl border border-theme-border bg-theme-surface p-6 sm:p-7 shadow-theme-sm [backface-visibility:hidden] transition-all duration-300 hover:border-theme-border-strong hover:shadow-theme-md ${
            isFlipped ? 'pointer-events-none' : ''
          }`}
          aria-hidden={isFlipped}
        >
          <div>
            {/* Top row: Issuer badge & Issue Date */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-theme-accent-light px-2.5 py-1 text-xs font-semibold text-theme-accent">
                <Award className="h-3.5 w-3.5" />
                <span className="truncate max-w-[170px]">{certificate.issuer}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-theme-text-subtle shrink-0">
                <CalendarDays className="h-3.5 w-3.5" />
                {certificate.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-3 text-xl font-bold tracking-tight text-theme-text leading-snug">
              {certificate.title}
            </h3>

            {/* Summary */}
            <p className="mt-3 text-xs sm:text-sm text-theme-text-muted leading-relaxed">
              {certificate.summary}
            </p>
          </div>

          {/* Front Footer: Verified indicator & "View certificate" button */}
          <div className="mt-6 pt-4 border-t border-theme-border flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-theme-text-subtle">
              <ShieldCheck className="h-4 w-4 text-theme-accent" />
              <span>Verified Credential</span>
            </span>

            <button
              ref={viewButtonRef}
              type="button"
              tabIndex={isFlipped ? -1 : 0}
              onClick={handleFlip}
              onKeyDown={handleKeyDown}
              aria-expanded={isFlipped}
              aria-label={`View certificate for ${certificate.title}`}
              className="group inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface-subtle px-3.5 py-2 text-xs font-semibold text-theme-text transition-colors hover:border-theme-accent hover:text-theme-accent focus-visible:outline-2 focus-visible:outline-theme-accent"
            >
              <span>View certificate</span>
              <RotateCw className="h-3.5 w-3.5 text-theme-accent transition-transform duration-300 group-hover:rotate-180" />
            </button>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className={`absolute inset-0 flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-theme-border bg-theme-surface p-4 sm:p-5 shadow-theme-lg [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            !isFlipped ? 'pointer-events-none' : ''
          }`}
          aria-hidden={!isFlipped}
        >
          {/* Back Header: Title & "Flip back" button */}
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-theme-border">
            <span className="truncate text-xs font-bold text-theme-text" title={certificate.title}>
              {certificate.title}
            </span>

            <button
              ref={flipBackButtonRef}
              type="button"
              tabIndex={isFlipped ? 0 : -1}
              onClick={handleFlip}
              onKeyDown={handleKeyDown}
              aria-label={`Flip back to details for ${certificate.title}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-theme-border bg-theme-surface-subtle px-2.5 py-1 text-xs font-semibold text-theme-text transition-colors hover:border-theme-accent hover:text-theme-accent focus-visible:outline-2 focus-visible:outline-theme-accent shrink-0"
            >
              <RotateCcw className="h-3 w-3 text-theme-accent" />
              <span>Flip back</span>
            </button>
          </div>

          {/* Real Certificate Image: Uncropped, object-contain, original colors in dark mode */}
          <div className="my-2 min-h-0 flex-1 overflow-hidden rounded-xl border border-theme-border bg-slate-100 dark:bg-slate-900/90 flex items-center justify-center p-2">
            <img
              src={certificate.image}
              alt={`Certificate for ${certificate.title} issued by ${certificate.issuer}`}
              className="h-full w-full object-contain filter-none"
              loading="lazy"
            />
          </div>

          {/* Back Footer: Open full size & Optional verification URL */}
          <div className="pt-2 border-t border-theme-border flex items-center justify-between text-xs">
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isFlipped ? 0 : -1}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-theme-accent hover:underline focus-visible:outline-2 focus-visible:outline-theme-accent"
            >
              <span>Open full size</span>
              <ExternalLink className="h-3 w-3" />
            </a>

            {certificate.verificationUrl && certificate.verificationUrl.trim() !== '' ? (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isFlipped ? 0 : -1}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Verify online</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="text-[10px] text-theme-text-subtle font-mono">
                {certificate.issuer}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
