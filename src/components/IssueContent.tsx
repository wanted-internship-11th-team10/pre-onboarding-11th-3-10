import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { fetchIssue, IssueData } from '@/api/issue';
import { IssueInfo } from './IssueInfo';

export function IssueContent() {
  const { number } = useParams();
  const [issue, setIssue] = useState<IssueData>();

  useEffect(() => {
    if (!number) return;

    fetchIssue(number).then((res) => setIssue(res));
  }, [number]);

  return (
    <div>
      {issue && (
        <IssueInfo
          issueNumber={issue.number}
          title={issue.title}
          author={issue.user?.login}
          created_at={issue.created_at}
          comments={issue.comments}
        />
      )}
      <ReactMarkdown>{issue?.body ?? ''}</ReactMarkdown>
    </div>
  );
}
