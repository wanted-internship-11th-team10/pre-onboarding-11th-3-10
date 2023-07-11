import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <>NOT FOUND PAGE - 404</>,
    children: [
      {
        index: true,
        path: '/',
        element: <>ISSUE LIST</>,
        errorElement: <div>이슈 리스트 에러 화면</div>,
      },
      {
        path: ':id',
        element: <>ISSUE 상세화면</>,
        errorElement: <div>이슈 상세 화면 에러</div>,
      },
    ],
  },
]);
