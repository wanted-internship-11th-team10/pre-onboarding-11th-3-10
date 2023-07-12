import { useCallback, useEffect, useState } from 'react';

import { LocalCache } from '@/utils/cache.ts';

const cache = new LocalCache<string, any>();

// GYU-TODO: 시간나면 Suspense 도 구현하기
export function useFetch<T>(
  fetcher: () => Promise<T>,
  { onSuccess, onError, useErrorBoundary = false, queryKey }: UseFetchOption<T>,
) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cache.has(queryKey)) return;
    fetch();
  }, []);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetcher();
      cache.set(queryKey, data);
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

  const data = cache.get(queryKey) as T;
  return {
    isLoading: isLoading || !data, //
    data,
    error,
  };
}

type UseFetchOption<T> = {
  queryKey: string;
  onSuccess?: (data: T) => void;
  onError?: (error?: unknown) => void;
  useErrorBoundary?: boolean;
  // suspense?: boolean;
};
