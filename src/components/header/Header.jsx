import React from 'react';
import { images } from '../../assets/images';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.container}>
			<a href="#" className={styles.logo_box}>
				<img className={styles.logo} src={`${images.logo}`} alt="Logo" />
			</a>
			<h1>
				<a className={styles.heading} href="#">KeepInTouch</a>
			</h1>
		</header>
	);
}