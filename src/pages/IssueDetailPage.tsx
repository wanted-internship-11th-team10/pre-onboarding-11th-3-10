import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getIssue } from '@/apis';
import { IssueItem } from '@/components/IssueItem';
import { Avatar } from '@/components/ui/Avatar';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useFetch } from '@/hooks/useFetch.ts';
import * as S from './IssueDetailPage.styles.tsx';

export function IssueDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: issue, isLoading } = useFetch(() => getIssue(params.id!), {
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
