// components/Amestardam.jsx
import React from 'react';
import './travelers-choice.css';
import './Amestardam.css';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';
import img1 from '../assets/1.jpg';
import img2 from '../assets/ames2.jpg';
import img3 from '../assets/ames3.jpg';

import FooterTchoice from '../components/FooterTchoice';

const Amestardam = () => {
  return (
    <div className="container text-center mt-5">
      
            <div className="d-flex align-items-center flex-wrap">
              <Link to="/">
                <img
                  src={logo}
                  className="rounded-circle"
                  style={{ cursor: 'pointer' }}
                  width="80"
                  alt="Logo"
                />
              </Link>
              <span className="ms-2 fw-bold">TripAdvisor</span>
      
              {/* Search Bar */}
              <div className="ms-2 me-2 d-flex align-items-center" style={{ flexShrink: 0 }}>
                <div
                  className="input-group"
                  style={{
                    width: '260px',
                    border: '1px solid #ccc',
                    borderRadius: '50px',
                    overflow: 'hidden',
                  }}
                >
                  <span className="input-group-text bg-white border-0">
                    <i className="fas fa-search" style={{ cursor: 'pointer' }}></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-icon"
                    style={{ borderRadius: '50px' }}
                  />
                </div>
              </div>
      
              {/* Dropdowns */}
              <div className="d-flex align-items-center flex-wrap">
                {[{
                  label: 'Discover',
                  id: 'discoverMenu',
                  items: [
                    { text: 'Travelers Choice', link: '/travelers-choice' },
                    { text: 'Travelers Stories', link: '#' },
                  ],
                }, {
                  label: 'Trips',
                  id: 'tripsMenu',
                  items: [
                    { text: 'View My Trip', link: '/view-my-trips' },
                    { text: 'Start a New Trip', link: '#' },
                    { text: 'Create a Trip with AI', link: '#' },
                  ],
                }, {
                  label: 'Review',
                  id: 'reviewMenu',
                  items: [
                    { text: 'Write a Review', link: '#' },
                    { text: 'Post Photo', link: '/postphoto' },
                    { text: 'Add a Place', link: '#' },
                  ],
                }, {
                  label: 'More',
                  id: 'moreMenu',
                  items: [
                    { text: 'Cruises', link: '#' },
                    { text: 'Rental Cars', link: '#' },
                    { text: 'Forums', link: '#' },
                  ],
                }].map((menu, idx) => (
                  <div className="dropdown" key={idx} style={{ marginRight: '8px' }}>
                    <button
                      type="button"
                      className="btn btn-light rounded-pill dropdown-btn"
                      data-dropdown={menu.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelectorAll('.dropdown-menu').forEach((el) => {
                          if (el.id !== menu.id) el.classList.remove('show');
                        });
                        const dropdown = document.getElementById(menu.id);
                        dropdown?.classList.toggle('show');
                      }}
                    >
                      {menu.label}
                    </button>
                    <ul className="dropdown-menu" id={menu.id}>
                      {menu.items.map((item, i) => (
                        <li key={i}>
                          {item.link.startsWith('/') ? (
                            <Link className="dropdown-item" to={item.link}>
                              {item.text}
                            </Link>
                          ) : (
                            <a className="dropdown-item" href={item.link}>
                              {item.text}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
      
                {/* USD Region Button */}
                <button className="btn btn-light rounded-pill me-2" onClick={(e) => {
                  e.stopPropagation();
                  const dropdown = document.getElementById("regionDropdown");
                  if (dropdown) dropdown.style.display = "flex";
                }}>
                  <i className="fas fa-globe-americas"></i> | USD
                </button>
      
                {/* Signin Button */}
                <button type="button" className="btn btn-dark rounded-pill" onClick={() => {
                  document.getElementById("dropdownOverlay").style.display = "flex";
                  document.getElementById("initialDropdown").style.display = "block";
                  document.getElementById("emailDropdown").style.display = "none";
                }}>
                  Signin
                </button>
              </div>
            </div>
      
            {/* Region Dropdown */}
            <div id="regionDropdown" className="dropdown-overlay" onClick={(e) => {
              if (e.target.id === "regionDropdown") {
                e.currentTarget.style.display = "none";
              }
            }}>
              <div className="dropdown-content">
                <h1>Preferences</h1>
                <h4>Select Region & Language</h4>
                <ul className="dropdown-list">
                  {["🇺🇸 United States - English", "🇬🇧 United Kingdom - English", "🇫🇷 France - Français", "🇩🇪 Germany - Deutsch", "🇪🇸 Spain - Español", "🇯🇵 Japan - 日本語", "🇮🇳 India - हिंदी", "🇨🇳 China - 中文", "🇦🇺 Australia - English", "🇧🇷 Brazil - Português", "🇮🇪 Ireland - English", "🇳🇿 New Zealand - English"].map((region, i) => (
                    <li key={i}><a href="#">{region}</a></li>
                  ))}
                </ul>
              </div>
            </div>
      
            {/* Signin Overlay */}
            <div className="dropdown-overlay" id="dropdownOverlay" onClick={(e) => {
              if (e.target.id === "dropdownOverlay") {
                e.currentTarget.style.display = "none";
              }
            }}>
              <div className="dropdown-container" id="initialDropdown">
                <span className="close-btn" onClick={() => document.getElementById("dropdownOverlay").style.display = "none"}>&times;</span>
                <img src="logo1.png" className="rounded-circle" style={{ cursor: "pointer" }} width="60" />
                <h3 style={{ marginBottom: "30px" }}>Sign in to unlock the best of Tripadvisor.</h3>
                <button className="btn auth-btn w-100 mb-2 rounded-pill">
                  <i className="fab fa-google"></i> Continue with Google
                </button>
                <button className="btn auth-btn w-100 rounded-pill" onClick={() => {
                  document.getElementById("initialDropdown").style.display = "none";
                  document.getElementById("emailDropdown").style.display = "block";
                }}>
                  <i className="far fa-envelope"></i> Continue with Email
                </button>
                <p style={{ fontSize: "10px", marginTop: "60px" }}>
                  By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.
                  <br />
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </div>
      
              <div className="dropdown-container" id="emailDropdown" style={{ display: "none" }}>
                <span onClick={() => {
                  document.getElementById("emailDropdown").style.display = "none";
                  document.getElementById("initialDropdown").style.display = "block";
                }} style={{ position: "absolute", top: 10, left: 10, cursor: "pointer", fontSize: 20 }}>
                  ←
                </span>
                <span className="close-btn" onClick={() => document.getElementById("dropdownOverlay").style.display = "none"}>&times;</span>
                <img src="logo1.png" className="rounded-circle" style={{ cursor: "pointer" }} width="60" />
                <h2>Welcome Back</h2>
                <p><b>Email</b></p>
                <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                <p><b>Password</b></p>
                <input type="password" className="form-control mb-2" placeholder="Enter your password" />
                <p style={{ cursor: "pointer" }}><u>Forgot password?</u></p>
                <button className="btn btn-primary w-100 rounded-pill" style={{ backgroundColor: "#333" }}>Sign In</button>
                <p>Not a member?</p>
                <p style={{ cursor: "pointer" }}><u><b>Join</b></u> to unlock the best of TripAdvisor</p>
                <p style={{ fontSize: "10px" }}>
                  By proceeding, you agree to our Terms of Use and confirm you have read our Privacy and Cookie Statement.
                  <br />
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </div>
            </div>
      <h1>Welcome to Amestardam</h1>
       
       <div className="container mt-5">
      {/* Breadcrumb */}
      <p className="mb-1">
        <Link to="/" className="text-decoration-none fw-bold" style={{ color: 'black' }}>
          ← See all Things to Do in Amsterdam
        </Link>
      </p>

      {/* Title & Rating */}
      <h2 className="fw-bold">Amsterdam Classic Saloon Boat Cruise with Drinks and Cheese</h2>
      <div className="d-flex align-items-center mb-3">
        <span className="me-2" style={{ color: 'green', fontSize: '20px' }}>4.9</span>
        <span className="me-2 text-success">● ● ● ● ●</span>
        <Link className="me-3 text-decoration-none" to="#">(26,968 reviews)</Link>
        <span className="text-muted">Recommended by 97% of travelers</span>
      </div>

      {/* Buttons: Share / Review / Save */}
      <div className="d-flex justify-content-end mb-3 gap-2">
        <button className="btn btn-outline-dark d-flex align-items-center">
          <i className="fas fa-share me-1"></i> Share
        </button>
        <button className="btn btn-outline-dark d-flex align-items-center">
          <i className="fas fa-pen me-1"></i> Review
        </button>
        <button className="btn btn-outline-dark d-flex align-items-center">
          <i className="far fa-heart me-1"></i> Save
        </button>
      </div>

      {/* Image Section */}
      <div className="row mb-4">
        <div className="col-md-8 mb-3 mb-md-0">
          <img src={img1} alt="Main Boat" className="img-fluid rounded w-100" style={{ height: '400px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <img src={img2} alt="People on Boat" className="img-fluid rounded w-100" style={{ height: '195px', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={img3} alt="Boat Outside" className="img-fluid rounded w-100" style={{ height: '195px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Price Box */}
      <div className="border rounded p-3 shadow-sm mb-4" style={{ maxWidth: '250px' }}>
        <p className="mb-0">From</p>
        <h4 className="fw-bold mb-0">$25.25</h4>
        <small className="text-muted">per adult</small>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <a className="nav-link active" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Itinerary</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Operator</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Reviews</a>
        </li>
      </ul>

      {/* Sample content */}
      <p>This is a beautiful saloon boat cruise through the Amsterdam canals. Enjoy drinks and cheese while relaxing in a classic boat. Ideal for couples, families, and group travelers.</p>
    </div>



  <div className="row">
  {/* LEFT COLUMN */}
  <div className="col-lg-8 text-start">
    <h4>About</h4>
    <p>
      Elevate your Amsterdam canal cruise when you book this experience aboard a classic
      covered wooden saloon boat. Cruise along the UNESCO-listed canals and see famous
      sights like the Anne Frank House, the Rijksmuseum, and the picturesque ... <a href="#">Read more</a>
    </p>

    <ul className="list-unstyled mb-4">
      <li className="mb-2">
        <i className="fas fa-check-circle text-warning me-2"></i>
        <b>Free cancellation</b> • Full refund if cancelled up to 24 hours before the experience starts.
      </li>
      <li className="mb-2">
        <i className="fas fa-credit-card text-warning me-2"></i>
        <b>Reserve now & pay later</b> • Secure your spot while staying flexible.
      </li>
      <li className="mb-2">
        <i className="fas fa-tag text-warning me-2"></i>
        <b>Lowest price guarantee</b> • Find a lower price? We’ll refund the difference!
      </li>
    </ul>

    <ul className="list-unstyled mb-4">
      <li><i className="fas fa-user me-2"></i>Ages 3-99, max of 46 per group</li>
      <li><i className="fas fa-clock me-2"></i>Duration: 1h</li>
      <li><i className="fas fa-calendar-check me-2"></i>Start time: Check availability</li>
      <li><i className="fas fa-mobile-alt me-2"></i>Mobile ticket</li>
      <li><i className="fas fa-language me-2"></i>Live guide: English</li>
    </ul>

    <div className="mb-4">
      <h5>Highlights</h5>
      <ul>
        <li><a href="#">See itinerary</a></li>
      </ul>
    </div>

    <div className="mb-4">
      <h5>Want to share your experience?</h5>
      <button className="btn btn-outline-dark me-2">
        <i className="fas fa-pen me-1"></i> Write a review
      </button>
      <button className="btn btn-outline-dark">
        <i className="fas fa-camera me-1"></i> Add a photo
      </button>
    </div>

    <div className="mb-5">
      <h5>Traveler Reviews</h5>
      <div className="border rounded p-3 mb-3 shadow-sm">
        <strong>🌟🌟🌟🌟🌟</strong>
        <p className="mb-1">“An unforgettable cruise with amazing views and delicious cheese! Highly recommend.”</p>
        <small>- Sarah from UK</small>
      </div>
      <div className="border rounded p-3 mb-3 shadow-sm">
        <strong>🌟🌟🌟🌟</strong>
        <p className="mb-1">“Smooth ride and informative guide. Loved the relaxing vibe and wine onboard.”</p>
        <small>- Ahmed from UAE</small>
      </div>
      <div className="border rounded p-3 mb-3 shadow-sm">
        <strong>🌟🌟🌟🌟🌟</strong>
        <p className="mb-1">“Perfect for couples! Beautiful boat and great service.”</p>
        <small>- Julia from Germany</small>
      </div>
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="col-lg-4">
    <div className="border rounded p-3 shadow-sm mb-3">
      <p className="mb-0 text-muted">From</p>
      <h4 className="fw-bold">$25.25</h4>
      <small className="text-muted">per adult</small>
      <div className="d-flex justify-content-between align-items-center my-3">
        <span><i className="fas fa-calendar-alt me-2"></i>Wednesday, June 25, 2025</span>
        <span><i className="fas fa-user me-2"></i>2</span>
      </div>
      <div className="alert alert-warning small p-2">
        <i className="fas fa-info-circle me-1"></i>
        <b>Cancellation policy</b> • Cancel anytime before Jun 24 for full refund.
        <br />
        <b>Reserve now & pay later</b> • Flexible spot holding.
      </div>
    </div>

    {[{
      label: "POPULAR",
      location: "Cheese&Drinks, Anne Frank",
      address: "Prinsengracht 263, 1016 GV Amsterdam, Netherlands",
    }, {
      label: "RESERVE NOW & PAY LATER ELIGIBLE",
      location: "Cheese&Drinks, Central Station",
      address: "Prins Hendrikkade 33A, 1012 AB Amsterdam",
    }].map((tour, index) => (
      <div key={index} className="border rounded p-3 shadow-sm mb-3">
        <span className="badge bg-dark text-white mb-2">{tour.label}</span>
        <h6>{tour.location}</h6>
        <p className="text-muted small">{tour.address}</p>
        <p className="mb-1">2 Adults × $41.05</p>
        <p><strong>Total $82.10</strong></p>
        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-dark btn-sm">10:00 AM</button>
          <button className="btn btn-outline-dark btn-sm">10:15 AM</button>
          <button className="btn btn-outline-dark btn-sm">10:30 AM</button>
        </div>
        <a href="#" className="text-decoration-none small">See 34 More Times</a>
      </div>
    ))}

    <p className="text-decoration-underline small mb-3">See all 4 tour options</p>
    <div className="mb-3">
      <p className="text-success small">
        <i className="fas fa-check-circle me-1"></i>
        <b>Book ahead</b> • This is booked 19 days in advance on average.
      </p>
    </div>
   <Link to="/reservation" className="btn btn-warning text-white w-100 rounded-pill fw-bold">
  Reserve Now
</Link>

    <div className="border rounded p-3 mt-4 bg-light">
      <p className="fw-bold mb-1">Have booking questions?</p>
      <a href="tel:+18552755071" className="d-block text-decoration-none mb-1">
        <i className="fas fa-phone me-2"></i>+1 855 275 5071
      </a>
      <a href="#" className="d-block text-decoration-none">
        <i className="fas fa-comments me-2"></i>Chat now
      </a>
    </div>
  </div>
</div>




<FooterTchoice />
    </div>
  );
};

export default Amestardam;
