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
    perPage: 5,
    // useErrorBoundary: true,
  });

  // GYU-TODO: 어떤 방법이 더 좋을까?
  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    // 방법1
    onInView: () => {
      if (!inView || isLoading || error) return;
      onNextFetch();
    },
  });

  // 방법2
  // useEffect(() => {
  //   if (!inView || isLoading) return;
  //   onNextFetch();
  // }, [inView, isLoading]);

  return (
    <main>
      <IssueList issues={issues} />
      {isLoading && <LoadingSpinner isLoading isFullWidth />}
      <div ref={inViewRef} />
    </main>
  );
}
