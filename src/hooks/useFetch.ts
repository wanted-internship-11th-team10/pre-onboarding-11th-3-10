import { useEffect, useState } from 'react';

type UseFetchOption<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error?: unknown) => void;
  // suspense?: boolean;
  useErrorBoundary?: boolean;
  depth?: any[];
};

// GYU-TODO: 시간나면 Suspense 도 구현하기
export function useFetch<T>(
  fetcher: () => Promise<T>,
  { onSuccess, onError, useErrorBoundary = false, depth = [] }: UseFetchOption<T> = {},
) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetcher();
        setData(data);
        onSuccess && onSuccess(data);
      } catch (error: any) {
        setError(error);
        onError && onError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [...depth]);

  // ErrorBoundary 용
  if (useErrorBoundary && error) {
    throw new Error(error);
  }

  return { isLoading: isLoading || !data, data, error };
}
