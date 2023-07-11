import { useEffect } from 'react';

import { fetchIssueList } from './api';

function App() {
  useEffect(() => {
    fetchIssueList().then((res) => console.log(res));
  }, []);
  return <>React Vite: </>;
}

export default App;
