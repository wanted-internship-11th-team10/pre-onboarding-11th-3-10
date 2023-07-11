import { IssueData } from '@/api';

interface IssueItemProps {
  issue: IssueData;
}

export function IssueItem({ issue }: IssueItemProps) {
  return <div>{issue.title}</div>;
}
