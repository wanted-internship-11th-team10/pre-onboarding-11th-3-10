import { useContext } from 'react';

import { IssueContext } from './Context';

export function useIssueContext() {
  const context = useContext(IssueContext);

  if (context) return context;

  throw Error('context cannot be null');
}
