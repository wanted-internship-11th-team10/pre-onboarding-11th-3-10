import { RouterProvider } from 'react-router-dom';

import { router } from '@/pages/Router.tsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
