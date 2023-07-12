/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { css } from '@emotion/react';

import { Ad, Header, Row } from '../components';
import { env } from '../constant';
import { useIssues } from '../context/IssuesContext';

const Home = () => {
  const { issues, selectIssue } = useIssues();

  return (
    <main
      css={css`
        width: 500px;
        margin: 1.25rem auto 0;
        padding: 1rem;
        border: 2px solid black;
      `}
    >
      <Header org="facebook" repo="react" />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        {issues.map((issue, idx) => {
          return (
            <Fragment>
              <Row key={idx} issue={issue} onClick={() => selectIssue(issue)} />
              {(idx + 1) % 4 === 0 ? <Ad url={env.IMAGE_URL} href="https://www.wanted.co.kr/" /> : null}
            </Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
