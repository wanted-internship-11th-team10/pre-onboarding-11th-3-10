import styled from '@emotion/styled';

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
