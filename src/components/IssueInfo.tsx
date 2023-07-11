import dayjs from 'dayjs';
import { GoComment } from 'react-icons/go';
import styled from 'styled-components';

interface IssueInfoProps {
  issueNumber: number;
  title: string;
  author: string | undefined;
  created_at: string;
  comments: number;
}

function formatDate(date: string) {
  return dayjs(date).format('YYYY년 MM월 DD일');
}

export function IssueInfo({ issueNumber, title, author, created_at, comments }: IssueInfoProps) {
  return (
    <Container>
      <Title>
        <div>#{issueNumber}</div>
        <div>{title}</div>
      </Title>
      <Detail>
        <div>
          <span>작성자: {author ?? 'none'}</span>
          <span> | </span>
          <span>작성일: {formatDate(created_at)}</span>
        </div>
        <div>
          <GoComment /> {comments}
        </div>
      </Detail>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-raduis: 8px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  display: flex;
  font-size: 20px;
  padding: 10px 0;

  div:first-child {
    margin-right: 10px;
    font-weight: 500;
  }

  div:last-child {
    font-weight: 700;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;
