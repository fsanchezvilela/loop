import { FC, ReactNode } from 'react';

const TableHead: FC<{ children: ReactNode }> = ({ children }) => {
  return <th>{children}</th>;
};

export default TableHead;
