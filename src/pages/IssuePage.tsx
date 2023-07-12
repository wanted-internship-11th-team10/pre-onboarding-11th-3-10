import { Link } from 'react-router-dom';

import { getIssues, Issue } from '@/apis';
import { IssueItem } from '@/components/IssueItem';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useInfiniteFetch } from '@/hooks/useInfiniteFetch.ts';

export function IssuePage() {
  const {
    data: issues,
    // error,
    isLoading,
    onNextFetch,
  } = useInfiniteFetch<Issue>(getIssues, {
    // useErrorBoundary: true,
  });

  return (
    <main>
      {/* GYU-TODO: 고민 리스트로 추출할까? */}
      {issues.map((issue) => (
        <Link to={`/${issue.number}`} key={issue.id} style={{ cursor: 'pointer' }}>
          <IssueItem key={issue.id} issue={issue} />
        </Link>
      ))}
      {isLoading && <LoadingSpinner isLoading isFullWidth />}
      <button onClick={onNextFetch}>더보기</button>
    </main>
  );
}
