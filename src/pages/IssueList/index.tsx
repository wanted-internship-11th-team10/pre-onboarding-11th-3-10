import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AdImage from '@/assets/광고.png';
import Error from '@/components/Error';
import IssueCard from '@/components/IssueCard';
import Loader from '@/components/Loader';
import { IssueContext } from '@/context/IssueContext';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import { Issue } from '@/types/issue';
import { AdBox, IssueListContainer } from './style';

function IssueList() {
  const navigate = useNavigate();
  const { loading, error, issues, setPage } = useContext(IssueContext);
  const [issueList, setIssueList] = useState<(Issue | null)[]>([]);
  const scrollAnchor = useRef(null);

  useEffect(() => {
    const issueList: (Issue | null)[] = [];
    issues.forEach((issue, index) => {
      issueList.push(issue);
      if ((index + 1) % 4 === 0) {
        issueList.push(null);
      }
      setIssueList(issueList);
    });
  }, [issues]);

  // 무한 스크롤 & 이전 스크롤 유지
  useInfinityScroll({ issues, setPage, scrollAnchor });

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
      {issueList?.map((issue, index) => (
        <div key={index}>
          {issue ? (
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
          ) : (
            <AdBox onClick={() => clickAd()}>
              <img src={AdImage} alt="광고" />
            </AdBox>
          )}
        </div>
      ))}
      <div ref={scrollAnchor}></div>
    </IssueListContainer>
  );
}

export default IssueList;
