import React from 'react';
import styles from './Search.module.css';

export function MessengerSearch() {
  return (
    <form className={styles.form} id='message-search' action='#' method='get' enctype='text/plain'>
      <input className={styles.field_search} form='message-search' type='search' />
      <button className={styles.btn_search} form='message-search' type='button'>
        Search
      </button>
    </form>
  );
}
