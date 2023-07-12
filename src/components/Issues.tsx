import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { IssueData } from '@/api/issue';
import { Advertise } from './Advertise';
import { IssueHeader } from './IssueHeader';

function isAdCell(index: number) {
  return index !== 0 && index % 4 === 0;
}

export function Issues({ issues }: { issues: IssueData[] }) {
  const navigate = useNavigate();

  const handleClickIssue = (number: number) => navigate(`${number}`);

  return (
    <>
      {issues.map((issue, index) => (
        <Fragment key={issue.id}>
          {isAdCell(index) && <Advertise />}
          <Box onClick={() => handleClickIssue(issue.number)}>
            <IssueHeader
              issueNumber={issue.number}
              title={issue.title}
              author={issue.user?.login}
              created_at={issue.created_at}
              comments={issue.comments}
            />
          </Box>
        </Fragment>
      ))}
    </>
  );
}

const Box = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #bcbcbc;
  margin-bottom: 20px;
  cursor: pointer;
`;
