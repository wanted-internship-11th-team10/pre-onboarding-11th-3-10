import { useCallback, useEffect, useRef, useState } from 'react';

// GYU-TODO: 시간나면 Suspense 도 구현하기
type useInfiniteFetchOption<T> = {
  perPage?: number;
  onSuccess?: (data: T[]) => void;
  onError?: (error?: unknown) => void;
  // suspense?: boolean;
  useErrorBoundary?: boolean;
  isCache?: boolean;
};

// GYU-TODO: 캐시 set으로 구현하기!! (귀찮...)
type InfiniteCache =
  | {
      data: any[];
      pageIndex: number;
      perPage: number;
    }
  | undefined;
let cache: InfiniteCache = undefined;
export function useInfiniteFetch<T>(
  fetcher: (pageIndex: number, perPage: number) => Promise<T[]>,
  { perPage = 5, onSuccess, onError, useErrorBoundary = false, isCache = false }: useInfiniteFetchOption<T> = {},
) {
  const pageIndexRef = useRef(1);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isCache && cache) return;
    if (data.length) {
      return;
    }
    fetch();
  }, []);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const newData = await fetcher.apply(null, [pageIndexRef.current++, perPage]);
      setData((prev) => [...prev, ...newData]);

      cache = {
        data: cache ? [...cache.data, ...newData] : [...newData],
        perPage: perPage,
        pageIndex: pageIndexRef.current,
      };
      onSuccess && onSuccess(data);
    } catch (error: any) {
      setError(error);
      onError && onError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ErrorBoundary 용
  if (useErrorBoundary && error) {
    throw new Error(error);
  }

  return { isLoading: isLoading || !data, data: isCache && cache ? cache.data : data, error, onNextFetch: fetch };
}
