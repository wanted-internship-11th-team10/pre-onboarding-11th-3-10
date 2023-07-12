/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface AdProps {
  url: string;
  href: string;
}

export const Ad = ({ url, href }: AdProps) => {
  return (
    <a
      css={css`
        display: block;
        height: 6rem;
      `}
      href={href}
      target="_blank"
    >
      <img
        css={css`
          object-position: cover;
        `}
        src={url}
        alt="advertisement"
        width="100%"
        height="100%"
      />
    </a>
  );
};
