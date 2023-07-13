import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Loading } from './components/common/Loading';
import { Issue } from './components/Issue';
import { IssueList } from './components/IssueList';
import { ErrorPage } from './pages/ErrorPage';
import { IssuePage } from './pages/IssuePage';

export const router = createBrowserRouter([
  {
    path: '/issues',
    element: <IssuePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <IssueList />,
      },
      {
        path: ':number',
        element: (
          <Suspense fallback={<Loading isFullWidth />}>
            <Issue />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/issues" replace />,
    errorElement: <ErrorPage />,
  },
]);
