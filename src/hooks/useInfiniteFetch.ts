import { useCallback, useEffect, useState } from 'react';

import { LocalCache } from '@/utils/cache.ts';

// GYU-TODO: 시간나면 Suspense 도 구현하기

const cache = new LocalCache<string, InfiniteCache<any>>();
export function useInfiniteFetch<T>(
  fetcher: (pageIndex: number, perPage: number) => Promise<T[]>,
  { queryKey, perPage = 5, onSuccess, onError, useErrorBoundary = false }: useInfiniteFetchOption<T>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cachedData = cache.get(queryKey) as InfiniteCache<T>;
      if (!cachedData) {
        return;
      }

      const newData = await fetcher.apply(null, [cachedData.pageIndex, perPage]);
      cache.set(queryKey, {
        data: [...cachedData.data, ...newData],
        pageIndex: cachedData.pageIndex + 1,
        perPage,
      });

      onSuccess && onSuccess(newData);
    } catch (error: any) {
      setError(error);
      onError && onError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cache.has(queryKey)) return;

    cache.set(queryKey, {
      data: [],
      pageIndex: 1,
      perPage,
    });
    fetch();
  }, [fetch, perPage, queryKey]);

  // ErrorBoundary 용
  if (useErrorBoundary && error) {
    throw new Error(error);
  }

  const data = (cache.get(queryKey)?.data || []) as T[];
  return {
    isLoading: isLoading || !data, //
    data: data,
    error,
    onNextFetch: fetch,
  };
}

type useInfiniteFetchOption<T> = {
  queryKey: string;
  perPage?: number;
  onSuccess?: (data: T[]) => void;
  onError?: (error?: unknown) => void;
  useErrorBoundary?: boolean;
  // suspense?: boolean;
};

type InfiniteCache<T> =
  | {
      data: T[];
      pageIndex: number;
      perPage: number;
    }
  | undefined;
