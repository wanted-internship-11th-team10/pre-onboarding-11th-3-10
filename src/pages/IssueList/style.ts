import styled from 'styled-components';

export const IssueListContainer = styled.div`
  margin: 0 20px;
`;

export const AdBox = styled.div`
  height: 58px;
  cursor: pointer;
  padding: 10px 0;
  border-bottom: 1px solid #c5c6d0;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
