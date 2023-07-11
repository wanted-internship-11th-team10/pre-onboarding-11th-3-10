import { Fragment } from 'react';
import { styled } from 'styled-components';

import { PER_PAGE } from '@/api';
import { useFetchIssues } from '@/hook/useFetchIssues';
import { useInfiniteScroll } from '@/hook/useInfiniteScroll';
import { Advertise } from './Advertise';
import { IssueInfo } from './IssueInfo';
import { Loading } from './Loading';

function isAdCell(index: number) {
  return index !== 0 && index % 4 === 0;
}

export function IssueList() {
  const [issues, isLoading, hasNextPage, fetchNextPage] = useFetchIssues(PER_PAGE);
  const ref = useInfiniteScroll(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (!isLoading && hasNextPage) fetchNextPage();
    },
    { threshold: 0.8 },
  );

  return (
    <div>
      {issues.map((issue, index) => (
        <Fragment key={issue.id}>
          {isAdCell(index) && <Advertise />}
          <IssueInfo
            issueNumber={issue.number}
            title={issue.title}
            author={issue.user?.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
        </Fragment>
      ))}
      {isLoading && <Loading />}
      <Target ref={ref} />
    </div>
  );
}

const Target = styled.div`
  height: 100px;
`;
