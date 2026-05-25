import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import caption2 from '../assets/caption 2.jpg'; 
import world from '../assets/world.jpg';
import south from '../assets/south.jpg';
import europe from '../assets/europe.jpg';
import caribbean from '../assets/caribbean.jpg';
import asia from '../assets/asia.jpg';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';

import img1s from '../assets/1s.jpg';
import img2s from '../assets/2s.jpg';
import img3s from '../assets/3s.jpg';
import img4s from '../assets/4s.jpg';
import img5s from '../assets/5s.jpg';
import img6s from '../assets/6s.jpg';
import img7s from '../assets/7s.jpg';
import img8s from '../assets/8s.jpg';
import img9s from '../assets/9s.jpg';

import more1 from '../assets/more1.jpg';
import more2 from '../assets/more2.jpg';
import more3 from '../assets/more3.jpg';

import TopDestinations from './TopDestinations';

import dogImage from '../assets/dog.jpg';
import logoImage from '../assets/logo1.png';

import girlImage from '../assets/girl.jpg';

import Footer from './Footer';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';







function HeaderApp() {
  const [showRegion, setShowRegion] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showEmailSignin, setShowEmailSignin] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('show'));
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (e, menuId) => {
    e.stopPropagation();
    const dropdownMenu = document.getElementById(menuId);
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu !== dropdownMenu) menu.classList.remove('show');
    });
    dropdownMenu.classList.toggle('show');
  };

  const toggleRegion = (e) => {
    e.stopPropagation();
    setShowRegion(true);
  };

  const handleSigninClick = () => {
    setShowSignin(true);
    setShowEmailSignin(false);
  };

  const handleEmailClick = () => {
    setShowEmailSignin(true);
  };

  const closeOverlays = () => {
    setShowRegion(false);
    setShowSignin(false);
    setShowEmailSignin(false);
  };


//for search bar
  const [searchQuery, setSearchQuery] = useState('');
const [showSuggestions, setShowSuggestions] = useState(false);
const searchRef = React.useRef();

const handleSearch = () => {
  if (searchQuery.trim()) {
    console.log('Searching for:', searchQuery);
    // Add real search logic here if needed
  }
};

