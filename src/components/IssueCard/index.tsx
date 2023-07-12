import { Issue } from '@/types/issue';
import { BottomBox, CardContainer, LeftBox, RightBox, TopBox } from './style';

function IssueCard({ number, title, user, created_at, comments }: Issue) {
  return (
    <CardContainer>
      <LeftBox>
        <TopBox>
          <div>#{number}</div>
          <div>{title}</div>
        </TopBox>
        <BottomBox>
          <div>작성자: {user.login},</div>
          <div>작성일: {created_at.slice(0, 10)}</div>
        </BottomBox>
      </LeftBox>
      <RightBox>코멘트 {comments}</RightBox>
    </CardContainer>
  );
}

export default IssueCard;
