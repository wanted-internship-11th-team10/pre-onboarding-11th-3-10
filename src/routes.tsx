import { createBrowserRouter, Navigate } from 'react-router-dom';

import { IssueContent } from './components/IssueContent';
import { IssueList } from './components/IssueList';
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
        element: <IssueList />,
      },
      {
        path: ':id',
        element: <IssueContent />,
      },
    ],
  },
]);
