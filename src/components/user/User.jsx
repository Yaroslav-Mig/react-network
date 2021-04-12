import React from 'react';
import { UserProfile } from './profile/UserProfile';
import { UserPosts } from './posts/Posts';
import styles from './User.module.css';

export function User() {
  return (
    <main className={styles.container}>
      <UserProfile />
      <UserPosts />
    </main>
  );
}
