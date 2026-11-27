import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger a one-time reveal when an element enters the viewport.
 * Fail-safe: if IntersectionObserver is unsupported or animation setup fails,
 * content defaults to visible so accessibility and usability are never compromised.
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Initialize with fallback check: if no IntersectionObserver or reduced motion is preferred, show content immediately
  const [isInView, setIsInView] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return true;
    }
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  });

  useEffect(() => {
    // Already revealed (one-time reveal)
    if (isInView) return;

    // Safety fallback
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    try {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer?.disconnect();
        }
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
        ...options,
      });

      if (ref.current) {
        observer.observe(ref.current);
      }
    } catch {
      // In case observer creation fails, gracefully fall back to visible
      setIsInView(true);
    }

    return () => {
      observer?.disconnect();
    };
  }, [isInView, options]);

  return { ref, isInView };
}
