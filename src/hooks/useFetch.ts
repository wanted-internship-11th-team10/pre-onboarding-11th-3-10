import { useEffect, useState } from 'react';

type UseFetchOption<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error?: unknown) => void;
};
export function useFetch<T>(fetcher: () => Promise<T>, { onSuccess, onError }: UseFetchOption<T> = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetcher();
        // wait(2); // GYU-TODO: DELETE 테스트용
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
  }, [fetcher, onError, onSuccess]);

  return { isLoading: isLoading || !data, data, error };
}

/*
function wait(sec: number) {
  const start = Date.now();
  let now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
*/
