import React from 'react';
import styles from './NavList.module.css';

export function SidebarNavList() {
  return (
    <nav className={styles.box}>
      <h2 className={styles.heading}>My profile</h2>
      <ul className={styles.box_link}>
        <li>
          <a className={styles.item_link} href='#'>
            Profile
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            About
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            News
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            Messenger
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            Friends
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            Communities
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            Photos
          </a>
        </li>
        <li>
          <a className={styles.item_link} href='#'>
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
