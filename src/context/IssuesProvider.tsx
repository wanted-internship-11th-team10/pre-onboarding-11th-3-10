import { ReactNode, useCallback, useState } from 'react';

import { getIssues } from '@/shared/api';
import { Issue } from '@/shared/model';
import { IssuesContext } from './IssuesContext';

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const selectIssue = (issue: Issue | null) => setSelectedIssue(issue);

  const fetchIssues = useCallback(async () => {
    setLoading(true);
    const body = { org: 'facebook', repo: 'react', page };

    try {
      const issues = await getIssues(body);
      setIssues((prev) => [...prev, ...issues]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }, [page]);

  const value = { issues, selectedIssue, selectIssue, loading, fetchIssues };

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
};
