import React from 'react';
import './App.css';
import AppHeader from './components/header/header';
import MainProfilePage from './pages/main-profile/main-profile';
import MainProgressPage from './pages/main-progress/main-progress';
import Registration from './pages/registration/registration';
import LogIn from './pages/login/login';
import ForgotPassword from './pages/forgot-password/forgot-password';
import ResetPassword from './pages/reset-password/reset-password';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/main';
import AppFooter from './components/footer/footer';
import MainCoachPage from './pages/main-coach/main-coach';
import { useMatch } from 'react-router-dom';



function App() {

  const isProfile = useMatch({ path: '/profile' })
  const isProgress = useMatch({ path: '/progress' })
  const isCoach = useMatch({ path: '/coach' })

  return (
    <div className="App">
      <AppHeader />
      <Routes>
        < Route path='/' element={<MainPage />} />
        < Route path='/profile' element={<MainProfilePage />} />
        < Route path='/coach' element={<MainCoachPage />} />
        < Route path='/progress' element={<MainProgressPage />} />
        < Route path='/registration' element={<Registration />} />
        < Route path='/login' element={<LogIn />} />
        < Route path='/forgot-password' element={<ForgotPassword />} />
        < Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
      {isProfile || isProgress || isCoach ? null : <AppFooter />}
    </div>
  );
}

export default App;