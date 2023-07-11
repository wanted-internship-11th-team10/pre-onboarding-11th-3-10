import { useContext } from 'react';

import { IssueContext } from '@/context/IssueContext';

function IssueList() {
  const issue = useContext(IssueContext);

  return (
    <>
      {issue?.map((issue) => (
        <div key={issue.id}>
          <div>이슈번호 {issue.number}</div>
          <div>이슈제목 {issue.title}</div>
          <div>작성자 {issue.user.login}</div>
          <div>작성일 {issue.created_at}</div>
          <div>코멘트 수 {issue.comments}</div>
          <div>작성자 프로필 이미지 {issue.user.avatar_url}</div>
          <div>본문 {issue.body}</div>
        </div>
      ))}
    </>
  );
}

export default IssueList;
