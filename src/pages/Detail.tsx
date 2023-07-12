/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';

import { Row } from '@/components';
import { useIssues } from '@/context';

export const Detail = () => {
  const { selectedIssue: issue } = useIssues();

  if (issue == null) {
    return <div css={issueContainer}>No data</div>;
  }

  return (
    <Fragment>
      <div css={issueContainer}>
        <img src={issue.user.avatar_url} alt="avatar" width="80px" height="80px" />
        <div css={rowContainer}>
          <Row issue={issue} />
        </div>
      </div>
      <p>
        <ReactMarkdown children={issue.body} />
      </p>
    </Fragment>
  );
};

const issueContainer = css`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const rowContainer = css`
  flex: 1;
`;
