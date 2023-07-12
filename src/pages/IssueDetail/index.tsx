import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Error from '@/components/Error';
import IssueMarkDownViewer from '@/components/IssueMarkDownViewer';
import { IssueContext } from '@/context/IssueContext';
import { Issue } from '@/types/issue';
import { BottomBox, IssueContainer, IssueTitleContainer, LeftBox, ProfileImgBox, RightBox, TopBox } from './style';

function IssueDetail() {
  const { id } = useParams();
  const { issues } = useContext(IssueContext);
  const [selectedIssue, setSelectedIssue] = useState<Issue>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (issues && id) {
      const selectedIssue = issues?.find((issue) => issue.number === parseInt(id));
      if (!selectedIssue) {
        setError(true);
      } else {
        setSelectedIssue(selectedIssue);
      }
    }
  }, [issues, id]);

  if (error) {
    return <Error message={'게시글이 없습니다.'} />;
  }

  return (
    <IssueContainer>
      {selectedIssue && (
        <>
          <IssueTitleContainer>
            <ProfileImgBox>
              <img src={selectedIssue.user.avatar_url} alt="프로필" width="50" height="50" />
            </ProfileImgBox>
            <div>
              <LeftBox>
                <TopBox>
                  <div>#{selectedIssue.number}</div>
                  <div>{selectedIssue.title}</div>
                </TopBox>
                <BottomBox>
                  <div>작성자: {selectedIssue.user.login},</div>
                  <div>작성일: {selectedIssue.created_at.slice(0, 10)}</div>
                </BottomBox>
              </LeftBox>
              <RightBox>코멘트 {selectedIssue.comments}</RightBox>
            </div>
          </IssueTitleContainer>
          <IssueMarkDownViewer content={selectedIssue.body} />
        </>
      )}
    </IssueContainer>
  );
}

export default IssueDetail;
