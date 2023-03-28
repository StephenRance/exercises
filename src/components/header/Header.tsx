import Image from 'next/image';
import Link from 'next/link';
import { classNames } from '../../utils';
import styles from './Header.module.css';
import Props from './Header.type';

const Header = ({ ...props }: Props) => {
  const classList = [styles['header'], props?.className];

  return (
    <header {...props} className={classNames(classList)}>
      <div className={styles.header__container}>
        <h1 className={styles.header__copy}>Exercises!</h1>

        <Link className={styles.header__logo} href="/">
          <Image
            alt="Exercises! by Stephen Rance"
            className={styles.header__logo__img}
            fill={true}
            priority
            src="/logo.svg"
            unoptimized
          />
        </Link>

        <a
          className={classNames([
            styles['header__copy'],
            styles['header__copy--link'],
          ])}
          href="https://github.com/StephenRance/exercises"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Github
        </a>
      </div>
    </header>
  );
};

export default Header;
