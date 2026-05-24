import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo1.png";
import "./travelers-choice.css";

const Footer = () => {
  const [showMoreText, setShowMoreText] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("United States");
  const currencyRef = useRef(null);
  const countryRef = useRef(null);

  const toggleMoreText = () => {
    setShowMoreText(!showMoreText);
  };

  const toggleDropdown = (ref) => {
    if (ref.current) {
      ref.current.style.display =
        ref.current.style.display === "block" ? "none" : "block";
    }
  };

  const handleClickOutside = (e) => {
    if (
      currencyRef.current &&
      !currencyRef.current.contains(e.target)
    ) {
      currencyRef.current.style.display = "none";
    }
    if (
      countryRef.current &&
      !countryRef.current.contains(e.target)
    ) {
      countryRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <footer>
      {/* Social Icons */}
      <div className="d-flex justify-content-center gap-2 mt-3">
        <a href="https://www.facebook.com/Tripadvisor/" className="icon-link">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.youtube.com/TripAdvisor" className="icon-link">
          <i className="bi bi-youtube"></i>
        </a>
        <a href="https://www.pinterest.com/tripadvisor/" className="icon-link">
          <i className="bi bi-pinterest"></i>
        </a>
        <a href="https://twitter.com/TripAdvisor" className="icon-link">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.tiktok.com/@tripadvisor" className="icon-link">
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/tripadvisor/" className="icon-link">
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      {/* Main Footer Section */}
      <div className="footer-main">
        <div className="footer-left">
          <img src={logo} className="rounded-circle" alt="TripAdvisor Logo" width="70" />
          <span>
            © 2025 Tripadvisor LLC All rights reserved.
            <span className="footer-link"><b>Terms of Use </b></span>
            <span className="footer-link"><b>Privacy and Cookies Statement</b></span>
            <span className="footer-link"><b>Cookie consent</b></span>
            <span className="footer-link"><b>Site Map</b></span>
            <span className="footer-link"><b>How the site works</b></span>
            <span className="footer-link"><b>Contact us</b></span>
          </span>
          <p>
            This is the version of our website addressed to speakers of English in the United States.{" "}
            If you are a resident of another country or region, please select the appropriate version of Tripadvisor
            for your country or region in the drop-down menu.
            {showMoreText && (
              <>
                <br />
                Tripadvisor LLC makes no guarantees for availability of prices advertised on our sites and applications. 
                Listed prices may require a stay of a particular length or have blackout dates, qualifications, 
                or other applicable restrictions. Tripadvisor LLC is not responsible for any content on external web 
                sites that are not owned or operated by Tripadvisor.
                <br /><br />
                Tripadvisor LLC is not a booking agent or tour operator. When you book with one of our partners, 
                please be sure to check their site for a full disclosure of all applicable fees.
              </>
            )}
            <span
              onClick={toggleMoreText}
              style={{ cursor: "pointer", color: "black", textDecoration: "underline" }}
            >
              {showMoreText ? " See less" : " See more"}
            </span>
          </p>
        </div>

        {/* Currency & Country Selectors */}
        <div className="d-flex flex-column gap-2">
          {/* Currency */}
          <div className="dropdown" ref={currencyRef}>
            <div className="position-relative">
              <input
                type="text"
                value={currency}
                readOnly
                onClick={() => toggleDropdown(currencyRef)}
                className="form-control rounded-pill"
                style={{ backgroundColor: "white", border: "1px solid #ced4da", boxShadow: "none", paddingRight: "30px" }}
              />
              <span className="position-absolute top-50 end-0 translate-middle-y me-2" onClick={() => toggleDropdown(currencyRef)} style={{ cursor: "pointer" }}>
                ▼
              </span>
            </div>
            <ul className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto", display: "none" }}>
              {["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "INR", "BRL"].map((c) => (
                <li key={c}>
                  <a href="#" className="dropdown-item" onClick={() => setCurrency(c)}>{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Country */}
          <div className="dropdown" ref={countryRef}>
            <div className="position-relative">
              <input
                type="text"
                value={country}
                readOnly
                onClick={() => toggleDropdown(countryRef)}
                className="form-control rounded-pill"
                style={{ backgroundColor: "white", border: "1px solid #ced4da", boxShadow: "none", paddingRight: "30px" }}
              />
              <span className="position-absolute top-50 end-0 translate-middle-y me-2" onClick={() => toggleDropdown(countryRef)} style={{ cursor: "pointer" }}>
                ▼
              </span>
            </div>
            <ul className="dropdown-menu" style={{ maxHeight: "200px", overflowY: "auto", display: "none" }}>
              {["Mexico", "Brazil", "Canada", "Argentina", "Pakistan", "Italy", "China", "Japan", "India", "France"].map((ctry) => (
                <li key={ctry}>
                  <a href="#" className="dropdown-item" onClick={() => setCountry(ctry)}>{ctry}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
