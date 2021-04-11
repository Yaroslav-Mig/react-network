import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar.jsx';
import { MainPage } from './components/main/MainPage';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <MainPage />
    </div>
  );
}

export default App;
