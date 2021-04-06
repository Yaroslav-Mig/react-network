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
      <section>
        <h2>My posts</h2>
        <form id='new-post' action='#' method='get' enctype='text/plain'>
          <textarea form='new-post' rows='3' cols='10'></textarea>
          <button form='new-post' type='submit'>
            Send
          </button>
        </form>
        <article>
          <h3>user name</h3>
          <aside>
            <img src='#' alt='avatar' />
          </aside>
          <p>I agree, Germany is my favorite country.</p>
          <footer>
            <p>
              Posted on<time datetime='1914-12-20 08:00'> May 17</time>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
}
