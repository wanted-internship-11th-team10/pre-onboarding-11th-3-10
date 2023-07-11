import { useEffect, useState } from 'react';

import { fetchIssueList, IssueListDataType } from '@/api';

export function IssueList() {
  const [issues, setIssues] = useState<IssueListDataType[]>([]);

  useEffect(() => {
    fetchIssueList().then((res) => setIssues(res));
  }, []);

  return (
    <div>
      {issues.map((issue) => (
        <div>{issue.title}</div>
      ))}
    </div>
  );
}
