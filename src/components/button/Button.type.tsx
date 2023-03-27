import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean;
  label: string;
  theme?: 'error' | 'primary' | 'secondary';
  variant?: 'thick' | 'thin';
};

export default Props;
