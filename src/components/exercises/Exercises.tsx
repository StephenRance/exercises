import { classNames } from '../../utils';
import styles from './Exercises.module.css';
import Props from './Exercises.type';

const Exercises = ({ children, ...props }: Props) => {
  if (!children) {
    return null;
  }

  const classList = [styles['exercises'], props?.className];

  return (
    <div {...props} className={classNames(classList)}>
      {children}
    </div>
  );
};

export default Exercises;
