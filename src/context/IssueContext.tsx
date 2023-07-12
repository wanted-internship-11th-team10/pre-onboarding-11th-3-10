import { createContext } from 'react';

import { IssueData } from '@/api/issue';

export const IssueContext = createContext<IssueData[]>([]);
