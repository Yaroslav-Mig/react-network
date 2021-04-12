import React from 'react';
import { UserNewPost } from './new_post/NewPost';
import { UserStoryPosts } from './story_posts/Story';
import styles from './Posts.module.css';

export function UserPosts() {
  return (
    <section className={styles.box_post}>
      <UserNewPost />
      <UserStoryPosts />
    </section>
  );
}
