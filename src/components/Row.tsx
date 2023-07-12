/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Issue } from '@/model';

interface RowProps {
  issue: Issue;
}

export const Row = ({ issue }: RowProps) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 2rem;
        align-items: center;
        padding-bottom: 1rem;
        border-bottom: 1px solid black;
      `}
    >
      <div
        css={css`
          flex-basis: 80%;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `}
      >
        <span>{`#${issue.number} ${issue.title}`}</span>
        <span
          css={css`
            font-size: 0.9rem;
            color: gray;
          `}
        >
          {`작성자: ${issue.user.login}, 작성일: ${issue.created_at}`}
        </span>
      </div>
      <span
        css={css`
          flex-basis: 20%;
          font-size: 0.8rem;
        `}
      >
        코멘트: {issue.comments}
      </span>
    </div>
  );
};
