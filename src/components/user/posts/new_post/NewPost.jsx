import React from 'react';
import styles from './NewPost.module.css';

export function UserNewPost() {
  return (
    <React.Fragment>
      <h2 className={styles.heading}>My posts</h2>
      <form className={styles.form} id='new-post' action='#' method='get' enctype='text/plain'>
        <textarea className={styles.field} form='new-post' rows='5'></textarea>
        <button className={styles.submit} form='new-post' type='submit'>
          Send
        </button>
      </form>
    </React.Fragment>
  );
}
