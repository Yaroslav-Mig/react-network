import React from 'react';
import styles from './NewPost.module.css';
import globalStyles from '../../../../styles/Global.module.css';

export function UserNewPost() {
  return (
    <React.Fragment>
      <h2 className={globalStyles.heading_m}>My posts</h2>
      <form
        className={`${globalStyles.box_sizing} ${styles.form}`}
        id='new-post'
        action='#'
        method='get'
        encType='text/plain'
      >
        <textarea className={styles.field} form='new-post' rows='5'></textarea>
        <button className={styles.submit} form='new-post' type='submit'>
          Send
        </button>
      </form>
    </React.Fragment>
  );
}
