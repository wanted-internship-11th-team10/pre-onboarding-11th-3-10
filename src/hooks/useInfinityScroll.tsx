import { useEffect } from 'react';

import { Issue } from '@/types/issue';

type useInfinityScrollType = {
  issues: Issue[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollAnchor: React.RefObject<HTMLDivElement>;
};

function useInfinityScroll({ issues, setPage, scrollAnchor }: useInfinityScrollType) {
  // 이전 스크롤 위치 가져오기
  useEffect(() => {
    const scrollPosition = Number(sessionStorage.getItem('scrollY'));

    if (scrollPosition && scrollAnchor.current) {
      window.scrollTo(0, scrollPosition);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issues]);

  useEffect(() => {
    // 1. observer 활성화
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

    // 2. scroll 위치 저장
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      sessionStorage.setItem('scrollY', String(currentScrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer && observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issues, scrollAnchor]);
}

export default useInfinityScroll;
