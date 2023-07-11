import { createContext } from 'react';

type IssueContextType = {
  //
};

export const IssueContext = createContext<IssueContextType | null>(null);
