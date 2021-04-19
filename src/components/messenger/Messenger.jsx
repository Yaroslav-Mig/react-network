import React from 'react';
import styles from './Messenger.module.css';
import globalStyles from '../../styles/Global.module.css';
import userAvatar from '../../assets/user_avatar/user-male.png';

export function Messenger() {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2 className={globalStyles.heading_m}>Messages</h2>
        <button className={styles.btn_message} type='button'>
          New message
        </button>
      </header>
      <form className={styles.form} id='message-search' action='#' method='get' enctype='text/plain'>
        <input className={styles.field_search} form='message-search' type='search' />
        <button className={styles.btn_search} form='message-search' type='submit'>
          Search
        </button>
      </form>
      <ul className={styles.box}>
        <li className={styles.module}>
          <a className={globalStyles.avatar_inner} href='#'>
            <img className={globalStyles.avatar} src={userAvatar} alt='user avatar' />
          </a>
          <div className={styles.content}>
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
        <li className={styles.module}>
          <a className={globalStyles.avatar_inner} href='#'>
            <img className={globalStyles.avatar} src={userAvatar} alt='user avatar' />
          </a>
          <div className={styles.content}>
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
    </React.Fragment>
  );
}
