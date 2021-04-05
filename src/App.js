import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { MainPage } from './components/main/MainPage';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
