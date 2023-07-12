import { styled } from 'styled-components';

import { PER_PAGE } from '@/api/issue';
import { IssueContext } from '@/context/IssueContext';
import { useFetchIssues } from '@/hook/useFetchIssues';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import { Loading } from './common/Loading';
import { IssueList } from './IssueList';

export function IssueProvider() {
  const [issues, isLoading, hasNextPage, fetchNextPage] = useFetchIssues(PER_PAGE);
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && hasNextPage) fetchNextPage();
  });

  return (
    <>
      <IssueContext.Provider value={issues}>
        <IssueList />
      </IssueContext.Provider>
      <Target ref={ref} />
      {isLoading && <Loading />}
    </>
  );
}

const Target = styled.div`
  height: 1px;
`;
