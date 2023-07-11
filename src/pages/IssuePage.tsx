import { getIssues } from '@/apis';
import { IssueItem } from '@/components/IssueItem';
import { useFetch } from '@/hooks/useFetch.ts';

export function IssuePage() {
  const { data: issues, error, isLoading } = useFetch(getIssues);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  return (
    <>
      {issues?.map((issue) => (
        <li style={{ cursor: 'pointer' }}>
          <IssueItem key={issue.id} issue={issue} />
        </li>
      ))}
    </>
  );
}
