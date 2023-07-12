import { PropsWithChildren } from 'react';

import { useInput } from '@/hooks/useInput.ts';
import { IssueContext } from './IssueContext.tsx';

export function IssueProvider({ children }: PropsWithChildren) {
  const { value: owner } = useInput('facebook');
  const { value: repository } = useInput('react');

  return <IssueContext.Provider value={{ owner, repository }}>{children}</IssueContext.Provider>;
}
