import { FC, ReactNode } from 'react';

const TableRow: FC<{ children: ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default TableRow;
