import { useCallback, useEffect, useState } from 'react';

import { LocalCache, promiseWrapper } from '@/utils';

const cache = new LocalCache<string, any>();

export function useFetch<T>(fetcher: () => Promise<T>, { queryKey, ...option }: UseFetchOption<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>(); // suspense 용 처리

  const { suspense = false } = option;

  // 마운팅되면 데이터 요청 (이미 캐시되어있다면 요청하지 않음)
  useEffect(() => {
    if (cache.has(queryKey)) return;
    fetch();
  }, []);

  // suspense 활성화시 수행되는 로직
  useEffect(() => {
    if (!suspense) return;
    if (!data) return;
    if (cache.has(queryKey)) return;
    cache.set(queryKey, data);
  }, [queryKey, data]);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      // 데이터 요청 방식이 suspense 인 경우와 일반 경우로 나누어져 있어 따로 처리
      if (suspense) {
        const promise = fetcher();
        setData(promiseWrapper(promise));
      } else {
        const data = await fetcher();
        cache.set(queryKey, data);
      }
      option.onSuccess && option.onSuccess();
    } catch (error: any) {
      setError(error);
      option.onError && option.onError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cacheData = cache.get(queryKey) as T;
  return {
    isLoading: isLoading || !cacheData, //
    data: cacheData ?? data,
    error,
  };
}

type UseFetchOption<T> = {
  queryKey: string;
  onSuccess?: (data?: T) => void;
  onError?: (error?: unknown) => void;
  suspense?: boolean;
};
