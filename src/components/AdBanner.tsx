import React from 'react';
import { styled } from 'styled-components';

const AdBanner = () => {
  return (
    <Banner href="https://www.wanted.co.kr/">
      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
    </Banner>
  );
};
const Banner = styled.a`
  margin: 0 auto;
  width: 800px;
  display: flex;
  justify-content: center;
  img {
    width: 20%;
  }
`;
export default AdBanner;
