import { PropsWithChildren, useEffect, useState } from 'react';

import { Issue } from '@/types/issue';
import { IssueContext } from './IssueContext';
import * as api from '../api/issue';

export function IssueProvider({ children }: PropsWithChildren) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    api
      .getIssue()
      .then((res) => {
        setIssues(res);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, []);

  return <IssueContext.Provider value={{ loading, error, issues }}>{children}</IssueContext.Provider>;
}
