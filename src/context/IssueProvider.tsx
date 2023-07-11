import { PropsWithChildren, useEffect, useState } from 'react';

import { IssueContext } from './IssueContext';
import * as api from '../api/issue';

interface IssueType {
  id: 1;
}

export function IssueProvider({ children }: PropsWithChildren) {
  const [Issues, setIssues] = useState<IssueType[]>([]);

  useEffect(() => {
    api.getIssue().then(setIssues).catch(console.error);
  }, []);

  return <IssueContext.Provider value={Issues}>{children}</IssueContext.Provider>;
}
