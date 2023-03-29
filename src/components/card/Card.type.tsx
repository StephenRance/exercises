import { HTMLProps } from 'react';

type Props = HTMLProps<HTMLDivElement> & {
  female: string;
  male: string;
  name: string;
};

export default Props;
