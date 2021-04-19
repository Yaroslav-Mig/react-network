import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Messenger } from './components/messenger/Messenger';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { User } from './components/user/User';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <main className='main-container'>
          <Route path='/profile' component={User} />
          <Route path='/messenger' component={Messenger} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
