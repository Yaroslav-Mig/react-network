import React from 'react';
import styles from './MainPage.module.css';
import pageBackground from '../../assets/user_photo/desert.jpg';
import userAvatar from '../../assets/user_avatar/user-male.png';

export function MainPage() {
  return (
    <main className={styles.container}>
      <section className={styles.box_profile}>
        <h2 className={styles.profile_heading}>User Name</h2>
        <div className={styles.profile_inner}>
          <div className={styles.wrapper_img}>
            <img
              className={`${styles.profile_background} ${styles.centered}`}
              src={pageBackground}
              alt='user background'
            />
          </div>
          <article className={styles.profile_module}>
            <img className={styles.profile_photo} src={userAvatar} alt='user avatar' />
            <ul className={styles.profile_info}>
              <li className={styles.profile_item}>
                Date of Birth :<span>1989</span>
              </li>
              <li className={styles.profile_item}>
                Gender :<span>male</span>
              </li>
              <li className={styles.profile_item}>
                Family status :<span>married</span>
              </li>
              <li className={styles.profile_item}>
                Current city :<span>Minsk</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <section className={styles.box_post}>
        <h2 className={styles.post_heading}>My posts</h2>
        <form className={styles.post_form} id='new-post' action='#' method='get' enctype='text/plain'>
          <textarea className={styles.post_field} form='new-post' rows='5'></textarea>
          <button className={styles.post_submit} form='new-post' type='submit'>
            Send
          </button>
        </form>
        <div className={styles.post_wall}>
          <article className={styles.post_module}>
            <header className={styles.post_header}>
              <a className={styles.post_avatar_inner} href='#'>
                <img className={styles.post_avatar} src={userAvatar} alt='user avatar' />
              </a>
              <div className={styles.post_info}>
                <h3 className={styles.post_author}>
                  <a href='#'>User name</a>
                </h3>
                <p className={styles.post_date}>
                  posted on <time datetime='1914-12-20 08:00'>May 17</time>
                </p>
              </div>
            </header>
            <div className={styles.post_content}>
              <p className={styles.post_text}>I agree, Germany is my favorite country.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
