
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { Issue } from '@/service/issues';
import dateCalculator from '@/utils/dateCalculator';

type Props = {
  issue: Issue;
}

export default function IssueItem({issue}: Props) {
  const navigate = useNavigate();
  const {number, title, author, created_at, comments} = issue;

  const handleClick = () => {
    navigate(`/detail/${number}`, {state: {issue}})
  }
  return (
    <IssueItemContainer onClick={handleClick}>
      <Div>
        <Title>
          <p># {number}</p>
          <P>{title}</P>
        </Title>
        <SubTitle>
          <p>작성자: {author}</p>
          <p>작성일: {dateCalculator(created_at)}</p>
        </SubTitle>
      </Div>
      <Comment>코멘트 : {comments}</Comment>
    </IssueItemContainer>
  )
}

const Display = styled.div`
  display: flex;
  gap: 15px;
  line-height: 0;
`

const IssueItemContainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0.5rem;
  border-bottom: 1px solid black;
  font-size: 1rem;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Title = styled(Display)`
  width: 750px;
  font-weight: semi-bold;
  overflow: hidden;
`

const P = styled.p`
  width: 680px;
  white-space: nowrap;
`

const SubTitle = styled(Display)`
  font-size: 0.8rem;
`

const Comment = styled.p`
  font-size: 0.8rem;
`