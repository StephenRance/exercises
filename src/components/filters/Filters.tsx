import { classNames } from '../../utils';
import styles from './Filters.module.css';
import Props from './Filters.type';

const Filters = ({ children, ...props }: Props) => {
  if (!children) {
    return null;
  }

  const classList = [styles['filters'], props?.className];

  return (
    <ul {...props} className={classNames(classList)}>
      {children}
    </ul>
  );
};

export default Filters;
