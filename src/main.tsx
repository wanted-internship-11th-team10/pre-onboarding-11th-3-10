import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import App from './App';
import Detail from './pages/Detail';
import Issues from './pages/Issues';
import NotFound from './pages/NotFound';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Issues/>},
      {path: '/issues', element: <Issues/>},
      {path: '/detail/:id', element: <Detail/>}
    ],
    errorElement: <NotFound/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
);
