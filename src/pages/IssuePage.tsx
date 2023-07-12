import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export function IssuePage() {
  return (
    <div>
      <Header>
        <h1>Facebook/react</h1>
      </Header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

const Header = styled.div`
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid rgb(100, 100, 100, 0.7);
`;

const Container = styled.div`
  padding: 20px;
`;
