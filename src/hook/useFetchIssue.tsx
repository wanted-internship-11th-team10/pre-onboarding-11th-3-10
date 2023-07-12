import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchIssue, IssueData } from '@/api/issue';
import { wrapPromise } from '@/utils';

export function useFetchIssue() {
  const [issue, setIssue] = useState<IssueData | Promise<IssueData>>();
  const { number } = useParams();

  useEffect(() => {
    if (!number) return;

    const promise = fetchIssue(number);
    setIssue(wrapPromise(promise));
  }, [number]);

  return issue;
}
