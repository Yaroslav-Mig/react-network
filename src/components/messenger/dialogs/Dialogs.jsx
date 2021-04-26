import React from 'react';
import globalStyles from '../../../styles/Global.module.css';
import { MessengerDialog } from './Dialog';

export function MessengerDialogs() {
  const dialogsPreview = [
    { id: 1, userName: 'Garry', date: 'April 6', text: 'Ridiculous' },
    { id: 2, userName: 'Bilbo', date: 'May 17', text: 'Butt rider' },
  ];

  return (
    <ul className={globalStyles.box}>
      <MessengerDialog
        userName={dialogsPreview[0].userName}
        idPath={dialogsPreview[0].id}
        date={dialogsPreview[0].date}
        textPreview={dialogsPreview[0].text}
      />
      <MessengerDialog
        userName={dialogsPreview[1].userName}
        idPath={dialogsPreview[1].id}
        date={dialogsPreview[1].date}
        textPreview={dialogsPreview[1].text}
      />
    </ul>
  );
}
