/** @jsxImportSource @emotion/react */
import { Fragment, useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { getIssues } from './api';
import { Ad, Header, Row } from './components';
import { env } from './constant';
import { Issue } from './model';

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const issues = await getIssues({ user: 'facebook', repo: 'react' });
        setIssues(issues);
      } catch (err) {
        console.error(err);
      }
    };

    fetchIssues();
  }, []);

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
              <Row key={idx} issue={issue} />
              {(idx + 1) % 4 === 0 ? <Ad url={env.IMAGE_URL} href="https://www.wanted.co.kr/" /> : null}
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}

export default App;
