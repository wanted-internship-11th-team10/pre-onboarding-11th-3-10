import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { IssueProvider } from '@/context/issue/IssueProvider.tsx';
import { IssueDetailPage } from './IssueDetailPage.tsx';
import { IssuePage } from './IssuePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <IssueProvider>
        <Layout />
      </IssueProvider>
    ),
    errorElement: <>NOT FOUND PAGE - 404</>,
    children: [
      {
        index: true,
        path: '/',
        element: <IssuePage />,
        errorElement: <div>이슈 리스트 에러 화면</div>,
      },
      {
        path: ':id',
        element: (
          // <Suspense fallback={<div>로딩중...</div>}>
          <IssueDetailPage />
          // </Suspense>
        ),
      },
    ],
  },
]);
