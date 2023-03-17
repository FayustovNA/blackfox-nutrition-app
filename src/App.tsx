import React from 'react';
import './App.css';
import AppHeader from './components/header/header';
import MainProfilePage from './pages/main-profile/main-profile';
import MainProgressPage from './pages/main-progress/main-progress';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainProfilePage />
      <MainProgressPage />
    </div>
  );
}

export default App;