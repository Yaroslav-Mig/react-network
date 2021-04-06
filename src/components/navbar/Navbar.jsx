import React from 'react';
import styles from './Navbar.module.css';
import navBackground from '../../assets/user_photo/desert.jpg';
import userAvatar from '../../assets/user_avatar/user-male.png';

export function Navbar() {
	return (
		<aside className={styles.container}>
			<div className={styles.box_background}>
				<img className={styles.background} src={navBackground} alt="user background" />
			</div>
			<figure className={styles.box_avatar}>
				<img className={styles.avatar} src={userAvatar} alt="user avatar" />
				<figcaption className={styles.user_name}>User Name</figcaption>
			</figure>
			<nav className={styles.nav_box}>
				<h2 className={styles.nav_heading}>My profile</h2>
				<ul className={styles.box_link}>
					<li>
						<a className={styles.link_item} href="#">Profile</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">About</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">News</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">Messenger</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">Friends</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">Communities</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">Photos</a>
					</li>
					<li>
						<a className={styles.link_item} href="#">Settings</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}