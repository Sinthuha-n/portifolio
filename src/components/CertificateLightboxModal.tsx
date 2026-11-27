import React, { useEffect, useRef } from 'react';
import { Certificate } from '../data/portfolioData';
import { X, ExternalLink, Award, CalendarDays, ShieldCheck } from 'lucide-react';

interface CertificateLightboxModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateLightboxModal: React.FC<CertificateLightboxModalProps> = ({
  certificate,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!certificate) return;

    // Save previous active element for restoration
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLElement>('button[aria-label="Close certificate preview"]');
    closeBtn?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus({ preventScroll: true });
      }
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-lightbox-title"
    >
      {/* Dimmed backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        ref={modalRef}
        className="relative z-10 flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl border border-theme-border bg-theme-surface shadow-2xl overflow-hidden animate-hero-1 text-left"
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-theme-border bg-theme-surface px-5 py-3.5 shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="inline-flex items-center gap-1 rounded-full border border-theme-border bg-theme-bg px-2 py-0.5 text-[10px] font-medium text-theme-text-muted">
                <Award className="h-3 w-3" />
                {certificate.issuer}
              </span>
              <span className="text-[10px] font-medium text-theme-text-subtle flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {certificate.date}
              </span>
            </div>
            <h2 id="cert-lightbox-title" className="text-sm sm:text-base font-bold text-purple-heading dark:text-purple-dark truncate">
              {certificate.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-bg px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:border-gray-400"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verify Credential</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-theme-border bg-theme-surface text-theme-text-muted transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-theme-text focus-visible:outline-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Large Uncropped Certificate Image Preview */}
        <div className="relative flex-1 min-h-0 bg-slate-100 dark:bg-slate-950 p-3 sm:p-6 flex items-center justify-center overflow-auto">
          <img
            src={certificate.image}
            alt={`Full-size certificate for ${certificate.title} issued by ${certificate.issuer}`}
            className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-theme-md"
            loading="eager"
          />
        </div>

        {/* Footer info */}
        <div className="border-t border-theme-border bg-theme-surface px-5 py-2.5 flex items-center justify-between text-xs text-theme-text-muted">
          <span>{certificate.summary}</span>
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-theme-link hover:underline"
          >
            <span>Open raw image</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
