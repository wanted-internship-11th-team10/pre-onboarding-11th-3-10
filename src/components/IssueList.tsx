import { Fragment } from 'react';
import { styled } from 'styled-components';

import { PER_PAGE } from '@/api/issue';
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
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && hasNextPage) fetchNextPage();
  });

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
      <Target ref={ref} />
      {isLoading && <Loading />}
    </div>
  );
}

const Target = styled.div`
  height: 1px;
`;
