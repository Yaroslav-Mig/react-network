import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

export function Header() {
  return (
    <header className={styles.container}>
      <a href='#' className={styles.logo_box}>
        <img className={styles.logo} src={logo} alt='Logo' />
      </a>
      <h1>
        <a className={styles.heading} href='#'>
          KeepInTouch
        </a>
      </h1>
    </header>
  );
}
