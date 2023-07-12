import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import { fetchIssue, IssueData } from '@/api/issue';
import { IssueInfo } from './IssueInfo';

export function IssueContent() {
  const { number } = useParams();
  const [issue, setIssue] = useState<IssueData>();

  useEffect(() => {
    if (!number) return;

    fetchIssue(number).then((res) => setIssue(res));
  }, [number]);

  return (
    <div>
      {issue && (
        <Container>
          <ImgWrapper>
            <img src={issue.user?.avatar_url} />
          </ImgWrapper>
          <IssueInfo
            issueNumber={issue.number}
            title={issue.title}
            author={issue.user?.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
        </Container>
      )}
      <Divider />
      <ReactMarkdown>{issue?.body ?? ''}</ReactMarkdown>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
`;

const Divider = styled.div`
  height: 2px;
  background-color: gray;
  margin: 30px 0;
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
