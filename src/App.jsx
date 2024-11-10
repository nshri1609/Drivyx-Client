import React, { useState } from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginRegister from './pages/Auth/LoginRegister/LoginRegister';
import DrivyxPreDashboard from './DrivyxPreDashboard/DrivyxPreDashboard';
import MainDashBoard from './MainDashBoard/MainDashBoard';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TermAndCondition from './components/TermAndCondition/TermAndCondition';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/DrivyxPreDashboard" element={<DrivyxPreDashboard />} />
        <Route path="/mainDashboard" element={<ProtectedRoute><MainDashBoard /></ProtectedRoute>}/>
        <Route path="/termAndCondition" element={<ProtectedRoute><TermAndCondition /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
