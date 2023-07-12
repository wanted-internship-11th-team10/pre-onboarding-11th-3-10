import styled from '@emotion/styled';

export const AdvertisementItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  background-color: white;
  border-radius: 0.5rem;
`;

export const Advertisement = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 0.5rem;
    margin: 0 auto;
    height: 5rem;
  }
`;
