import { FC, ReactNode } from 'react';

const TanbleCell: FC<{ children: ReactNode }> = ({ children }) => {
  return <td>{children}</td>;
};

export default TanbleCell;
