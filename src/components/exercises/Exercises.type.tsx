import { HTMLProps, ReactNode } from 'react';

type Props = HTMLProps<HTMLDivElement> & {
  children?: ReactNode;
};

export default Props;
