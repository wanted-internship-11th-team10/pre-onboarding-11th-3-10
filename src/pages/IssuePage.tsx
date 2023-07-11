import { Link } from 'react-router-dom';

import { getIssues } from '@/apis';
import { IssueItem } from '@/components/IssueItem';
import { useFetch } from '@/hooks/useFetch.ts';

export function IssuePage() {
  const { data: issues, error, isLoading } = useFetch(getIssues);

  if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <main>
      {issues?.map((issue) => (
        <Link to={`/${issue.number}`} key={issue.id} style={{ cursor: 'pointer' }}>
          <IssueItem key={issue.id} issue={issue} />
        </Link>
      ))}
    </main>
  );
}
