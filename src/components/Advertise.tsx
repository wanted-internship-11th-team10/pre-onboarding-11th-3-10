import { styled } from 'styled-components';

import ad from '@/assets/ad.jpeg';

export function Advertise() {
  return (
    <ImgWrapper>
      <img src={ad} />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  width: 350px;
  margin: auto;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 80px;
  }
`;
