import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyPassword from './pages/VerifyPassword';

function App() {

  return (
    <div className='pages'>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-password" element={<VerifyPassword />} />
    </Routes>
    </div>
  )
}

export default App
