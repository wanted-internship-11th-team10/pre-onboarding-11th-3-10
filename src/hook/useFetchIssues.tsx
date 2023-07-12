import { useEffect, useState } from 'react';

import { fetchGithubIssues, IssueData, PER_PAGE } from '@/api/issue';

export type InfiniteQuery = [data: IssueData[], isLoading: boolean, hasNextPage: boolean, fetchNextPage: () => void];

export function useFetchIssues(size = PER_PAGE): InfiniteQuery {
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IssueData[]>([]);

  const fetchNextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    setIsLoading(true);

    fetchGithubIssues(page).then((res) => {
      if (res.length < size) setHasNextPage(false);

      setData((prev) => [...prev, ...res]);
      setIsLoading(false);
    });
  }, [page, size]);

  return [data, isLoading, hasNextPage, fetchNextPage];
}
