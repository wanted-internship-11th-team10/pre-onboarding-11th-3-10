/** @jsxImportSource @emotion/react */
import { Fragment, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { useInfiniteFetch } from '@/hooks/useInfiniteFetch';
import { Issue } from '@/model';
import { Ad, Row } from '../components';
import { env } from '../constant';
import { useIssues } from '../context/IssuesContext';

const Home = () => {
  const { issues, selectIssue, loading, fetchIssues } = useIssues();
  const navigate = useNavigate();
  const pageEnd = useRef<HTMLDivElement>(null);

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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        {issues.map((issue, idx) => {
          return (
            <Fragment key={idx}>
              <Row issue={issue} onClick={handleRowClick(issue)} />
              {(idx + 1) % 4 === 0 ? <Ad url={env.IMAGE_URL} href="https://www.wanted.co.kr/" /> : null}
            </Fragment>
          );
        })}
        <div
          css={css`
            text-align: center;
          `}
        >
          {loading ? <div>loading...</div> : <div ref={pageEnd}>더 보기...</div>}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
