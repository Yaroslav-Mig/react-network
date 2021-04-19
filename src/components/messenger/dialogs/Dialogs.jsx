import React from 'react';
import styles from './Dialogs.module.css';
import globalStyles from '../../../styles/Global.module.css';
import userAvatar from '../../../assets/user_avatar/user-male.png';

export function MessengerDialogs() {
  return (
    <ul className={globalStyles.box}>
      <li className={`${styles.module} ${globalStyles.box_sizing}`}>
        <a className={globalStyles.avatar_inner} href='#'>
          <img className={globalStyles.avatar} src={userAvatar} alt='user avatar' />
        </a>
        <div className={`${globalStyles.box_sizing} ${styles.content}`}>
          <h3 className={globalStyles.userName}>
            <a className={globalStyles.userName_link} href='#'>
              User name
            </a>
          </h3>
          <p className={globalStyles.text}>Text content</p>
        </div>
        <time className={`${globalStyles.date} ${styles.date}`} datetime='1914-12-20 08:00'>
          April 6
        </time>
      </li>
    </ul>
  );
}
