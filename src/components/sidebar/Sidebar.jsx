import React from 'react';
import styles from './Sidebar.module.css';
import { SidebarHeader } from './header/Header';
import { SidebarNavList } from './nav_list/NavList';

export function Sidebar() {
  return (
    <aside className={styles.container}>
      <SidebarHeader />
      <SidebarNavList />
    </aside>
  );
}
