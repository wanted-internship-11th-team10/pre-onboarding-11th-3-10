import { useEffect } from 'react';

import { getIssues } from '@/api/issues';
import IssueList from '@/components/IssueList';

const Issues = () => {
  useEffect(() => {
    getIssues().then((res) => console.log(res));
  }, []);
  return <IssueList />;
};

export default Issues;
