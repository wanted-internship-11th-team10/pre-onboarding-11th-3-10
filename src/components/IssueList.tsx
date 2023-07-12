import { useRef } from 'react';
import { styled } from 'styled-components';

import { getIssues } from '@/api/issues';
import { useIssuesDispatch, useIssuesState } from '@/context/issuesContext';
import { useIntersectionObserver } from '@/hook/customhook';
import AdBanner from './AdBanner';
import Error from './Error';
import IssueItem from './IssueItem';
import Loading from './Loading';

const IssueList = () => {
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();
  const count = useRef(1);
  const { data, loading, error } = state.issues;
  const list = data?.map((issue: IssueType, i: number) => {
    return i > 1 && i % 5 == 0 ? <AdBanner key={i} /> : <IssueItem key={i} issue={issue} />;
  });
  const fetchIssues = () => {
    getIssues(dispatch, count.current);
    count.current++;
  };
  const setObservationTarget = useIntersectionObserver(fetchIssues);

  return (
    <ListBox>
      {data && list}
      {error && <Error />}
      <div ref={setObservationTarget}></div>
      {loading && <Loading />}
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
