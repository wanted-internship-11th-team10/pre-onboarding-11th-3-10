import { AdBanner, Error, IssueItem, LoadingView } from '.';
import { useRef } from 'react';
import { styled } from 'styled-components';

import { getIssues } from '@/api/issues';
import { useIssuesDispatch, useIssuesState } from '@/context/issuesContext';
import { useIntersectionObserver } from '@/hook/observer';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const count = useRef(1);
  const { data, loading, error } = state.issues;
  const setObservationTarget = useIntersectionObserver(fetchIssues);

  const list = data?.map((issue: IssueType, i: number) => {
    return i > 1 && i % 5 == 4 ? <AdBanner key={i} /> : <IssueItem key={i} issue={issue} />;
  });

  function fetchIssues() {
    getIssues(dispatch, count.current);
    count.current++;
  }

  return (
    <ListBox>
      {data && list}
      {error && <Error />}
      <div ref={setObservationTarget}></div>
      {loading && <LoadingView />}
    </ListBox>
  );
};

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
`;

export default IssueList;
