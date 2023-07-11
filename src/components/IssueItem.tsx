import { IssueData } from '@/api';

interface IssueItemProps {
  issue: IssueData;
}

function formatDate(date: string) {
  return new Date(date).toDateString();
}

export function IssueItem({ issue }: IssueItemProps) {
  console.log(issue);
  return (
    <div>
      <div>
        <span>#{issue.number}</span>
        <span> {issue.title}</span>
      </div>
      <div>
        <span>author: {issue.user?.login}</span>
        <span> opened on {formatDate(issue.created_at)}</span>
      </div>
      <div>comments: {issue.comments}</div>
    </div>
  );
}
