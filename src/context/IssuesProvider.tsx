import { ReactNode, useEffect, useState } from 'react';

import { IssuesContext } from './IssuesContext';
import { getIssues } from '../api';
import { Issue } from '../model';

export const IssuesProvider = ({ children }: { children: ReactNode }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const selectIssue = (issue: Issue | null) => setSelectedIssue(issue);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const issues = await getIssues({ user: 'facebook', repo: 'react' });
        setIssues(issues);
      } catch (err) {
        console.error(err);
      }
    };

    fetchIssues();
  }, []);

  return <IssuesContext.Provider value={{ issues, selectedIssue, selectIssue }}>{children}</IssuesContext.Provider>;
};
