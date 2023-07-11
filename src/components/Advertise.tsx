import { styled } from 'styled-components';

import ad from '@/assets/ad.jpeg';

export function Advertise() {
  return (
    <Container>
      <a href="https://www.wanted.co.kr/" target="_blank">
        <img src={ad} />
      </a>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin: auto;
  margin-bottom: 20px;

  a > img {
    width: 100%;
    height: 80px;
  }
`;
