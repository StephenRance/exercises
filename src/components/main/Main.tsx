import { classNames } from '../../utils';
import styles from './Main.module.css';
import Props from './Main.type';

const Main = ({ children, ...props }: Props) => {
  if (!children) {
    return null;
  }

  const classList = [styles['main'], props?.className];

  return (
    <main {...props} className={classNames(classList)}>
      {children}
    </main>
  );
};

export default Main;
