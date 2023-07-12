import { createBrowserRouter, RouterProvider } from 'node_modules/react-router-dom/dist/index';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Detail from './pages/Detail';
import Issues from './pages/Issues';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: '/', element: <Issues /> },
      { path: '/issues', element: <Issues /> },
      { path: '/detail/:id', element: <Detail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
