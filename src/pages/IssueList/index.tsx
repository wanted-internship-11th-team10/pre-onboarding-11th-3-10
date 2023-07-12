import { useContext } from 'react';

import IssueCard from '@/components/IssueCard';
import { IssueContext } from '@/context/IssueContext';

function IssueList() {
  const issue = useContext(IssueContext);

  return (
    <>
      {issue?.map((issue) => (
        <IssueCard
          key={issue.id}
          id={issue.id}
          state={issue.state}
          number={issue.number}
          title={issue.title}
          user={issue.user}
          created_at={issue.created_at}
          comments={issue.comments}
          body={issue.body}
        />
      ))}
    </>
  );
}

export default IssueList;
