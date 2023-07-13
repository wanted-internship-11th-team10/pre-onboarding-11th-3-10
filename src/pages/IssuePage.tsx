import { getIssues, Issue } from '@/apis';
import { IssueList } from '@/components/IssueList';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useIssue } from '@/context/issue/useIssue.tsx';
import { useInfiniteFetch } from '@/hooks/useInfiniteFetch.ts';
import { useInView } from '@/hooks/useInview.ts';

export function IssuePage() {
  const { owner, repository } = useIssue();
  const {
    data: issues,
    error,
    isLoading,
    onNextFetch,
  } = useInfiniteFetch<Issue>((pageIndex, perPage) => getIssues(owner, repository, pageIndex, perPage), {
    queryKey: `issue/${owner}/${repository}`,
    perPage: 10,
  });

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    onInView: () => {
      if (!inView || isLoading || error) return;
      onNextFetch();
    },
  });

  return (
    <main>
      <IssueList issues={issues} />
      {isLoading && <LoadingSpinner isLoading isFullWidth />}
      <div ref={inViewRef} />
    </main>
  );
}
