import { useContext } from 'react';

import { IssueContext } from './IssueContext';

export function useIssueContext() {
  const issueContext = useContext(IssueContext);

  if (!issueContext) throw Error('Context cannot be null!');

  return issueContext;
}
