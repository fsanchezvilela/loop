import { FC, ReactNode } from 'react';

const TableBody: FC<{ children: ReactNode }> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
