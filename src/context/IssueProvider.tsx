import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { getIssue } from '@/api/issue';
import { Issue } from '@/types/issue';
import { IssueContext } from './IssueContext';

export function IssueProvider({ children }: PropsWithChildren) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const scrollAnchor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getIssue(page)
      .then((res) => {
        setIssues([...issues, ...res]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <IssueContext.Provider value={{ loading, error, issues, page, setPage, scrollAnchor }}>
      {children}
    </IssueContext.Provider>
  );
}
