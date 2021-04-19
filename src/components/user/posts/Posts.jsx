import React from 'react';
import { UserNewPost } from './new_post/NewPost';
import { UserStoryPosts } from './story_posts/StoryPosts';
import styles from './Posts.module.css';
import globalStyles from '../../../styles/Global.module.css';

export function UserPosts() {
  return (
    <section className={`${globalStyles.box} ${globalStyles.box_sizing}`}>
      <UserNewPost />
      <UserStoryPosts />
    </section>
  );
}
