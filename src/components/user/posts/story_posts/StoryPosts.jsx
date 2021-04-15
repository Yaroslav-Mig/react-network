import React from 'react';
import styles from './StoryPosts.module.css';
import { UserStoryPost } from './StoryPost';

export function UserStoryPosts() {
  return (
		<div className={styles.wall}>
			<UserStoryPost/>
			<UserStoryPost/>
			<UserStoryPost/>
    </div>
  );
}
