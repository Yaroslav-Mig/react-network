import React from 'react';
import styles from './UserProfile.module.css';
import pageBackground from '../../../assets/user_photo/desert.jpg';
import { UserProfileContent } from './content/UserProfileContent';

export function UserProfile() {
  return (
    <section className={styles.box}>
      <UserProfileTitle />
      <div className={styles.inner}>
        <UserProfileBackground />
        <UserProfileContent />
      </div>
    </section>
  );
}

function UserProfileTitle() {
  return <h2 className={styles.heading}>User Name</h2>;
}

function UserProfileBackground() {
  return (
    <div className={styles.wrapper_img}>
      <img className={`${styles.background} ${styles.centered}`} src={pageBackground} alt='user background' />
    </div>
  );
}
