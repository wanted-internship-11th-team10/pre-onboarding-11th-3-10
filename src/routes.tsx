import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Loading } from './components/common/Loading';
import { IssueContent } from './components/IssueContent';
import { IssueProvider } from './components/IssueProvider';
import { ErrorPage } from './pages/ErrorPage';
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
        element: <IssueProvider />,
      },
      {
        path: ':number',
        element: (
          <Suspense fallback={<Loading />}>
            <IssueContent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);
