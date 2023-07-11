import { IssueData } from '@/api';
import { IssueInfo } from './IssueInfo';

interface IssueItemProps {
  issue: IssueData;
}

export function IssueItem({ issue }: IssueItemProps) {
  const { number, title, user, created_at, comments } = issue;
  return (
    <IssueInfo issueNumber={number} title={title} author={user?.login} created_at={created_at} comments={comments} />
  );
}
