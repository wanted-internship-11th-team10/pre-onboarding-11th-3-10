import { useContext } from 'react';

import { IssueContext } from './IssueContext.tsx';

export function useIssue() {
  const issueContext = useContext(IssueContext);
  if (!issueContext) {
    throw new Error('Could not find issueContext');
  }
  return issueContext;
}
