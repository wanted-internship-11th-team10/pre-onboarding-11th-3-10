import { useCallback, useEffect, useRef, useState } from 'react';

type useInfiniteFetchOption<T> = {
  onSuccess?: (data: T[]) => void;
  onError?: (error?: unknown) => void;
  // suspense?: boolean;
  useErrorBoundary?: boolean;
};

// GYU-TODO: 시간나면 Suspense 도 구현하기
export function useInfiniteFetch<T>(
  fetcher: (pageIndex: number, perPage: number) => Promise<T[]>,
  { onSuccess, onError, useErrorBoundary = false }: useInfiniteFetchOption<T> = {},
) {
  const pageIndexRef = useRef(1);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetcher(pageIndexRef.current++, 5);
      setData((prev) => [...prev, ...data]);
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

  return { isLoading: isLoading || !data, data, error, onNextFetch: fetch };
}
