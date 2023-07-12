import { useCallback, useEffect, useRef } from 'react';

type IntersectHandler = () => void;

export function useInfiniteScroll(onIntersect: IntersectHandler, options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          onIntersect();
        }
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback, options]);

  return ref;
}
