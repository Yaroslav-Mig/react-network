import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { User } from './components/user/User';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <User />
    </div>
  );
}

export default App;
