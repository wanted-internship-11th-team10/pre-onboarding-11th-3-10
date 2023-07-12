import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import IssueCard from '@/components/IssueCard';
import { IssueContext } from '@/context/IssueContext';

function IssueList() {
  const navigate = useNavigate();
  const issue = useContext(IssueContext);

  const clickToDetail = (id: number) => {
    navigate(`/${id}`);
  };

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
          onClick={() => clickToDetail(issue.number)}
        />
      ))}
    </>
  );
}

export default IssueList;
