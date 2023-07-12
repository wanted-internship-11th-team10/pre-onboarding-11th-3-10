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
    <div>
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
        <Comment>
          <GoComment />
          {comments}
        </Comment>
      </Detail>
    </div>
  );
}

const Title = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;

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

const Comment = styled.div`
  display: flex;

  svg {
    margin-top: 1px;
    margin-right: 3px;
  }
`;
