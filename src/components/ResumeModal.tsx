import React, { useEffect, useRef } from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Save previously focused element to restore later
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus the modal or close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLElement>('button[aria-label="Close résumé preview"]');
    closeBtn?.focus();

    // Escape listener and focus containment trap
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
      // Restore focus
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      {/* Dimmed, softly blurred background */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content (75% viewport size on desktop, nearly full-width on mobile) */}
      <div
        ref={modalRef}
        className="relative z-10 flex flex-col w-[96vw] max-w-4xl h-[90vh] md:h-[85vh] rounded-2xl border border-theme-border bg-theme-surface shadow-theme-lg overflow-hidden animate-hero-1 text-left"
      >
        {/* Sticky Header: actions remain reachable while PDF scrolls */}
        <div className="flex items-center justify-between gap-3 border-b border-theme-border bg-theme-surface px-4 py-3 sm:px-6 sm:py-3.5 shrink-0 z-20">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-theme-border bg-theme-bg text-theme-text">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h2 id="resume-modal-title" className="text-sm sm:text-base font-bold text-purple-heading dark:text-purple-dark truncate">
                Sinthuha Nadesan — Résumé
              </h2>
              <p className="text-[11px] text-theme-text-muted truncate">
                Software Engineering • DevOps • Mobile Development Intern
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Download PDF Action */}
            <a
              href={pdfUrl}
              download="Sinthuha_Nadesan_SoftwareEngineering_Intern_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-3.5 py-1.5 text-xs font-semibold shadow-theme-sm transition-all hover:opacity-90 focus-visible:outline-2"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden xs:inline sm:inline">Download PDF</span>
              <span className="xs:hidden sm:hidden">Download</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close résumé preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-theme-border bg-theme-surface text-theme-text-muted transition-colors hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-theme-text focus-visible:outline-2"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Inline PDF Preview with Fallback */}
        <div className="relative flex-1 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden flex flex-col">
          <object
            data={`${pdfUrl}#toolbar=0&navpanes=0`}
            type="application/pdf"
            className="w-full h-full flex-1 border-0"
            aria-label="PDF preview of Sinthuha Nadesan's resume"
          >
            {/* Fallback when inline browser PDF rendering is unavailable */}
            <div className="flex flex-col items-center justify-center h-full p-6 text-center text-theme-text">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-theme-border bg-theme-surface text-theme-text mb-4 shadow-theme-sm">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-theme-text">
                Inline PDF Preview Unavailable
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-theme-text-muted max-w-md">
                Your browser or device does not support embedded PDF viewing. You can download the résumé file or view it directly in your browser.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={pdfUrl}
                  download="Sinthuha_Nadesan_SoftwareEngineering_Intern_CV.pdf"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-theme-btn-primary-bg text-theme-btn-primary-text px-4 py-2 text-xs font-semibold shadow-theme-sm hover:opacity-90"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Résumé PDF</span>
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-theme-border bg-theme-surface px-4 py-2 text-xs font-semibold text-theme-text hover:bg-gray-50 dark:hover:bg-slate-800"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};
