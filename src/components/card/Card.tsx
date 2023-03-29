import Image from 'next/image';
import { useEffect, useState } from 'react';
import { classNames } from '../../utils';
import Button from '../button/Button';
import styles from './Card.module.css';
import Props from './Card.type';

const Card = ({ female, male, name, ...props }: Props) => {
  const [firstRender, setFirstRender] = useState(true);
  const [gender, setGender] = useState('male');

  const classList = [styles['card'], props?.className];

  useEffect(() => {
    if (firstRender) {
      return setFirstRender(false);
    }

    setGender('male');
  }, [name]);

  return (
    <article {...props} className={classNames(classList)}>
      <figure className={styles.card__content}>
        <ul className={styles.card__toggle}>
          <li className={styles.card__toggle__item}>
            <Button
              isActive={gender === 'male'}
              label="Male"
              onClick={() => setGender('male')}
              type="button"
              variant="thin"
            />
          </li>

          <li className={styles.card__toggle__item}>
            <Button
              isActive={gender === 'female'}
              label="Female"
              onClick={() => setGender('female')}
              type="button"
              variant="thin"
            />
          </li>
        </ul>

        {gender === 'male' && (
          <Image
            alt={name}
            className={styles.card__img}
            fill
            src={male}
            unoptimized
          />
        )}

        {gender === 'female' && (
          <Image
            alt={name}
            className={styles.card__img}
            fill
            src={female}
            unoptimized
          />
        )}

        <figcaption className={styles.card__ribbon}>
          <h2 className={styles.card__ribbon__heading}>{name}</h2>
        </figcaption>
      </figure>
    </article>
  );
};

export default Card;
