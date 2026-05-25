import React from 'react';
import './travelers-choice.css';

import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';

import TchoiceImage from '../assets/Tchoice1.jpg';

import Desti from '../assets/desti.jpg';
import Beach from '../assets/beach.jpg';
import Thing from '../assets/thing.jpg';
import HotelsImg from '../assets/hotels.jpg';
import Rest from '../assets/rest.jpg';

import rest2 from "../assets/rest2.jpg";
import beach2 from "../assets/beach2.jpg";
import things2 from "../assets/things2.jpg";
import desti2 from "../assets/desti2.jpg";
import img1 from "../assets/1.jpg";

import FooterTchoice from './FooterTchoice';


const TravelersChoice = () => {
  return (
    <div className="container">
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



<div className="text-center">
      {/* Navigation Buttons */}
      <div className="nav-container">
        <button className="nav-button" id="CurrentButton">
          <i className="fas fa-search"></i> | Search All
        </button>
        <a href="hotels.html">
          <button className="nav-button">
            <i className="fas fa-bed"></i> | Hotels
          </button>
        </a>
        <a href="things.html">
          <button className="nav-button">
            <i className="fas fa-camera"></i> | Things to do
          </button>
        </a>
        <a href="restruants.html">
          <button className="nav-button">
            <i className="fas fa-utensils"></i> | Restaurants
          </button>
        </a>
        <a href="flights.html">
          <button className="nav-button">
            <i className="fas fa-plane"></i> | Flights
          </button>
        </a>
        <a href="vacation.html">
          <button className="nav-button">
            <i className="fas fa-key"></i> | Vacation rentals
          </button>
        </a>
      </div>

      {/* Horizontal Line */}
      <div className="container mt-4">
        <hr className="my-4" />
      </div>

      {/* Image */}
      <div className="position-relative">
        <img src={TchoiceImage} className="rounded" width="1000" alt="Travelers Choice" />
      </div>

      {/* Headings and Description */}
      <h1 className="main-title">Travelers' Choice Awards Best of the Best 2025</h1>
      <div className="description">
        <h5>
          Every year, we award travelers' favorite destinations, hotels, restaurants, and things to do around the world, based on reviews and ratings collected over 12 months.
          So our Travelers' Choice Awards Best of the Best winners are decided by you: real travelers from all over, sharing real opinions and stories.
          <br /><br />
          The 2025 winners are a celebration of everything we did last year—all the places we discovered and all the times we just said "yes" to new adventures.
          We'll reveal the winners by category throughout the year, so keep checking back for the latest.
          <br /><br />
          To learn more about how winners are chosen, <span className="policy-link">visit our awards policy page</span>.
        </h5>
      </div>
    </div>







<div className="gallery-container text-center mt-5">
  <div className="container">
    <div className="card mb-4">
      <img src={Desti} className="card-img-top rounded img-fluid" alt="Destination" />
      <div className="card-body">
        <h5 className="card-title">Destination</h5>
      </div>
    </div>

    <div className="card mb-4">
      <img src={Beach} className="card-img-top rounded img-fluid" alt="Beach" />
      <div className="card-body">
        <h5 className="card-title">Beach</h5>
      </div>
    </div>

    <div className="card mb-4">
      <img src={HotelsImg} className="card-img-top rounded img-fluid" alt="Hotels" />
      <div className="card-body">
        <h5 className="card-title">Hotels</h5>
      </div>
    </div>

    <div className="card mb-4">
      <img src={Thing} className="card-img-top rounded img-fluid" alt="Things to Do" />
      <div className="card-body">
        <h5 className="card-title">Things to Do</h5>
      </div>
    </div>

    <div className="card mb-4">
      <img src={Rest} className="card-img-top rounded img-fluid" alt="Restaurants" />
      <div className="card-body">
        <h5 className="card-title">Restaurants</h5>
      </div>
    </div>
  </div>
</div>







<>
      <h2><b>Explore all of the Best of the Best categories</b></h2>
      <p className="yellow-line"></p>

      <div className="my-6"></div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-2 p-1">
              <img
                src={rest2}
                className="d-block w-100 rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                src={beach2}
                className="d-block w-100 rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                src={things2}
                className="d-block w-100 rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                src={desti2}
                className="d-block w-100 rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-2 p-1">
              <img
                src={img1}
                className="d-block w-100 rounded-3"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>



<FooterTchoice />

    </div>
  );
};

export default TravelersChoice;
 