import styled from '@emotion/styled';

export const IssueItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;

  &::after {
    content: '';
    border: 0.5px solid #d9d9d9;
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
  gap: 0.5rem;
`;

export const Title = styled.h3`
  margin: 0;
  color: white;
`;

export const Summary = styled.span`
  font-size: 12px;
  clor: #758590;
`;

export const Comment = styled.span`
  white-space: nowrap;
  color: #ede6f3;
`;
