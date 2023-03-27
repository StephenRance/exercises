import { HTMLProps, ReactNode } from 'react';

type Props = HTMLProps<HTMLLIElement> & {
  children?: ReactNode;
};

export default Props;
