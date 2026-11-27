import React, { useState, useRef, useEffect } from 'react';
import { Certificate } from '../data/portfolioData';
import { Award, CalendarDays, ExternalLink, ShieldCheck, Maximize2 } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
  onOpenFullSize: (cert: Certificate) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate,
  onOpenFullSize,
}) => {
  // Explicit flip persists until clicked or toggled back
  const [isExplicitlyFlipped, setIsExplicitlyFlipped] = useState(false);

  const frontFaceRef = useRef<HTMLDivElement>(null);
  const backFaceRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  // Manage accessible focus ONLY on explicit keyboard/click activation (NEVER on hover)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (isExplicitlyFlipped) {
      const timer = setTimeout(() => {
        backFaceRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        frontFaceRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isExplicitlyFlipped]);

  const handleFrontToggle = () => {
    setIsExplicitlyFlipped(true);
  };

  const handleBackToggle = () => {
    setIsExplicitlyFlipped(false);
  };

  const handleFrontKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleFrontToggle();
    }
  };

  const handleBackKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleBackToggle();
    }
  };

  return (
    <div className="group/cert h-[380px] w-full [perspective:1400px]">
      <div
        className={`card-flip-container relative h-full w-full rounded-2xl [transform-style:preserve-3d] transition-transform duration-500 ease-out ${
          isExplicitlyFlipped ? '[transform:rotateY(180deg)]' : ''
        } [@media(hover:hover)_and_(pointer:fine)]:group-hover/cert:[transform:rotateY(180deg)]`}
      >
        {/* FRONT FACE: The card face itself is the labelled flip control (no nested buttons) */}
        <div
          ref={frontFaceRef}
          role="button"
          tabIndex={isExplicitlyFlipped ? -1 : 0}
          onClick={handleFrontToggle}
          onKeyDown={handleFrontKeyDown}
          aria-expanded={isExplicitlyFlipped}
          aria-label={`Certificate for ${certificate.title} by ${certificate.issuer}. Click or press Enter to inspect credential.`}
          className={`absolute inset-0 flex h-full w-full flex-col justify-between cursor-pointer rounded-2xl border border-theme-border bg-theme-surface p-6 shadow-theme-sm [backface-visibility:hidden] transition-all duration-200 hover:border-theme-border-strong hover:shadow-theme-md focus-visible:outline-2 ${
            isExplicitlyFlipped ? 'pointer-events-none' : ''
          }`}
          aria-hidden={isExplicitlyFlipped}
        >
          <div>
            {/* Top row: Issuer badge & Date */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-theme-border bg-theme-bg px-2.5 py-1 text-xs font-medium text-theme-text-muted">
                <Award className="h-3.5 w-3.5" />
                <span className="truncate max-w-[170px]">{certificate.issuer}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-theme-text-subtle shrink-0">
                <CalendarDays className="h-3.5 w-3.5" />
                {certificate.date}
              </span>
            </div>

            {/* Title in Purple */}
            <h3 className="mt-3 text-lg sm:text-xl font-extrabold tracking-tight text-purple-heading dark:text-purple-dark leading-snug">
              {certificate.title}
            </h3>

            {/* Summary */}
            <p className="mt-3 text-xs sm:text-sm text-theme-text-muted leading-relaxed">
              {certificate.summary}
            </p>
          </div>

          {/* Front Footer: Verified indicator & subtle instruction without visible buttons */}
          <div className="mt-6 pt-4 border-t border-theme-border flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-theme-text-subtle">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>Verified Credential</span>
            </span>

            <span className="text-[11px] font-medium text-theme-text-muted group-hover/cert:text-purple-heading dark:group-hover/cert:text-purple-dark transition-colors">
              Click to inspect
            </span>
          </div>
        </div>

        {/* BACK FACE: Preserves exact same outer dimensions to prevent layout shifts */}
        <div
          className={`absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-theme-border bg-theme-surface p-5 shadow-theme-md [backface-visibility:hidden] [transform:rotateY(180deg)] transition-all duration-200 ${
            !isExplicitlyFlipped ? 'pointer-events-none' : ''
          }`}
          aria-hidden={!isExplicitlyFlipped}
        >
          {/* Upper clickable flip-back area (NOT wrapping the footer action buttons) */}
          <div
            ref={backFaceRef}
            role="button"
            tabIndex={isExplicitlyFlipped ? 0 : -1}
            onClick={handleBackToggle}
            onKeyDown={handleBackKeyDown}
            aria-label={`Return to details for ${certificate.title}`}
            className="flex-1 flex flex-col cursor-pointer rounded-xl focus-visible:outline-2"
          >
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-theme-border">
              <span className="truncate text-xs font-bold text-theme-text" title={certificate.title}>
                {certificate.title}
              </span>
              <span className="text-[10px] text-theme-text-subtle shrink-0">
                Click to flip back
              </span>
            </div>

            {/* Certificate Image preview: uncropped, object-contain */}
            <div className="my-2 min-h-0 flex-1 overflow-hidden rounded-xl border border-theme-border bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-2">
              <img
                src={certificate.image}
                alt={`Certificate for ${certificate.title} issued by ${certificate.issuer}`}
                className="h-full w-full object-contain filter-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Sibling Footer (NOT nested inside the flip button) */}
          <div className="pt-2.5 border-t border-theme-border flex items-center justify-between text-xs z-10">
            {/* Open full size trigger */}
            <button
              type="button"
              tabIndex={isExplicitlyFlipped ? 0 : -1}
              onClick={(e) => {
                e.stopPropagation();
                onOpenFullSize(certificate);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-heading dark:text-purple-dark hover:underline focus-visible:outline-2 py-0.5 rounded"
              aria-label={`Open full size preview of ${certificate.title}`}
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>Open full size</span>
            </button>

            {/* Verify online link if present */}
            {certificate.verificationUrl && certificate.verificationUrl.trim() !== '' ? (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isExplicitlyFlipped ? 0 : -1}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline focus-visible:outline-2 py-0.5"
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