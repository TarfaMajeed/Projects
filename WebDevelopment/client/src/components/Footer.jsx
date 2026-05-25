// src/components/Footer.jsx
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/logo1.png'; // Adjust path if needed

const Footer = () => {
  const [currency, setCurrency] = useState('USD');
  const [country, setCountry] = useState('United States');
  const [showCurrency, setShowCurrency] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const currencyRef = useRef();
  const countryRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!currencyRef.current.contains(e.target)) setShowCurrency(false);
      if (!countryRef.current.contains(e.target)) setShowCountry(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMoreText = () => setShowMore(!showMore);

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20, flexWrap: 'wrap' }}>
        {[
          {
            heading: 'About Tripadvisor',
            items: [
              'About Us', 'Press', 'Resources and Policies', 'Careers', 'Investor Relation',
              'Trust & Safety', 'Contact us', 'Accessibility Statement', 'Bug Bounty Program'
            ]
          },
          {
            heading: 'Explore',
            items: [
              'write a Review', 'Add a place', 'join', 'Travelers’ Choice',
              'help center', 'travel stories'
            ]
          },
          {
            heading: 'Do Business With Us',
            items: [
              'Owner', 'Business Advantage', 'Sponsored Placements',
              'Advertise with Us', 'Access our Content API',
              'Become an Affiliate', 'Get The App', 'iPhone App', 'Android App'
            ]
          },
          {
            heading: 'Tripadvisor Sites',
            items: [
              'the best restaurants with TheFork',
              'Book tours and attraction tickets on Viator',
              'Read cruise reviews on Cruise Critic',
              'Get airline seating charts on Seat Guru',
              'Search for holiday rentals on Holiday Lettings'
            ]
          }
        ].map((section, index) => (
          <div key={index} style={{ flex: 1, padding: 10, minWidth: '200px' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><b>{section.heading}</b></li>
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  style={{ cursor: 'pointer' }}
                  onMouseOver={e => e.target.style.textDecoration = 'underline'}
                  onMouseOut={e => e.target.style.textDecoration = 'none'}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: 20, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 600 }}>
          <img src={logo} alt="Tripadvisor Logo" width="70" className="rounded-circle" style={{ cursor: 'pointer' }} />
          <span>
            © 2025 Tripadvisor LLC All rights reserved.
            {[
              'Terms of Use', 'Privacy and Cookies Statement', 'Cookie consent',
              'Site Map', 'How the site works', 'Contact us'
            ].map((text, idx) => (
              <span key={idx} style={{ cursor: 'pointer', textDecoration: 'underline', marginRight: 15 }}>
                <b>{text}</b>
              </span>
            ))}
          </span>
          <p>
            This is the version of our website addressed to speakers of English in the United States.
            If you are a resident of another country or region, please select the appropriate version.
            {showMore && (
              <span>
                <br /><br />
                Tripadvisor LLC makes no guarantees for availability of prices advertised.
                Prices may require specific conditions. Tripadvisor is not responsible for external content.
                <br /><br />
                Tripadvisor LLC is not a booking agent or tour operator. Please verify fees with our partners.
              </span>
            )}
            <span onClick={toggleMoreText} style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }}>
              {showMore ? ' See less' : ' See more'}
            </span>
          </p>
        </div>

        <div className="d-flex flex-column gap-2">
          {/* Currency Dropdown */}
<div ref={currencyRef} style={{ position: 'relative' }}>
  <input
    type="text"
    className="form-control rounded-pill"
    value={currency}
    readOnly
    onClick={() => {
      setShowCurrency(!showCurrency);
      setShowCountry(false); // optional: close other dropdown
    }}
    style={{ backgroundColor: 'white', border: '1px solid #ced4da', paddingRight: 30, cursor: 'pointer' }}
  />
  <span
    className="position-absolute top-50 end-0 translate-middle-y me-2"
    onClick={() => {
      setShowCurrency(!showCurrency);
      setShowCountry(false);
    }}
    style={{ cursor: 'pointer' }}
  >
    ▼
  </span>
  {showCurrency && (
    <ul
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        marginTop: 4,
        padding: 0,
        listStyle: 'none',
        maxHeight: 200,
        overflowY: 'auto',
      }}
    >
      {['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'BRL'].map((cur, idx) => (
        <li key={idx}>
          <button
            onClick={() => {
              setCurrency(cur);
              setShowCurrency(false);
            }}
            className="dropdown-item"
            style={{ width: '100%', textAlign: 'left' }}
          >
            {cur}
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

{/* Country Dropdown */}
<div ref={countryRef} style={{ position: 'relative', marginTop: '1rem' }}>
  <input
    type="text"
    className="form-control rounded-pill"
    value={country}
    readOnly
    onClick={() => {
      setShowCountry(!showCountry);
      setShowCurrency(false);
    }}
    style={{ backgroundColor: 'white', border: '1px solid #ced4da', paddingRight: 30, cursor: 'pointer' }}
  />
  <span
    className="position-absolute top-50 end-0 translate-middle-y me-2"
    onClick={() => {
      setShowCountry(!showCountry);
      setShowCurrency(false);
    }}
    style={{ cursor: 'pointer' }}
  >
    ▼
  </span>
  {showCountry && (
    <ul
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '0.5rem',
        marginTop: 4,
        padding: 0,
        listStyle: 'none',
        maxHeight: 200,
        overflowY: 'auto',
      }}
    >
      {['Mexico', 'Brazil', 'Canada', 'Argentina', 'Pakistan', 'Italy', 'China', 'Japan', 'India', 'France'].map((cty, idx) => (
        <li key={idx}>
          <button
            onClick={() => {
              setCountry(cty);
              setShowCountry(false);
            }}
            className="dropdown-item"
            style={{ width: '100%', textAlign: 'left' }}
          >
            {cty}
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

          {/* Social Icons */}
          <div className="d-flex justify-content-center gap-2 mt-3">
            {[
              { href: "https://www.facebook.com/Tripadvisor/", icon: "facebook" },
              { href: "https://www.youtube.com/TripAdvisor", icon: "youtube" },
              { href: "https://www.pinterest.com/tripadvisor/", icon: "pinterest" },
              { href: "https://twitter.com/TripAdvisor", icon: "twitter" },
              { href: "https://www.tiktok.com/@tripadvisor", icon: "tiktok" },
              { href: "https://www.instagram.com/tripadvisor/", icon: "instagram" }
            ].map(({ href, icon }, idx) => (
              <a key={idx} href={href} className="text-black" target="_blank" rel="noreferrer" style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <i className={`bi bi-${icon}`} style={{ fontSize: 24 }}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
