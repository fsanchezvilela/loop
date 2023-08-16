import { FC } from 'react';
import { LayoutProps } from './Layout.type';
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="m-auto flex h-screen w-full max-w-screen-lg justify-center bg-transparent font-quicksand text-white">
      {children}
    </main>
  );
};

export default Layout;
