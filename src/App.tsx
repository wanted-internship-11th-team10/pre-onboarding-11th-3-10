import { IssueProvider } from './context/IssueProvider';
import GlobalStyle from './globalStyle';
import Router from './router';

function App() {
  return (
    <IssueProvider>
      <GlobalStyle />
      <Router />
    </IssueProvider>
  );
}

export default App;
