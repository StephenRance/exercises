import { HTMLProps, ReactNode } from 'react';

type Props = HTMLProps<HTMLUListElement> & {
  children?: ReactNode;
};

export default Props;
