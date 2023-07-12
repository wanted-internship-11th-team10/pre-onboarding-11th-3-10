/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import { css } from '@emotion/react';

import { Row } from '@/components';
import { useIssues } from '@/context/IssuesContext';

export const Detail = () => {
  const { selectedIssue: issue } = useIssues();

  if (issue == null)
    return (
      <div
        css={css`
          text-align: center;
        `}
      >
        No data
      </div>
    );

  return (
    <Fragment>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 1rem;
        `}
      >
        <img src={issue.user.avatar_url} alt="avatar" width="80px" height="80px" />
        <div
          css={css`
            flex: 1;
          `}
        >
          <Row issue={issue} />
        </div>
      </div>
      <p>
        <ReactMarkdown children={issue.body} />
      </p>
    </Fragment>
  );
};
