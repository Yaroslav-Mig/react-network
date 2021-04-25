import React from 'react';
import styles from './Content.module.css';
import userAvatar from '../../../../assets/user_avatar/user-male.png';

export function UserProfileContent() {
  return (
    <article className={styles.module}>
      <img className={styles.photo} src={userAvatar} alt='user avatar' />
      <ul className={styles.info}>
        <li className={styles.item}>
          Date of Birth :<span>1989</span>
        </li>
        <li className={styles.item}>
          Gender :<span>male</span>
        </li>
        <li className={styles.item}>
          Family status :<span>married</span>
        </li>
        <li className={styles.item}>
          Current city :<span>Minsk</span>
        </li>
      </ul>
    </article>
  );
}
