import { useEffect, useState } from 'react';

import { fetchGithubIssues, IssueData } from '@/api';

export function useFetchIssues(
  size: number,
): [data: IssueData[], isLoading: boolean, hasNextPage: boolean, fetchNextPage: () => void] {
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IssueData[]>([]);

  const fetchNextPage = () => setPage((page) => page + 1);

  useEffect(() => {
    fetchGithubIssues().then((res) => {
      if (res.length < size) setHasNextPage(false);
      setData(res);
      setPage(1);
      setIsLoading(false);
    });
  }, [size]);

  useEffect(() => {
    if (page > 1) {
      setIsLoading(true);
      fetchGithubIssues(page).then((res) => {
        if (res.length < size) setHasNextPage(false);
        setData((prev) => [...prev, ...res]);
        setIsLoading(false);
      });
    }
  }, [page, size]);

  return [data, isLoading, hasNextPage, fetchNextPage];
}
