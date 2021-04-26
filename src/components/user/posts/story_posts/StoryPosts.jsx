import React from 'react';
import { UserStoryPost } from './StoryPost';
import globalStyles from '../../../../styles/Global.module.css';

export function UserStoryPosts() {
  const postsData = [
    { id: 1, userName: 'Alex', text: 'I agree, Germany is my favorite country', date: 'May 17', likes: 23 },
    { id: 2, userName: 'Roy', text: 'It was my first trip', date: 'May 23', likes: 17 },
  ];
  return (
    <div className={globalStyles.box_sizing}>
      <UserStoryPost
        id={postsData[0].id}
        userName={postsData[0].userName}
        postText={postsData[0].text}
        postDate={postsData[0].date}
        postLikes={postsData[0].likes}
      />
      <UserStoryPost
        id={postsData[1].id}
        userName={postsData[1].userName}
        postText={postsData[1].text}
        postDate={postsData[1].date}
        postLikes={postsData[1].likes}
      />
    </div>
  );
}
