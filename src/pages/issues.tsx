import { useRef } from 'react';
import { styled } from 'styled-components';

import { getIssues } from '@/api/issues';
import { Error, LoadingView } from '@/components/common';
import { IssueList } from '@/components/issues';
import { useIssuesDispatch, useIssuesState } from '@/context/issuesContext';
import { useIntersectionObserver } from '@/hook/observer';

const Issues = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const count = useRef(1);
  const { data, loading, error } = state.issues;
  const setObservationTarget = useIntersectionObserver(fetchIssues);

  function fetchIssues() {
    getIssues(dispatch, count.current);
    count.current++;
  }
  return (
    <Container>
      {data && <IssueList data={data} />}
      {error && <Error />}
      {loading && <LoadingView />}
      <div ref={setObservationTarget}></div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 50px;
`;
export default Issues;
