import { ReactNode, useCallback, useState } from 'react';

import { IssuesContext } from './IssuesContext';
import { getIssues } from '../api';
import { Issue } from '../model';

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const selectIssue = (issue: Issue | null) => setSelectedIssue(issue);

  const fetchIssues = useCallback(async () => {
    setLoading(true);

    try {
      const issues = await getIssues(page);
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
