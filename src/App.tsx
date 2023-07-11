import { IssuesProvider } from './context/issuesContext';
import Issues from './pages/issues';

function App() {
  return (
    <IssuesProvider>
      <Issues />
    </IssuesProvider>
  );
}

export default App;
