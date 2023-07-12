import { createContext } from 'react';

export const IssueContext = createContext<IssueContextType | null>(null);

type IssueContextType = {
  owner: string;
  repository: string;
};
