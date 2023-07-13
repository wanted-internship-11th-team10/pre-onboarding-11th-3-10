import { ReactNode, useEffect } from 'react';

export function ScrollTop({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return children;
}
