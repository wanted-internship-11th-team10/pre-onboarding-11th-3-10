/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface HeaderProps {
  org: string;
  repo: string;
}

export const Header = ({ org, repo }: HeaderProps) => {
  return (
    <div css={header}>
      <span>{`${org} / ${repo}`}</span>
    </div>
  );
};

const header = css`
  padding-bottom: 3rem;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
`;
