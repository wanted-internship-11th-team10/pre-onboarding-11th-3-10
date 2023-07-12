import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AdImage from '@/assets/광고.png';
import Error from '@/components/Error';
import IssueCard from '@/components/IssueCard';
import Loader from '@/components/Loader';
import { IssueContext } from '@/context/IssueContext';

function IssueList() {
  const navigate = useNavigate();
  const { loading, error, issues } = useContext(IssueContext);

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
    <>
      {issues?.map((issue, index) => (
        <div key={issue.id}>
          {(index + 1) % 5 === 0 ? (
            <div onClick={() => clickAd()}>
              <img src={AdImage} alt="광고" width="300" height="100" />
            </div>
          ) : (
            <div onClick={() => clickToDetail(issue.number)}>
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
          )}
        </div>
      ))}
    </>
  );
}

export default IssueList;
