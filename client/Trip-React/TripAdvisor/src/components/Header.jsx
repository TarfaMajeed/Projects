import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // adjust path if needed

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed-top bg-white shadow-sm p-2 d-flex align-items-center justify-content-between`}
      style={{
        display: isVisible ? 'flex' : 'none',
        transition: 'all 0.3s ease',
        zIndex: 1050
      }}
    >
      <div className="d-flex align-items-center">
        <img src={logo} alt="logo" width="50" className="rounded-circle" />
        <span className="ms-2 fw-bold">TripAdvisor</span>
      </div>

      <button className="btn btn-dark rounded-pill">Sign In</button>
    </header>
  );
}

export default Header;
