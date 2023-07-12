import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { getIssue } from '@/apis';
import { Avatar } from '@/components/Avatar';
import { IssueItem } from '@/components/IssueItem';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useFetch } from '@/hooks/useFetch.ts';
import * as S from './IssueDetailPage.styles.tsx';
import { IssueDetailContentWrapper } from './IssueDetailPage.styles.tsx';

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
      <IssueDetailContentWrapper>{body && <ReactMarkdown children={body} />}</IssueDetailContentWrapper>
    </main>
  );
}
