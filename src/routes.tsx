import { createBrowserRouter, Navigate } from 'react-router-dom';

import { IssueContent } from './components/IssueContent';
import { IssueListLayout } from './components/IssueListProvider';
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
        path: '',
        element: <IssueListLayout />,
      },
      {
        path: ':number',
        element: <IssueContent />,
      },
    ],
  },
]);
