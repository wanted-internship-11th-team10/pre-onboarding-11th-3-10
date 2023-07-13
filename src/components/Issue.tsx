import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { styled } from 'styled-components';

import { IssueData } from '@/api/issue';
import { useFetchIssue } from '@/hook';
import style from '@/style/markdown-styles.module.css';
import { ScrollTop } from './common/ScrollTop';
import { IssueBanner } from './IssueBanner';

function isIssueDataType(object: object | undefined): object is IssueData {
  if (!object) return false;
  return 'title' in object;
}

export function Issue() {
  const issue = useFetchIssue();

  if (!issue) return;
  return (
    <div>
      {isIssueDataType(issue) && (
        <ScrollTop>
          <Container>
            <ImgWrapper>
              <img src={issue.user?.avatar_url} />
            </ImgWrapper>
            <IssueBanner
              issueNumber={issue.number}
              title={issue.title}
              author={issue.user?.login}
              created_at={issue.created_at}
              comments={issue.comments}
            />
          </Container>
          <BodyContainer>
            <ReactMarkdown className={style.reactMarkDown} remarkPlugins={[remarkGfm]}>
              {issue.body ?? ''}
            </ReactMarkdown>
          </BodyContainer>
        </ScrollTop>
      )}
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px 0px #bcbcbc;
  border-radius: 5px;
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

const BodyContainer = styled.div`
  padding: 30px;
  box-shadow: 0px 0px 5px 0px #bcbcbc;
  border-radius: 5px;
`;
