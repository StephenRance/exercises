import { classNames } from '../../utils';
import styles from './Error.module.css';
import Props from './Error.type';

const Error = ({ ...props }: Props) => {
  const classList = [styles['error'], props?.className];

  return (
    <div {...props} className={classNames(classList)}>
      <div className={styles.error__container}>
        <h2 className={styles.error__heading}>Oops!</h2>

        <p>
          There are no exercises to show, please select a different filter or
          try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
