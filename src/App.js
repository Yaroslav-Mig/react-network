import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { User } from './components/user/User';
import { About } from './components/about/About';
import { News } from './components/news/News';
import { Messenger } from './components/messenger/Messenger';
import { Friends } from './components/friends/Friends';
import { Groups } from './components/groups/Groups';
import { Photos } from './components/photos/Photos';
import { Settings } from './components/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <main className='main-container'>
          <Route path='/profile' component={User} />
          <Route path='/about' component={About} />
          <Route path='/feed' component={News} />
          <Route path='/messenger' component={Messenger} />
          <Route path='/friends' component={Friends} />
          <Route path='/groups' component={Groups} />
          <Route path='/photos' component={Photos} />
          <Route path='/settings' component={Settings} />
          <Redirect exact from='/' to='/profile' />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
