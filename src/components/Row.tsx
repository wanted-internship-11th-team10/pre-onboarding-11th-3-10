/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Issue } from '@/model';

interface RowProps {
  issue: Issue;
  onClick?: () => void;
}

export const Row = ({ issue, onClick }: RowProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        gap: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid black;
        cursor: pointer;
      `}
      onClick={onClick}
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
          font-size: 0.8rem;
        `}
      >
        코멘트: {issue.comments}
      </span>
    </div>
  );
};
