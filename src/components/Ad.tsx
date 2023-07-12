/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface AdProps {
  url: string;
  href: string;
}

export const Ad = ({ url, href }: AdProps) => {
  return (
    <a css={imgContainer} href={href} target="_blank">
      <img css={image} src={url} alt="advertisement" width="100%" height="100%" />
    </a>
  );
};

const imgContainer = css`
  display: block;
  height: 6rem;
`;

const image = css`
  object-position: cover;
`;
