/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { getIssues } from './api';
import { Row } from './components';
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
    <div
      css={css`
        width: 500px;
        margin: 20px auto 0;
        padding: 1rem;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `}
    >
      {issues.map((issue, idx) => (
        <Row key={idx} issue={issue} />
      ))}
    </div>
  );
}

export default App;
