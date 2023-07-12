import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Error from '@/components/Error';
import IssueMarkDownViewer from '@/components/IssueMarkDownViewer';
import { IssueContext } from '@/context/IssueContext';
import { Issue } from '@/types/issue';

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
    <>
      {selectedIssue && (
        <>
          <div>이슈번호 {selectedIssue.number}</div>
          <div>이슈제목 {selectedIssue.title}</div>
          <div>작성자 {selectedIssue.user.login}</div>
          <div>작성일 {selectedIssue.created_at}</div>
          <div>코멘트 수 {selectedIssue.comments}</div>
          <div>작성자 프로필 이미지 {selectedIssue.user.avatar_url}</div>
          <IssueMarkDownViewer content={selectedIssue.body} />
        </>
      )}
    </>
  );
}

export default IssueDetail;
