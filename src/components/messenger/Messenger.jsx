import React from 'react';
import { MessengerHeader } from './header/Header';
import { MessengerSearch } from './search/Search';
import { MessengerDialogs } from './dialogs/Dialogs';

export function Messenger() {
  return (
    <React.Fragment>
      <MessengerHeader />
      <MessengerSearch />
      <MessengerDialogs />
    </React.Fragment>
  );
}
