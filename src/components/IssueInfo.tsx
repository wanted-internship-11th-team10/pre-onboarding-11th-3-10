import dayjs from 'dayjs';

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
      <div>
        <span>#{issueNumber}</span>
        <span> {title}</span>
      </div>
      <div>author: {author ?? 'none'}</div>
      <div>
        <span>작성일: {formatDate(created_at)}</span>
      </div>
      <div>comments: {comments}</div>
    </div>
  );
}
