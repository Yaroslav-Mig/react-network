import React from 'react';
import styles from './Header.module.css';
import navBackground from '../../../assets/user_photo/desert.jpg';
import userAvatar from '../../../assets/user_avatar/user-male.png';

export function SidebarHeader() {
  return (
    <React.Fragment>
      <div className={styles.box}>
        <img className={styles.background} src={navBackground} alt='user background' />
      </div>
      <figure className={styles.box_avatar}>
        <img className={styles.avatar} src={userAvatar} alt='user avatar' />
        <figcaption className={styles.user_name}>User Name</figcaption>
      </figure>
    </React.Fragment>
  );
}
