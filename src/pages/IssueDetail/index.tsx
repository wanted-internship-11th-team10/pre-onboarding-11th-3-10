import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import IssueMarkDownViewer from '@/components/IssueMarkDownViewer';
import { IssueContext } from '@/context/IssueContext';
import { IssueType } from '@/types/issue';

function IssueDetail() {
  const { id } = useParams();
  const issue = useContext(IssueContext);
  const [selectedIssue, setSelectedIssue] = useState<IssueType>();

  useEffect(() => {
    if (issue && id) {
      const selectedIssue = issue?.find((issue) => issue.number === parseInt(id));
      setSelectedIssue(selectedIssue);
    }
  }, [issue, id]);

  if (!selectedIssue) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div>이슈번호 {selectedIssue.number}</div>
      <div>이슈제목 {selectedIssue.title}</div>
      <div>작성자 {selectedIssue.user.login}</div>
      <div>작성일 {selectedIssue.created_at}</div>
      <div>코멘트 수 {selectedIssue.comments}</div>
      <div>작성자 프로필 이미지 {selectedIssue.user.avatar_url}</div>
      <IssueMarkDownViewer content={selectedIssue.body} />
    </>
  );
}

export default IssueDetail;
