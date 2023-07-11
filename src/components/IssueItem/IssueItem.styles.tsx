import styled from '@emotion/styled';

export const IssueItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: '';
    border: 0.5px solid #21262d;
  }
`;

export const IssueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3``;

export const Summary = styled.span`
  color: gray;
`;
