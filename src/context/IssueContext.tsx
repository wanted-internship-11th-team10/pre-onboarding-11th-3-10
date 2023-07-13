import React, { createContext, useContext, useEffect, useState } from "react";

import IssuesClient, { Issue } from "@/service/issues";

const IssueContext = createContext<Context | null>(null);

export const IssueProvider = ({children}: Props) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = new IssuesClient();
    setIsLoading(true);
    client.getIssues().then(data => setIssues(data)).catch(setError).finally(() => setIsLoading(false));
  }, []);

  return <IssueContext.Provider value={{issues, isLoading, error}}>
    {children}
  </IssueContext.Provider>
}

export const useIssue = () => {
  const issueContext = useContext(IssueContext);
  if(issueContext) return issueContext;
  else {
    throw new Error('잘못된 접근입니다.');
  }
}

type Props = {
  children: React.ReactNode
}

type Context = {
  issues: Issue[];
  isLoading: boolean;
  error: string | null;
}