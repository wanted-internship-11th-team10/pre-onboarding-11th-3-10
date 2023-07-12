import { useEffect } from 'react';
import { styled } from 'styled-components';

import { getIssues, useIssuesDispatch, useIssuesState } from '@/context/issuesContext';
import IssueItem from './IssueItem';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  useEffect(() => {
    if (dispatch) getIssues(dispatch);
  }, [dispatch]);

  const { data } = state.issues;

  const list = data?.map((issue: IssueType) => {
    return <IssueItem issue={issue} />;
  });

  return (
    <ListBox>
      {data && list}
      {!data && 'error'}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default IssueList;
