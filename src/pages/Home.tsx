/** @jsxImportSource @emotion/react */
import { Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { Ad, LoadingOrMore, Row } from '@/components';
import { useIssues } from '@/context';
import { useInfiniteFetch } from '@/hooks';
import { env } from '@/shared/constant';
import { Issue } from '@/shared/model';

const Home = () => {
  const { issues, selectIssue, loading, fetchIssues } = useIssues();
  const navigate = useNavigate();
  const pageEnd = useRef<HTMLSpanElement>(null);

  useInfiniteFetch({
    targetRef: pageEnd,
    fetchCallback: fetchIssues,
  });

  const handleRowClick = (issue: Issue) => () => {
    selectIssue(issue);
    navigate('/detail');
  };

  return (
    <Fragment>
      <div css={issuesContainer}>
        {issues.map((issue, idx) => {
          return (
            <Fragment key={idx}>
              <Row issue={issue} onClick={handleRowClick(issue)} />
              {(idx + 1) % 4 === 0 ? <Ad url={env.IMAGE_URL} href="https://www.wanted.co.kr/" /> : null}
            </Fragment>
          );
        })}
        <LoadingOrMore ref={pageEnd} loading={loading} />
      </div>
    </Fragment>
  );
};

const issuesContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Home;
