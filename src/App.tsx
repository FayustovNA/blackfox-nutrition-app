import React from 'react';
import './App.css';
import AppHeader from './components/header/header';
import MainProfilePage from './pages/main-profile/main-profile';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainProfilePage />
    </div>
  );
}

export default App;