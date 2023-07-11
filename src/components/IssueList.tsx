import { useCallback, useEffect } from 'react';

import { getIssues, useIssuesDispatch, useIssuesState } from '@/context/issuesContext';
// import { getIssues } from '@/api/issues';
// import IssueItem from './IssueItem';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const fetchData = useCallback(() => {
    getIssues(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { data } = state.issues;
  console.log(data);
  // const filter_data = data.filter((item: any) => item.state == 'open');
  // const sort_data = filter_data.sort((a:any, b:any) => {
  //   return b.comments - a.comments;
  // });
  // const list = sort_data.map((issue) => {
  //   return <IssueItem issue={issue} />;
  // });

  // return <>{list}</>;
  return <div></div>;
};

export default IssueList;
