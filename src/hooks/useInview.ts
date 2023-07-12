import { useCallback, useEffect, useRef, useState } from 'react';

interface Option extends IntersectionObserverInit {
  onInView?: () => void;
}
/**
 * @link https://www.npmjs.com/package/react-intersection-observer
 */
export function useInView<T extends HTMLElement>(option?: Option) {
  const observerRef = useRef<T>(null);
  const [inView, setInVIew] = useState(false);

  const handleObserver: IntersectionObserverCallback = useCallback(
    ([target]: IntersectionObserverEntry[]) => {
      if (target.isIntersecting) {
        option?.onInView && option.onInView();
      }
      setInVIew(target.isIntersecting);
    },
    [option],
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return { ref: observerRef, inView };
}
