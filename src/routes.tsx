import { createBrowserRouter, Navigate } from 'react-router-dom';

import { IssuePage } from './pages/IssuePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/issues" replace />,
  },
  {
    path: '/issues',
    element: <IssuePage />,
    children: [
      {
        path: ':id',
        element: <div>issue detail</div>,
      },
    ],
  },
]);
