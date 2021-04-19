import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavList.module.css';

export function SidebarNavList() {
  return (
    <nav className={styles.box}>
      <h2 className={styles.heading}>My profile</h2>
      <ul className={styles.box_link}>
        <li>
          <Link className={styles.item_link} to='/profile'>
            Profile
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/news'>
            News
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/messenger'>
            Messenger
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/friends'>
            Friends
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/groups'>
            Communities
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/photos'>
            Photos
          </Link>
        </li>
        <li>
          <Link className={styles.item_link} to='/settings'>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}
