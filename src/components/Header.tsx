/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

interface HeaderProps {
  org: string;
  repo: string;
}

export const Header = ({ org, repo }: HeaderProps) => {
  return (
    <div
      css={css`
        padding-bottom: 3rem;
        text-align: center;
        font-size: 1.7rem;
        font-weight: bold;
      `}
    >
      <span>{`${org} / ${repo}`}</span>
    </div>
  );
};
