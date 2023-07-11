import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { IssueDetailPage } from './IssueDetailPage.tsx';
import { IssuePage } from './IssuePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        errorElement: <div>이슈 상세 화면 에러</div>,
      },
    ],
  },
]);