// Hide dropdown on outside click
useEffect(() => {
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);








const navigate = useNavigate();
  return (
    <div className="header-app">
      {/* Logo and Title */}
      <div className="d-flex align-items-center mb-3">
        <img src={logo} className="rounded-circle" style={{ cursor: 'pointer' }} width="80" alt="Logo" />
        <span className="ms-2 fw-bold">TripAdvisor</span>
      </div>



{/* Nav Dropdowns */}
{["Discover", "Trips", "Review", "More"].map((label, i) => {
  const id = label.toLowerCase() + "Menu";
  const items = {
    Discover: [
      { name: "Travelers Choice", route: "/travelers-choice" },
      { name: "Travelers Stories" }
    ],
    Trips: [
      { name: "View My Trip" },
      { name: "Start a New Trip" },
      { name: "Create a Trip with AI" }
    ],
    Review: [
      { name: "Write a Review" },
      { name: "Post Photo" },
      { name: "Add a Place" }
    ],
    More: [
      { name: "Cruises" },
      { name: "Rental Cars" },
      { name: "Forums" }
    ]
  };

  return (
    <div key={i} className="dropdown d-inline-block me-2">
      <button
        type="button"
        className="btn btn-light rounded-pill dropdown-btn"
        onClick={(e) => toggleDropdown(e, id)}
      >
        {label}
      </button>
      <ul className="dropdown-menu" id={id}>
        {items[label].map((item, idx) => (
          <li key={idx}>
            {item.route ? (
              <Link className="dropdown-item" to={item.route}>{item.name}</Link>
            ) : (
              <a className="dropdown-item" href="#">{item.name}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
})}



      {/* USD Region Dropdown */}
      <button className="btn btn-light rounded-pill me-2" id="discoverButton" onClick={toggleRegion}>
        <i className="fas fa-globe-americas"></i> | USD
      </button>

      {/* Region Overlay */}
      {showRegion && (
        <div className="dropdown-overlay" onClick={closeOverlays}>
          <div className="dropdown-content" onClick={e => e.stopPropagation()}>
            <h1>Preferences</h1>
            <h4>Select Region & Language</h4>
            <ul className="dropdown-list">
              {[
                "🇺🇸 United States - English", "🇬🇧 United Kingdom - English", "🇫🇷 France - Français",
                "🇩🇪 Germany - Deutsch", "🇪🇸 Spain - Español", "🇯🇵 Japan - 日本語",
                "🇮🇳 India - हिंदी", "🇨🇳 China - 中文", "🇦🇺 Australia - English",
                "🇧🇷 Brazil - Português", "🇮🇪 Ireland - English", "🇳🇿 New Zealand - English"
              ].map((region, idx) => <li key={idx}><a href="#">{region}</a></li>)}
            </ul>
          </div>
        </div>
      )}

      {/* Signin Button */}
      <button type="button" className="btn btn-dark rounded-pill" onClick={handleSigninClick}>Sign In</button>

      {/* Signin Overlay */}
      {showSignin && (
        <div className="dropdown-overlay" onClick={closeOverlays}>
          <div className="dropdown-container" onClick={e => e.stopPropagation()}>
            {!showEmailSignin ? (
              <>
                <span className="close-btn" onClick={closeOverlays}>&times;</span>
                <img src={logo} className="rounded-circle mb-2" width="80" alt="logo" />
                <h3 className="mb-3">Sign in to unlock the best of Tripadvisor.</h3>
                <button className="btn auth-btn w-100 mb-2 rounded-pill">
                  <i className="fab fa-google"></i> Continue with Google
                </button>
                <button className="btn auth-btn w-100 rounded-pill" onClick={handleEmailClick}>
                  <i className="far fa-envelope"></i> Continue with Email
                </button>
              </>
            ) : (
              <>
                <span className="close-btn" onClick={closeOverlays}>&times;</span>
                <span className="back-arrow" onClick={() => setShowEmailSignin(false)}>&#8592;</span>
                <img src={logo} className="rounded-circle mb-2" width="60" alt="logo" />
                <h2>Welcome Back</h2>
                <p><b>Email</b></p>
                <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                <p><b>Password</b></p>
                <input type="password" className="form-control mb-2" placeholder="Enter your password" />
                <button className="btn btn-primary w-100 rounded-pill" style={{ backgroundColor: "#333" }}>
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {/* WHERE TO? Section */}
<div className="text-center my-5">
  <h1 className="display-1"><b>WHERE TO?</b></h1>

  <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
    <button className="btn btn-light" id="CurrentButton">
      <i className="fas fa-search"></i> | Search All
    </button>

    <a href="hotels.html">
      <button className="btn btn-light" id="Button">
        <i className="fas fa-bed"></i> | Hotels
      </button>
    </a>

    <a href="things.html">
      <button className="btn btn-light" id="Button">
        <i className="fas fa-camera"></i> | Things to do
      </button>
    </a>

    <a href="restruants.html">
      <button className="btn btn-light" id="Button">
        <i className="fas fa-utensils"></i> | Restaurants
      </button>
    </a>

    <a href="flights.html">
      <button className="btn btn-light" id="Button">
        <i className="fas fa-plane"></i> | Flights
      </button>
    </a>

    <a href="vacation.html">
      <button className="btn btn-light" id="Button">
        <i className="fas fa-key"></i> | Vacation rentals
      </button>
    </a>
  </div>
</div>



{/* Spacer */}
<div style={{ marginBottom: '40px' }}></div>

{/* Search Bar Container */}
<div className="container d-flex justify-content-center position-relative">
  <div className="input-group" style={{ width: '50%', maxWidth: '500px' }}>
    <span className="input-group-text border-3">
      <i className="fas fa-search rounded-circle" style={{ cursor: 'pointer' }}></i>
    </span>
    <input
      type="text"
      className="form-control border-0"
      placeholder="Places to go, things to do, hotels"
      aria-label="Search"
      aria-describedby="search-icon"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={() => setShowSuggestions(true)}
      ref={searchRef}
    />
    <button
      className="btn btn-primary rounded-circle"
      type="button"
      onClick={handleSearch}
    >
      Search
    </button>
  </div>

  {/* Suggestions Dropdown */}
  {showSuggestions && searchQuery && (
    <div
      className="dropdown-menu show"
      style={{
        position: 'absolute',
        top: '100%',
        width: '50%',
        maxWidth: '500px',
        zIndex: 1000,
      }}
    >
      {/* Nearby Places */}
      <div className="dropdown-header">Nearby Places</div>
      <a className="dropdown-item" href="#">
        <i className="fas fa-map-marker-alt"></i> Nearby
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-mountain"></i> Hills
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-building"></i> Hotel Paradise
      </a>

      <div className="dropdown-divider"></div>

      {/* Recently Visited */}
      <div className="dropdown-header">Recently Visited</div>
      <a className="dropdown-item" href="#">
        <i className="fas fa-globe"></i> Paris
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-flag"></i> New York
      </a>
      <a className="dropdown-item" href="#">
        <i className="fas fa-umbrella-beach"></i> Maldives
      </a>
    </div>
  )}
</div>




<div className="container my-4 d-flex justify-content-center">
  <img
    src={caption2}
    alt="Caption"
    style={{ width: '400%', maxWidth: '1500px', borderRadius: '10px' }}
    className="img-fluid shadow"
  />
</div>





<div className="container text-center my-5">
  <h5><b>Explore the world’s most stunning seasides</b></h5>
  <p style={{ marginBottom: '30px' }}>2025’s Travelers’ Choice Awards Best of the Best Beaches</p>

  <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      {/* Slide 1 */}
      <div className="carousel-item active">
        <div className="row">
          {[world, south, europe, caribbean].map((imgSrc, i) => (
            <div className="col-md-3" key={i}>
              <img
                src={imgSrc}
                className="d-block w-100"
                alt={`Slide ${i}`}
                style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
                onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.5)'}
                onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slide 2 */}
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-3">
            <img
              src={asia}
              className="d-block w-100"
              alt="Asia"
              style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.5)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)' }
            />
          </div>
          <div className="col-md-3" />
          <div className="col-md-3" />
          <div className="col-md-3" />
        </div>
      </div>
    </div>

    {/* Carousel Controls */}
    <button
      className="carousel-control-prev bg-dark rounded-circle"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
      style={{ width: '40px', height: '40px' }}
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>

    <button
      className="carousel-control-next bg-dark rounded-circle"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
      style={{ width: '40px', height: '40px' }}
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>







<div className="container my-5">

      {/* Heading */}
      <h3><b>You might like these</b></h3>
      <p>More things to do in Amsterdam</p>

      {/* Bootstrap Carousel */}
      <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
             {[img1, img2, img3, img4].map((img, index) => (
  <div className="col-md-3 position-relative" key={index}>
    <img
      src={img}
      className="d-block w-100"
      alt={`Slide ${index + 1}`}
      style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
      onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(1.5)')}
      onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
      onClick={() => {
  if (index === 0) navigate('/amestardam');
}}

    />

                  <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle" style={{ width: '30px', height: '30px' }}>
                    <i className="fas fa-heart" style={{ fontSize: '15px', lineHeight: '30px' }}></i>
                  </button>
                  <div className="text-center my-2">
                    <button type="button" className="btn btn-light border-black">Best Seller</button>
                    <h4>Some Sample Title Here</h4>
                    <div className="rating text-success">
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <span className="h6 text-muted ms-2">4,000</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {[img5, img6, img7, img8].map((img, index) => (
                <div className="col-md-3 position-relative" key={index + 4}>
                  <img src={img} className="d-block w-100" alt={`Slide ${index + 5}`} />
                  <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle">
                    <i className="fas fa-heart"></i>
                  </button>
                  <div className="text-center my-2">
                    <h4>Another Tour Title</h4>
                    <div className="rating text-success">
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <i className="bi bi-circle-fill"></i>
                      <span className="h6 text-muted ms-2">2,500</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3 position-relative">
                <img src={img9} className="d-block w-100" alt="Slide 9" />
                <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle">
                  <i className="fas fa-heart"></i>
                </button>
                <div className="text-center my-2">
                  <button type="button" className="btn btn-light border-black">Top Pick</button>
                  <h4>Luxury Tour Option</h4>
                  <div className="rating text-success">
                    <i className="bi bi-circle-fill"></i>
                    <i className="bi bi-circle-fill"></i>
                    <i className="bi bi-circle-fill"></i>
                    <i className="bi bi-circle-fill"></i>
                    <i className="bi bi-circle-fill"></i>
                    <span className="h6 text-muted ms-2">9,999</span>
                  </div>
                </div>
              </div>
              {/* Fill 3 empty cols for symmetry */}
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev bg-dark rounded-circle"
          type="button"
          data-bs-target="#carouselExample1"
          data-bs-slide="prev"
          style={{ width: '40px', height: '40px' }}
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-dark rounded-circle"
          type="button"
          data-bs-target="#carouselExample1"
          data-bs-slide="next"
          style={{ width: '40px', height: '40px' }}
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>






<div className="container mt-5">
      <h3><b>Ways to tour Islamabad</b></h3>
      <p style={{ marginBottom: "30px" }}>Book these experiences for a close-up look at Islamabad.</p>

      <div className="carousel slide" id="carouselExample2" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              {[
                { img: img1s, title: "Amsterdam Classic Saloon Boat Cruise, Drinks and Cheese Option.", rating: 5, reviews: "24,120", badge: "best seller" },
                { img: img2s, title: "Anne Frank Garden Walking Tour Through Amsterdam's Jewish Quarter.", rating: 5, reviews: "19,340", badge: "best seller" },
                { img: img3s, title: "Amsterdam Evening Canal Cruise with live Guide and Onboard Bar.", rating: 1, reviews: "790" },
                { img: img4s, title: "Amsterdam Jordaan Food And Drinks tour With Eating Europe.", rating: 5, reviews: "2,544" }
              ].map((item, i) => (
                <div className="col-md-3" key={i} style={{ position: "relative" }}>
                  <img src={item.img} className="d-block w-100" alt="..." style={{ cursor: "pointer", transition: "filter 0.3s ease" }} />
                  <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle" style={{ width: "30px", height: "30px" }}>
                    <i className="fas fa-heart" style={{ fontSize: "15px", lineHeight: "30px" }}></i>
                  </button>
                  <div className="text-center">
                    <div className="my-2"></div>
                    {item.badge && <button type="button" className="btn btn-light border-black">{item.badge}</button>}
                    <h4>{item.title}</h4>
                    <div className="rating">
                      <span className="h2">
                        {[...Array(5)].map((_, j) => (
                          <i key={j} className="bi bi-circle-fill" style={{ color: j < item.rating ? "green" : "gray", fontSize: "16px" }}></i>
                        ))}
                      </span>
                      <span className="h6 text-muted"> {item.reviews}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {[
                { img: img5s, title: "Amsterdam: Luxury Canal Cruise Unlimited Drinks & Bytes Option.", rating: 5, reviews: "234", badge: "best seller" },
                { img: img6s, title: "Guided Bike Tour Of Amsterdam's HighLights and Hidden Gems.", rating: 4, reviews: "120" },
                { img: img7s, title: "Amsterdam: Luxury Cruise with Onboard Bar incl. Welcome Liquour.", rating: 5, reviews: "544", badge: "Likely to sellout" },
                { img: img8s, title: "Luxury Canal Cruise With Unlimited Drinks Option.", rating: 3, reviews: "5,456" }
              ].map((item, i) => (
                <div className="col-md-3" key={i} style={{ position: "relative" }}>
                  <img src={item.img} className="d-block w-100" alt="..." style={{ cursor: "pointer", transition: "filter 0.3s ease" }} />
                  <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle" style={{ width: "30px", height: "30px" }}>
                    <i className="fas fa-heart" style={{ fontSize: "15px", lineHeight: "30px" }}></i>
                  </button>
                  <div className="text-center">
                    <div className="my-2"></div>
                    {item.badge && <button type="button" className="btn btn-light border-black">{item.badge}</button>}
                    <h4>{item.title}</h4>
                    <div className="rating">
                      <span className="h2">
                        {[...Array(5)].map((_, j) => (
                          <i key={j} className="bi bi-circle-fill" style={{ color: j < item.rating ? "green" : "gray", fontSize: "16px" }}></i>
                        ))}
                      </span>
                      <span className="h6 text-muted"> {item.reviews}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3" style={{ position: "relative" }}>
                <img src={img9s} className="d-block w-100" alt="..." style={{ cursor: "pointer", transition: "filter 0.3s ease" }} />
                <button className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle" style={{ width: "30px", height: "30px" }}>
                  <i className="fas fa-heart" style={{ fontSize: "15px", lineHeight: "30px" }}></i>
                </button>
                <div className="text-center">
                  <button type="button" className="btn btn-light border-black">best seller</button>
                  <h4>Trips To Zaanse Schans, Edam, Valendam, and Marken from Amsterdam.</h4>
                  <div className="rating">
                    <span className="h2">
                      {[...Array(5)].map((_, j) => (
                        <i key={j} className="bi bi-circle-fill" style={{ color: j < 4 ? "green" : "gray", fontSize: "16px" }}></i>
                      ))}
                    </span>
                    <span className="h6 text-muted"> 4,959</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev bg-dark rounded-circle" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev" style={{ width: "40px", height: "40px" }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-dark rounded-circle" type="button" data-bs-target="#carouselExample2" data-bs-slide="next" style={{ width: "40px", height: "40px" }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>





<div style={{ backgroundColor: '#f0f0f0', width: '100%', padding: 0 }}>
      <h3 style={{ marginBottom: '30px' }}>More to explore:</h3>

      <div className="my-6"></div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            {[ 
              { img: more1, text: '5 flowers festivals worth planning a trip around.' },
              { img: more2, text: '6 family-friendly European cities for spring break.' },
              { img: more3, text: 'A first timer guide to Canada national park.' }
            ].map((item, index) => (
              <div className="col-md-4" key={index} style={{ position: 'relative' }}>
                <img
                  src={item.img}
                  className="d-block w-100"
                  alt="..."
                  style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
                  onMouseOver={e => (e.currentTarget.style.filter = 'brightness(1.5)')}
                  onMouseOut={e => (e.currentTarget.style.filter = 'brightness(1)')}
                />
                <button
                  className="position-absolute top-0 end-0 m-2 bg-light text-dark rounded-circle"
                  style={{ width: '30px', height: '30px' }}
                >
                  <i className="fas fa-heart" style={{ fontSize: '15px', lineHeight: '30px' }}></i>
                </button>
                <div className="text-center">
                  <div className="my-2"></div>
                  <h4 style={{ marginBottom: '30px' }}>{item.text}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>





<TopDestinations />




<>
      <div style={{ backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', padding: '20px' }}>
        <img src={dogImage} className="rounded" width="350" style={{ marginRight: '20px' }} alt="Dog" />
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span>
            <img src={logoImage} className="rounded-circle" style={{ cursor: 'pointer' }} width="40" alt="Logo" /> Sponsored by{' '}
            <span className="text-decoration-underline" style={{ cursor: 'pointer' }}>
              CESAR®
            </span>
            <br />
            <b>It’s easier than ever to go together</b>
            <br />
            Travel is better when you can share it with your best friend. Find all the tips, guides, and tools you need to take a dream trip with your dog.
          </span>

          {/* Explore more button */}
          <button
            style={{
              backgroundColor: 'black',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              marginTop: '20px',
              cursor: 'pointer'
            }}
          >
            Explore more
          </button>
        </div>
      </div>

      <p style={{ marginBottom: '30px' }}></p>
    </>




<div className="container-fluid banner position-relative">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Text Section (Left Side) */}
          <div className="col-md-6">
            <h2 className="fw-bold">Travelers' Choice Awards Best of the Best</h2>
            <p>Among our top 1% of places, stays, eats, and experiences—decided by you.</p>
            <a href="#" className="custom-btn">See the winners</a>
          </div>

          {/* Image Section (Right Side) */}
          <div className="col-md-6 text-center">
            <img src={girlImage} alt="Traveler" className="travel-image" />
          </div>
        </div>
      </div>
    </div>




 <Footer />



    </div>
  );
}

export default HeaderApp;


