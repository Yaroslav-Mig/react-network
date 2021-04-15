import React from 'react';
import styles from './StoryPosts.module.css';
import userAvatar from '../../../../assets/user_avatar/user-male.png';

export function UserStoryPost(props) {
  const { postText, postDate, userName } = props;
  return (
    <article className={styles.module}>
      <header className={styles.header}>
        <a className={styles.avatar_inner} href='#'>
          <img className={styles.avatar} src={userAvatar} alt='user avatar' />
        </a>
        <div className={styles.info}>
          <h3 className={styles.author}>
            <a href='#'>{userName}</a>
          </h3>
          <p className={styles.date}>
            posted on <time datetime='1914-12-20 08:00'>{postDate}</time>
          </p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.text}>{postText}</p>
      </div>
    </article>
  );
}
