import React from 'react';
import globalStyles from '../../../styles/Global.module.css';
import { MessengerDialog } from './Dialog';

export function MessengerDialogs() {
  return (
    <ul className={globalStyles.box}>
      <MessengerDialog userName='Garry' idPath={1} date='April 6' textPreview='Ridiculous' />
      <MessengerDialog userName='Bilbo' idPath={2} date='May 17' textPreview='butt rider' />
    </ul>
  );
}
