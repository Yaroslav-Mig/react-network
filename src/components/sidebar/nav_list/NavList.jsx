import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavList.module.css';

export function SidebarNavList() {
  return (
    <nav className={styles.box}>
      <h2 className={styles.heading}>My profile</h2>
      <ul className={styles.box_link}>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/profile'>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/feed'>
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/messenger'>
            Messenger
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/friends'>
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/groups'>
            Communities
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/photos'>
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item_link} activeClassName={styles.active_link} to='/settings'>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
