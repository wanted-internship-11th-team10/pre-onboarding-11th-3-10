import { useIssue } from '@/context/issue/useIssue.tsx';
import * as S from './Header.styles';

export function Header() {
  const { owner, repository } = useIssue();

  return (
    <S.Header>
      <S.Title>
        {owner} / {repository}
      </S.Title>
    </S.Header>
  );
}
