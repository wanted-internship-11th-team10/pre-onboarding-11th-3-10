import { PropsWithChildren, useEffect, useState } from 'react';

import { IssueType } from '@/types/issue';
import { IssueContext } from './IssueContext';
import * as api from '../api/issue';

export function IssueProvider({ children }: PropsWithChildren) {
  const [issues, setIssues] = useState<IssueType[]>([]);

  useEffect(() => {
    api
      .getIssue()
      .then((res) => {
        setIssues(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <IssueContext.Provider value={issues}>{children}</IssueContext.Provider>;
}
