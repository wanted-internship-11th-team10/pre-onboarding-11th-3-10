import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px 0;
  border-bottom: 1px solid #c5c6d0;
`;

export const LeftBox = styled.div`
  width: 85%;
`;

export const TopBox = styled.div`
  display: flex;
  padding-bottom: 5px;
  font-size: 18px;

  & > div:nth-child(2) {
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 10px;
    text-overflow: ellipsis;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  font-size: 14px;
  color: #787276;

  & > div:nth-child(2) {
    padding-left: 10px;
  }
`;

export const RightBox = styled.div`
  width: 15%;
  font-size: 14px;
  color: #787276;
  text-align: right;
`;
