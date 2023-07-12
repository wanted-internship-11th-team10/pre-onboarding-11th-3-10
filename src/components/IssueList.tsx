import { styled } from 'styled-components';

import { useIssueContext } from '@/context/useIssueContext';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import { Loading } from './common/Loading';
import { Issues } from './Issues';

export function IssueList() {
  const [issues, isLoading, hasNextPage, fetchNextPage] = useIssueContext();
  const ref = useInfiniteScroll(() => {
    if (!isLoading && hasNextPage) fetchNextPage();
  });

  return (
    <>
      <Issues issues={issues} />
      <Target ref={ref} />
      {isLoading && <Loading />}
    </>
  );
}

const Target = styled.div`
  height: 1px;
`;
