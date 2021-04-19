import React from 'react';
import { UserStoryPost } from './StoryPost';
import globalStyles from '../../../../styles/Global.module.css';

export function UserStoryPosts() {
  return (
    <div className={globalStyles.box_sizing}>
      <UserStoryPost userName='Alex' postText='I agree, Germany is my favorite country' postDate='May 17' />
      <UserStoryPost userName='Roy' postText='It was my first trip' postDate='May 23' />
    </div>
  );
}
