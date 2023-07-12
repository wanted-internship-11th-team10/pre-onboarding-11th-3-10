import { ReactNode } from 'react';

import { useFetchIssues } from '@/hook/useFetchIssues';
import { IssueContext } from './IssueContext';

export function IssueProvider({ children }: { children: ReactNode }) {
  const value = useFetchIssues();

  return <IssueContext.Provider value={value}>{children}</IssueContext.Provider>;
}
