/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react';
import { css } from '@emotion/react';

interface LoadingOrMoreProps {
  loading: boolean;
}

export const LoadingOrMore = forwardRef<HTMLSpanElement, LoadingOrMoreProps>(({ loading }, ref) => {
  const container = css`
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    line-height: 3rem;
    background-color: ${loading ? 'gold' : 'purple'};
  `;

  return <div css={container}>{loading ? <span>loading...</span> : <span ref={ref}>더 보기...</span>}</div>;
});
