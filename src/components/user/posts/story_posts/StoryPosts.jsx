import React from 'react';
import styles from './StoryPosts.module.css';
import { UserStoryPost } from './StoryPost';

export function UserStoryPosts() {
  return (
    <div className={styles.wall}>
      <UserStoryPost userName='Alex' postText='I agree, Germany is my favorite country' postDate='May 17' />
      <UserStoryPost userName='Roy' postText='It was my first trip' postDate='May 23' />
    </div>
  );
}
