import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { IssueProvider } from '@/context/IssueProvider';

export function IssuePage() {
  return (
    <IssueProvider>
      <Container>
        <Header>
          <h1>Facebook/react</h1>
        </Header>
        <Inner>
          <Outlet />
        </Inner>
      </Container>
    </IssueProvider>
  );
}

const Container = styled.div`
  max-width: 600px;
  min-width: 300px;
  margin: auto;
`;

const Header = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Inner = styled.div`
  padding: 20px;
`;
