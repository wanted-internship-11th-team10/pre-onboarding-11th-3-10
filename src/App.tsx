import { RouterProvider } from 'react-router-dom';

import { IssueProvider } from './context/IssueProvider';
import { Global } from './Global';
import { router } from './routes';

function App() {
  return (
    <IssueProvider>
      <Global />
      <RouterProvider router={router} />
    </IssueProvider>
  );
}

export default App;
