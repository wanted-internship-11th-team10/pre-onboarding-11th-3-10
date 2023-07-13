import { useEffect } from 'react';

import { Issue } from '@/types/issue';

type useInfinityScrollType = {
  issues: Issue[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollAnchor: React.RefObject<HTMLDivElement>;
};

function useInfinityScroll({ issues, setPage, scrollAnchor }: useInfinityScrollType) {
  useEffect(() => {
    const scrollPosition = Number(sessionStorage.getItem('scrollY'));

    if (scrollPosition && scrollAnchor.current) {
      window.scrollTo(0, scrollPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issues]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      sessionStorage.setItem('scrollY', String(currentScrollY));
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });

    if (scrollAnchor.current) {
      observer.observe(scrollAnchor.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer && observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issues, scrollAnchor]);
}

export default useInfinityScroll;
