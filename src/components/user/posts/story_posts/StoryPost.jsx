import React from 'react';
import styles from './StoryPosts.module.css';
import userAvatar from '../../../../assets/user_avatar/user-male.png';

export function UserStoryPost() {
  return (
    <article className={styles.module}>
      <header className={styles.header}>
        <a className={styles.avatar_inner} href='#'>
          <img className={styles.avatar} src={userAvatar} alt='user avatar' />
        </a>
        <div className={styles.info}>
          <h3 className={styles.author}>
            <a href='#'>User name</a>
          </h3>
          <p className={styles.date}>
            posted on <time datetime='1914-12-20 08:00'>May 17</time>
          </p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>I agree, Germany is my favorite country.</p>
      </div>
    </article>
  );
}
