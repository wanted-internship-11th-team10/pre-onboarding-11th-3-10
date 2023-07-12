import { useIssues } from '@/context/IssuesContext';

export const Detail = () => {
  const { selectedIssue: issue } = useIssues();

  if (issue == null) return <div>No data</div>;

  return <div>{issue.body}</div>;
};
