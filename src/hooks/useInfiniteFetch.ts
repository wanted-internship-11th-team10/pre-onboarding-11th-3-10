import { RefObject, useEffect } from 'react';

interface useInfiniteFetchProps<T> {
  targetRef: RefObject<T>;
  fetchCallback: () => void;
}

export const useInfiniteFetch = <T extends HTMLElement>({ targetRef, fetchCallback }: useInfiniteFetchProps<T>) => {
  useEffect(() => {
    if (targetRef.current == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchCallback();
        }
      },
      { threshold: 1 },
    );
    observer.observe(targetRef?.current);

    return () => observer.disconnect();
  }, [fetchCallback, targetRef]);

  return targetRef;
};
