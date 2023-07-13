import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchIssue, IssueData } from '@/api/issue';
import { wrapPromise } from '@/utils';
import { LocalCache } from '@/utils/cache';

const cache = new LocalCache();

export function useFetchIssue() {
  const [issue, setIssue] = useState<IssueData | Promise<IssueData>>();
  const { number } = useParams();

  useEffect(() => {
    if (!number) return;
    if (cache.has(number)) return;

    const promise = fetchIssue(number);
    setIssue(wrapPromise(promise));
  }, [number]);

  // cache
  useEffect(() => {
    if (!issue) return;
    if (cache.has(number + '')) return;
    cache.set(number + '', issue as IssueData);
  }, [number, issue]);

  return number ? cache.get(number) || issue : null;
}
