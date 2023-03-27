import { classNames } from '../../utils';
import styles from './Filter.module.css';
import Props from './Filter.type';

const Filter = ({ children, ...props }: Props) => {
  if (!children) {
    return null;
  }

  const classList = [styles['filter'], props?.className];

  return (
    <li {...props} className={classNames(classList)}>
      {children}
    </li>
  );
};

export default Filter;
