import { ReactNode } from 'react';

import { PER_PAGE } from '@/api/issue';
import { useFetchIssues } from '@/hook/useFetchIssues';
import { IssueContext } from './IssueContext';

export function IssueProvider({ children }: { children: ReactNode }) {
  const value = useFetchIssues(PER_PAGE);

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
