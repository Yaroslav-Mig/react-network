import React from 'react';
import { UserStoryPost } from './StoryPost';
import globalStyles from '../../../../styles/Global.module.css';

export function UserStoryPosts() {
  const postsData = [
    { id: 1, userName: 'Alex', text: 'I agree, Germany is my favorite country', date: 'May 17', likes: 23 },
    { id: 2, userName: 'Roy', text: 'It was my first trip', date: 'May 23', likes: 17 },
  ];
  const postsElements = postsData.map((post) => (
    <UserStoryPost
      id={post.id}
      userName={post.userName}
      postText={post.text}
      postDate={post.date}
      postLikes={post.likes}
    />
  ));

  return <div className={globalStyles.box_sizing}>{postsElements}</div>;
}
