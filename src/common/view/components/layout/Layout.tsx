
import { FC } from "react";
import { LayoutProps } from "./Layout.type";
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="bg-transparent font-quicksand text-white w-full h-full max-w-screen-xl m-auto">
      {children}
    </main>
  );
}

export default Layout;
