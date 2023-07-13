import { IssueProvider } from './context/IssueProvider';
import Router from './router';

function App() {
  return (
    <IssueProvider>
      <Router />
    </IssueProvider>
  );
}

export default App;
