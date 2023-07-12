import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [issues, isLoading, hasNextPage, fetchNextPage] = useFetchIssues(PER_PAGE);
  const ref = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (!isLoading && hasNextPage) fetchNextPage();
  });

  const handleClickIssue = (number: number) => navigate(`${number}`);

  return (
    <div>
      {issues.map((issue, index) => (
        <Fragment key={issue.id}>
          {isAdCell(index) && <Advertise />}
          <Box onClick={() => handleClickIssue(issue.number)}>
            <IssueInfo
              issueNumber={issue.number}
              title={issue.title}
              author={issue.user?.login}
              created_at={issue.created_at}
              comments={issue.comments}
            />
          </Box>
        </Fragment>
      ))}
      <Target ref={ref} />
      {isLoading && <Loading />}
    </div>
  );
}

const Box = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #bcbcbc;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Target = styled.div`
  height: 1px;
`;
