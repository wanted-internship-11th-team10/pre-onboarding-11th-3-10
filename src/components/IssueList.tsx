import { useEffect, useState } from 'react';

import { fetchGithubIssues, IssueData } from '@/api';
import { Advertise } from './Advertise';
import { IssueInfo } from './IssueInfo';

export function IssueList() {
  const [issues, setIssues] = useState<IssueData[]>([]);

  useEffect(() => {
    fetchGithubIssues().then((res) => setIssues(res));
  }, []);

  return (
    <div>
      {issues.map((issue, index) =>
        (index + 1) % 5 === 0 ? (
          <Advertise key={`AD-${index}`} />
        ) : (
          <IssueInfo
            key={issue.id}
            issueNumber={issue.number}
            title={issue.title}
            author={issue.user?.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
        ),
      )}
    </div>
  );
}
