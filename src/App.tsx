import { RouterProvider } from 'react-router-dom';

import { Global } from './Global';
import { router } from './routes';

function App() {
  return (
    <>
      <Global />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
