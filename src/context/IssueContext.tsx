import { createContext } from 'react';

import { IssueType } from '@/types/issue';

export const IssueContext = createContext<IssueType[] | null>(null);
