import { Issue } from '@/apis';
import * as S from './IssueItem.styles.tsx';

interface IssueItemProps {
  issue: Issue;
}

// GYU-TODO: 논의해보기! onClick 을 전송해서 routing 기능을 할지? 아니면 상위에 Link 를 전달할지!
export function IssueItem({ issue }: IssueItemProps) {
  const { title, comments, number, user, created_at } = issue;
  return (
    <S.IssueItemWrapper>
      <S.IssueItemContainer>
        <S.ItemContentsWrapper>
          <S.Title>
            #{number} {title}
          </S.Title>
          <S.Summary>
            타이틀 작성자: {user?.login}, 작성일: {covertKoreaTime(created_at)}
          </S.Summary>
        </S.ItemContentsWrapper>
        <S.Comment>코멘트: {comments}</S.Comment>
      </S.IssueItemContainer>
    </S.IssueItemWrapper>
  );
}

function covertKoreaTime(date: string) {
  return new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
