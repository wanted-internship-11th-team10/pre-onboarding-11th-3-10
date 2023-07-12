import { Issue } from '@/types/issue';
import { CardContainer } from './style';

function IssueCard({ number, title, user, created_at, comments, onClick }: Issue) {
  return (
    <CardContainer onClick={onClick}>
      <div>이슈번호 {number}</div>
      <div>이슈제목 {title}</div>
      <div>작성자 {user.login}</div>
      <div>작성일 {created_at}</div>
      <div>코멘트 수 {comments}</div>
    </CardContainer>
  );
}

export default IssueCard;
