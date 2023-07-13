import { createContext } from 'react';
import React from 'react';

import { Issue } from '@/types/issue';

type IssueContextType = {
  issues: Issue[];
  loading: boolean;
  error: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollAnchor: React.RefObject<HTMLDivElement>;
};

const defaultValues: IssueContextType = {
  issues: [],
  loading: true,
  error: '',
  page: 1,
  setPage: () => {
    ('');
  },
  scrollAnchor: React.createRef<HTMLDivElement>(),
};

export const IssueContext = createContext<IssueContextType>(defaultValues);
