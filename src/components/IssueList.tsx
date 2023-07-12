import { styled } from 'styled-components';

import { PER_PAGE } from '@/api/issue';
import { useFetchIssues } from '@/hook/useFetchIssues';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import { Loading } from './common/Loading';
import { Issues } from './Issues';

export function IssueList() {
  const [issues, isLoading, hasNextPage, fetchNextPage] = useFetchIssues(PER_PAGE);
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && hasNextPage) fetchNextPage();
  });

  return (
    <div>
      <Issues issues={issues} />
      <Target ref={ref} />
      {isLoading && <Loading />}
    </div>
  );
}

const Target = styled.div`
  height: 1px;
`;
