import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ComponentProps {
  children: ReactNode;
}
const HeaderLayout = ({ children }: ComponentProps) => {
  return (
    <Layout>
      <Header>
        <b>Facebook React</b>
      </Header>
      {children}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  max-width: 1280px;
`;
const Header = styled.div`
  position: relative;
  display: block;
  text-align: center;
  margin: 50px 0;
  b {
    position: relative;
    font-size: 40px;
    &::before {
      content: '';
      position: absolute;
      display: block;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      width: 100%;
      height: 10px;
      background-color: #cad2fb;
      z-index: -1;
    }
  }
`;
export default HeaderLayout;
