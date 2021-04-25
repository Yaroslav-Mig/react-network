import React from 'react';
import styles from './Content.module.css';
import userAvatar from '../../../../assets/user_avatar/user-male.png';

export function UserProfileContent(props) {
  const { userInfo } = props;
  return (
    <article className={styles.module}>
      <img className={styles.photo} src={userAvatar} alt='user avatar' />
      <ul className={styles.info}>
        <li className={styles.item}>
          Date of Birth :<span>{userInfo.birthday}</span>
        </li>
        <li className={styles.item}>
          Gender :<span>{userInfo.gender}</span>
        </li>
        <li className={styles.item}>
          Family status :<span>{userInfo.familyStatus}</span>
        </li>
        <li className={styles.item}>
          Current city :<span>{userInfo.city}</span>
        </li>
      </ul>
    </article>
  );
}
