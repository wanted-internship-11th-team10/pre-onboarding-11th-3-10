import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import * as S from './Layout.styles.tsx';

export function Layout() {
  return (
    <S.LayoutWrapper>
      <Header />
      <Outlet />
    </S.LayoutWrapper>
  );
}
