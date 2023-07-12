import { getIssues, Issue } from '@/apis';
import { IssueList } from '@/components/IssueList';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
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
      <IssueList issues={issues} />
      {isLoading && <LoadingSpinner isLoading isFullWidth />}
      <button onClick={onNextFetch}>더보기</button>
    </main>
  );
}
