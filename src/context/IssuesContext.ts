import { createContext, useContext } from 'react';

import { Issue } from '../model';

export const IssuesContext = createContext<{
  issues: Issue[];
  selectedIssue: Issue | null;
  selectIssue: (issue: Issue | null) => void;
  loading: boolean;
  fetchIssues: () => void;
} | null>(null);

export const useIssues = () => {
  const context = useContext(IssuesContext);
  if (context == null) {
    throw new Error('No IssuesContext');
  }
  return context;
};
