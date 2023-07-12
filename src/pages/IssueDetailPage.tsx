import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getIssue } from '@/apis';
import { IssueItem } from '@/components/IssueItem';
import { Avatar } from '@/components/ui/Avatar';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useIssue } from '@/context/issue/useIssue.tsx';
import { useFetch } from '@/hooks/useFetch.ts';
import * as S from './IssueDetailPage.styles.tsx';

export function IssueDetailPage() {
  const params = useParams<{ id: string }>();
  const { owner, repository } = useIssue();
  const { data: issue, isLoading } = useFetch(() => getIssue(owner, repository, params.id!), {
    useErrorBoundary: true,
  });

  if (isLoading || !issue) return <LoadingSpinner isLoading isFullWidth />;

  const { user, body } = issue;
  return (
    <main>
      <S.IssueDetailHeader>
        <Avatar src={user?.avatar_url || ''} />
        <IssueItem issue={issue} />
      </S.IssueDetailHeader>
      <S.IssueDetailContentWrapper>{body && <ReactMarkdown children={body} />}</S.IssueDetailContentWrapper>
    </main>
  );
}
