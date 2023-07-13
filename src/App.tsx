
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import Header from './components/Header';
import { IssueProvider } from './context/IssueContext';

export default function App() {
  return (
    <AppContainer>
      <IssueProvider>
        <Header />
        <Outlet/>
      </IssueProvider>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  width: 1018px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  overflow: scroll;
`