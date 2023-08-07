import { FC, ReactNode } from 'react';

const Table: FC<{ children: ReactNode }> = ({ children }) => {
  return <table className="rounded-md border">{children}</table>;
};

export default Table;
