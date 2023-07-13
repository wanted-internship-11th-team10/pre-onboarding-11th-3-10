import styled from 'styled-components';

export const IssueContainer = styled.div`
  margin: 0 20px;
`;

export const IssueTitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c5c6d0;
  }
`;

export const LeftBox = styled.div`
  padding: 10px 0;
`;

export const ProfileImgBox = styled.div`
  margin-right: 10px;

  & > img {
    border-radius: 50%;
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 7px;

  & > div:nth-child(2) {
    padding-left: 10px;
  }
`;

export const BottomBox = styled.div`
  display: flex;
  font-size: 14px;
  color: #787276;
`;

export const RightBox = styled.div`
  height: 100%;
  margin-left: auto;
  font-size: 14px;
  color: #787276;
`;
