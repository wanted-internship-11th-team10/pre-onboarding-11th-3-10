import { createContext } from 'react';

import { InfiniteQuery } from '@/hook/useFetchIssues';

export const IssueContext = createContext<InfiniteQuery | null>(null);
