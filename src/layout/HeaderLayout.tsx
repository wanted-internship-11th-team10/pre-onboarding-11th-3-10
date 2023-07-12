import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ComponentProps {
  children: ReactNode;
}
const HeaderLayout = ({ children }: ComponentProps) => {
  return (
    <Layout>
      <Header>Facebook React</Header>
      {children}
    </Layout>
  );
};
const Layout = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 1280px;
`;
const Header = styled.h1`
  text-align: center;
`;
export default HeaderLayout;
