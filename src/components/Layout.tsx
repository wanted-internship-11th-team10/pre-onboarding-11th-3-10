/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Header } from './Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main css={main}>
      <Header org="facebook" repo="react" />
      {children}
    </main>
  );
};

const main = css`
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
`;
