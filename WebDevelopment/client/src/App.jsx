import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import TravelersChoice from './components/travelers-choice';
import Amestardam from './components/Amestardam';
import Reservation from './components/Reservation'; // ✅ Make sure this path is correct

function App() {
  return (
    <Router>
      <Header />
      <div style={{ marginTop: '200px' }}>
        <Routes>
          <Route path="/" element={<HeaderMenu />} />
          <Route path="/travelers-choice" element={<TravelersChoice />} />
          <Route path="/amestardam" element={<Amestardam />} />
          <Route path="/reservation" element={<Reservation />} /> {/* ✅ New Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
