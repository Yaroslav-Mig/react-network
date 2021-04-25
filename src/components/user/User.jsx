import React from 'react';
import { UserProfile } from './profile/Profile';
import { UserPosts } from './posts/Posts';

export function User() {
  return (
    <React.Fragment>
      <UserProfile />
      <UserPosts />
    </React.Fragment>
  );
}
