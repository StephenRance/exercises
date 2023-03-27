import { classNames } from '../../utils';
import styles from './Button.module.css';
import Props from './Button.type';

const Button = ({
  isActive,
  label,
  theme = 'primary',
  variant = 'thick',
  ...props
}: Props) => {
  if (!label) {
    return null;
  }

  const classList = [
    styles['btn'],
    styles[`btn--${theme}`],
    styles[`btn--${variant}`],
    isActive ? styles['is-active'] : '',
    props?.className,
  ];

  return (
    <button {...props} className={classNames(classList)}>
      {label}
    </button>
  );
};

export default Button;
