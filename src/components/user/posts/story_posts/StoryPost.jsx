import React from 'react';
import styles from './StoryPosts.module.css';
import globalStyles from '../../../../styles/Global.module.css';
import userAvatar from '../../../../assets/user_avatar/user-male.png';

export function UserStoryPost(props) {
  const { id, userName, postText, postDate, postLikes } = props;
  return (
    <article id={id} className={`${globalStyles.box_sizing} ${styles.module}`}>
      <header className={`${globalStyles.box_sizing} ${styles.header}`}>
        <a className={globalStyles.avatar_inner} href='#'>
          <img className={globalStyles.avatar} src={userAvatar} alt='user avatar' />
        </a>
        <div className={styles.info}>
          <h3 className={globalStyles.userName}>
            <a className={globalStyles.userName_link} href='#'>
              {userName}
            </a>
          </h3>
          <p className={globalStyles.date}>
            posted on <time datetime='1914-12-20 08:00'>{postDate}</time>
          </p>
        </div>
      </header>
      <div className={globalStyles.box_sizing}>
        <p className={globalStyles.text}>{postText}</p>
      </div>
      <p>
        Likes<span> - {postLikes}</span>
      </p>
    </article>
  );
}
