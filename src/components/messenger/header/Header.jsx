import React from 'react';
import styles from './Header.module.css';
import globalStyles from '../../../styles/Global.module.css';

export function MessengerHeader() {
  return (
    <header className={styles.header}>
      <h2 className={globalStyles.heading_m}>Messages</h2>
      <button className={styles.btn_message} type='button'>
        New message
      </button>
    </header>
  );
}
