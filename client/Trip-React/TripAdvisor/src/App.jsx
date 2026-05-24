import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeaderMenu from './components/HeaderMenu';
import TravelersChoice from './components/travelers-choice';
import Amestardam from './components/Amestardam';
import Reservation from './components/Reservation'; // ✅ Make sure this path is correct
import Sea from './components/Sea'; // <-- Import your new Sea component

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
          <Route path="/sea" element={<Sea />} /> {/* <-- Added Sea route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
