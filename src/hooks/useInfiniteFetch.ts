import { RefObject, useEffect } from 'react';

interface useInfiniteFetchProps<T> {
  targetRef: RefObject<T>;
  fetchCallback: () => void;
  threshold: number;
}

export const useInfiniteFetch = <T extends HTMLElement>(props: useInfiniteFetchProps<T>) => {
  const { targetRef, fetchCallback, threshold } = props;

  useEffect(() => {
    if (targetRef.current == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchCallback();
        }
      },
      { threshold },
    );
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [fetchCallback, targetRef, threshold]);

  return targetRef;
};
