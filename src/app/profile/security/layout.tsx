import MainLayout from '../../main-layout/layout';

import type { ReactNode } from 'react';

export default function SecurityLayout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
