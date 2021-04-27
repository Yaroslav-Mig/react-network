import React from 'react';
import globalStyles from '../../../styles/Global.module.css';
import { MessengerDialog } from './Dialog';

export function MessengerDialogs() {
  const dialogsPreview = [
    { id: 1, userName: 'Garry', date: 'April 6', text: 'Ridiculous' },
    { id: 2, userName: 'Bilbo', date: 'May 17', text: 'Butt rider' },
	];
	
  const dialogsElements = dialogsPreview.map((dialog) => (
    <MessengerDialog userName={dialog.userName} idPath={dialog.id} date={dialog.date} textPreview={dialog.text} />
  ));

  return <ul className={globalStyles.box}>{dialogsElements}</ul>;
}
