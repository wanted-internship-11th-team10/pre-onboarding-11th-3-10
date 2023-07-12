/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { getIssues } from './api';
import { Header, Row } from './components';
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
        {issues.map((issue, idx) => (
          <Row key={idx} issue={issue} />
        ))}
      </div>
    </main>
  );
}

export default App;
