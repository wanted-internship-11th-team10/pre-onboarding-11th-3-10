import { useEffect, useState } from 'react';

import { fetchGithubIssues, IssueData } from '@/api';
import { IssueItem } from './IssueItem';

export function IssueList() {
  const [issues, setIssues] = useState<IssueData[]>([]);

  useEffect(() => {
    fetchGithubIssues().then((res) => setIssues(res));
  }, []);

  return (
    <div>
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </div>
  );
}
