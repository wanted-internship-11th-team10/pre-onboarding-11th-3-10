/** @jsxImportSource @emotion/react */
import { Fragment } from 'react';
import { css } from '@emotion/react';

import { Row } from '@/components';
import { useIssues } from '@/context/IssuesContext';

export const Detail = () => {
  const { selectedIssue: issue } = useIssues();

  if (issue == null) return <div>No data</div>;

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
        <Row issue={issue} />
      </div>
    </Fragment>
  );
};
