import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './componentes/MainPage/MainPage';
import LoginPage from './componentes/LoginPage/LoginPage';
import Nav from './componentes/Navigation/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
