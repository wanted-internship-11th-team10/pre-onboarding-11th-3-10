import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AdImage from '@/assets/광고.png';
import Error from '@/components/Error';
import IssueCard from '@/components/IssueCard';
import Loader from '@/components/Loader';
import { IssueContext } from '@/context/IssueContext';
import { Issue } from '@/types/issue';
import { AdBox, IssueListContainer } from './style';

function IssueList() {
  const navigate = useNavigate();
  const { loading, error, issues } = useContext(IssueContext);
  const [issueList, setIssueList] = useState<(Issue | null)[]>([]);

  useEffect(() => {
    const issueList: (Issue | null)[] = [];
    issues.forEach((issue, index) => {
      issueList.push(issue);
      if ((index + 1) % 4 === 0) {
        issueList.push(null);
      }

      console.log(issueList);
      setIssueList(issueList);
    });
  }, [issues]);

  const clickToDetail = (id: number) => {
    navigate(`/${id}`);
  };

  const clickAd = () => {
    window.open('https://www.wanted.co.kr/', '_blank');
  };

  if (error) {
    return <Error message={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <IssueListContainer>
      {issueList?.map((issue, index) => {
        if (issue) {
          return (
            <div key={issue.id} onClick={() => clickToDetail(issue.number)}>
              <IssueCard
                id={issue.id}
                state={issue.state}
                number={issue.number}
                title={issue.title}
                user={issue.user}
                created_at={issue.created_at}
                comments={issue.comments}
                body={issue.body}
                repository_url={issue.repository_url}
              />
            </div>
          );
        } else {
          return (
            <AdBox key={index} onClick={() => clickAd()}>
              <img src={AdImage} alt="광고" />
            </AdBox>
          );
        }
      })}
    </IssueListContainer>
  );
}

export default IssueList;
