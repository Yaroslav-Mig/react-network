import React from 'react';
import styles from './Profile.module.css';
import pageBackground from '../../../assets/user_photo/desert.jpg';
import { UserProfileContent } from './content/Content';

export function UserProfile() {
  const userInfo = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    birthday: 1689,
    gender: 'male',
    familyStatus: 'single',
    city: 'Kingston',
  };
  return (
    <section className={styles.box}>
      <UserProfileTitle userInfo={userInfo} />
      <div className={styles.inner}>
        <UserProfileBackground />
        <UserProfileContent userInfo={userInfo} />
      </div>
    </section>
  );
}

function UserProfileTitle(props) {
  const { firstName, lastName } = props.userInfo;
  return <h2 className={styles.heading}>{`${firstName} ${lastName}`}</h2>;
}

function UserProfileBackground() {
  return (
    <div className={styles.wrapper_img}>
      <img className={`${styles.background} ${styles.centered}`} src={pageBackground} alt='user background' />
    </div>
  );
}
