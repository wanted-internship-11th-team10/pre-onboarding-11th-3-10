import { IssueProvider } from './context/IssueProvider';
import Router from './router';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

console.log('VITE .env 접근 테스트 :: GITHUB_TOKEN : ', GITHUB_TOKEN);
function App() {
  return (
    <IssueProvider>
      React Vite: {GITHUB_TOKEN}
      <Router />
    </IssueProvider>
  );
}

export default App;
