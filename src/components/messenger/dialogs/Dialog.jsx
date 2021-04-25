import React from 'react';
import styles from './Dialogs.module.css';
import globalStyles from '../../../styles/Global.module.css';
import userAvatar from '../../../assets/user_avatar/user-male.png';
import { Link } from 'react-router-dom';

export function MessengerDialog(props) {
  const { userName, idPath, date, textPreview } = props;
  const path = `/messenger/${idPath}`;
  return (
    <>
      <li className={`${styles.module} ${globalStyles.box_sizing}`}>
        <Link to={path} className={`${styles.module_inner} ${globalStyles.box_sizing}`}>
          <DialogAvatar />
          <DialogContent userName={userName} textPreview={textPreview} />
          <DialogDate date={date} />
        </Link>
      </li>
    </>
  );
}

export function DialogAvatar() {
  return (
    <div className={globalStyles.avatar_inner}>
      <img className={globalStyles.avatar} src={userAvatar} alt='user avatar' />
    </div>
  );
}

export function DialogContent(props) {
  const { userName, textPreview } = props;
  return (
    <div className={`${globalStyles.box_sizing} ${styles.content}`}>
      <h3 className={`${globalStyles.userName} ${globalStyles.userName_link}`}>{userName}</h3>
      <p className={globalStyles.text}>{textPreview}</p>
    </div>
  );
}

export function DialogDate(props) {
  const { date } = props;
  return (
    <time className={`${globalStyles.date} ${styles.date}`} datetime='1914-12-20 08:00'>
      {date}
    </time>
  );
}
