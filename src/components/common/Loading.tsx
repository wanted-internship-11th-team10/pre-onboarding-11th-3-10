import { CSSProperties, useMemo } from 'react';
import { styled } from 'styled-components';

interface ProgressCircleProps {
  /** 컴포넌트 색상 지정 */
  color?: string;
  /** 컴포넌트 size 지정 */
  size?: number;
  /** progress 진척도 (값) */
  value?: number;
  /** 하나의 블록을 가득찬 형태 - loading 이 하나의 블록을 차지하고 싶은 경우 */
  isFullWidth?: boolean;
}

export function Loading({ color = 'gray', size = 24, value, isFullWidth = false }: ProgressCircleProps) {
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
    <LoadingSpinnerWrapper className={isFullWidth ? 'fullWidth' : ''}>
      <CircleSVG
        role="progressbar"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 12 12`}
        width={size}
        height={size}
        aria-valuenow={value}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        className={'loading'}
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
      </CircleSVG>
    </LoadingSpinnerWrapper>
  );
}

export const LoadingSpinnerWrapper = styled.span`
  &.fullWidth {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CircleSVG = styled.svg`
  color: var(--progress-color);
  transform: rotate(-90deg);

  circle {
    transition: stroke-dashoffset 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.loading {
    animation: progress 2s linear infinite;

    circle {
      transition: none;
      animation: circle 6s linear infinite;
      stroke-dasharray: 30;
    }
  }

  @keyframes progress {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes circle {
    0%,
    100% {
      stroke-dashoffset: 150;
    }

    50% {
      stroke-dashoffset: 0;
    }

    50.1% {
      stroke-dashoffset: 300;
    }
  }
`;
