import { createContext } from 'react';

import { Issue } from '@/types/issue';

type IssueContextType = {
  issues: Issue[];
  loading: boolean;
  error: string;
};

const defaultValues: IssueContextType = {
  issues: [],
  loading: true,
  error: '',
};

export const IssueContext = createContext<IssueContextType>(defaultValues);
