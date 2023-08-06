import { FC } from 'react';
import { LayoutProps } from './Layout.type';
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="m-auto h-full w-full max-w-screen-xl bg-transparent font-quicksand text-white">
      {children}
    </main>
  );
};

export default Layout;
