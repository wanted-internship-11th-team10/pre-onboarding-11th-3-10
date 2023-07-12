import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { useIssueContext } from '@/context/useIssueContext';
import { Advertise } from './Advertise';
import { IssueInfo } from './IssueInfo';

function isAdCell(index: number) {
  return index !== 0 && index % 4 === 0;
}

export function IssueList() {
  const issues = useIssueContext();
  const navigate = useNavigate();

  const handleClickIssue = (number: number) => navigate(`${number}`);

  return (
    <>
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
    </>
  );
}

const Box = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 5px 0px #bcbcbc;
  margin-bottom: 20px;
  cursor: pointer;
`;
