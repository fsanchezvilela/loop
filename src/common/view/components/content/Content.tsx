import { FC } from 'react';
import type { ContentProps } from './Content.type';

const Content: FC<ContentProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Content;
