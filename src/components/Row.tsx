/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Issue } from '@/shared/model';

interface RowProps {
  issue: Issue;
  onClick?: () => void;
}

export const Row = ({ issue, onClick }: RowProps) => {
  const date = new Date(issue.created_at).toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div css={rowContainer} onClick={onClick}>
      <div css={rowTitle}>
        <span>{`#${issue.number} ${issue.title}`}</span>
        <span css={rowDesc}>{`작성자: ${issue.user.login}, 작성일: ${date}`}</span>
      </div>
      <span css={rowComment}>코멘트: {issue.comments}</span>
    </div>
  );
};

const rowContainer = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const rowTitle = css`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const rowDesc = css`
  font-size: 0.9rem;
  color: gray;
`;

const rowComment = css`
  font-size: 0.8rem;
`;
