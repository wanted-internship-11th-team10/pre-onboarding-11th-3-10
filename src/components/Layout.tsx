/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
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
      {children}
    </main>
  );
};
