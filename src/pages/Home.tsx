/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { Issue } from '@/model';
import { Ad, Header, Row } from '../components';
import { env } from '../constant';
import { useIssues } from '../context/IssuesContext';

const Home = () => {
  const { issues, selectIssue } = useIssues();
  const navigate = useNavigate();

  const handleRowClick = (issue: Issue) => () => {
    console.log('clicked');
    selectIssue(issue);
    navigate('/detail');
  };

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
            <Fragment key={idx}>
              <Row issue={issue} onClick={handleRowClick(issue)} />
              {(idx + 1) % 4 === 0 ? <Ad url={env.IMAGE_URL} href="https://www.wanted.co.kr/" /> : null}
            </Fragment>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
