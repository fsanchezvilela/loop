import { FC, ReactNode } from 'react';

const TableHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <thead>{children}</thead>;
};

export default TableHeader;
