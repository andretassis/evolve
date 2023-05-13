import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './componentes/Navigation/Nav'
import MainPage from './componentes/MainPage/MainPage';
import LoginPage from './componentes/LoginPage/LoginPage';
import ProfilePage from './componentes/ProfilePage/ProfilePage';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={ProfilePage} />
      </Routes>
    </Router>
  );
}

export default App;
