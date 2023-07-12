import { CSSProperties, useMemo } from 'react';

import * as S from './LoadingSpinner.styles.tsx';

interface ProgressCircleProps {
  /** 해당 컴포넌트로 loading 으로 표현하고 싶은 경우*/
  isLoading?: boolean;
  /** 컴포넌트 색상 지정 */
  color?: string;
  /** 컴포넌트 size 지정 */
  size?: number;
  /** progress 진척도 (값) */
  value?: number;
  /** 하나의 블록을 가득찬 형태 - loading 이 하나의 블록을 차지하고 싶은 경우 */
  isFullWidth?: boolean;
}

export function LoadingSpinner({
  isLoading = false,
  color = 'gray',
  size = 24,
  value,
  isFullWidth = false,
}: ProgressCircleProps) {
  const MIN = 0;
  const MAX = 100;
  const RADIUS = 5;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const strokeDashoffset = useMemo(() => {
    if (value === undefined) return;
    const progress = value / 100;
    return CIRCUMFERENCE * (1 - progress);
  }, [CIRCUMFERENCE, value]);

  return (
    <S.LoadingSpinnerWrapper className={isFullWidth ? 'fullWidth' : ''}>
      <S.CircleSVG
        role="progressbar"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 12 12`}
        width={size}
        height={size}
        aria-valuenow={value}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        className={isLoading ? 'loading' : ''}
        style={{ '--progress-color': color } as CSSProperties}
      >
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
        />
      </S.CircleSVG>
    </S.LoadingSpinnerWrapper>
  );
}
