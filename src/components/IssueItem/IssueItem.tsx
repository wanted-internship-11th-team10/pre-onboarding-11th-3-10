import { Issue } from '@/apis';
import * as S from './IssueItem.styles.tsx';

interface IssueItemProps {
  issue: Issue;
}

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
