import React from 'react';
import rome from '../assets/rome.jpg';
import paris from '../assets/paris.jpg';
import nv from '../assets/nv.jpg';
import ice from '../assets/ice.jpg';
import uk from '../assets/uk.jpg';
import italy from '../assets/italy.jpg';

const TopDestinations = () => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.filter = 'brightness(1.5)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.filter = 'brightness(1)';
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ marginBottom: '30px' }}>Top destinations for your next vacation</h3>
      <div id="carouselExample3" className="carousel slide">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              {[{ img: rome, text: 'Rome,Italy' },
                { img: paris, text: 'Paris,France' },
                { img: nv, text: 'Las Vegas,NV' },
                { img: ice, text: 'Reykjavik,Iceland' }
              ].map((item, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="position-relative">
                    <img
                      src={item.img}
                      className="d-block w-100"
                      alt={item.text}
                      style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    />
                    <div className="carousel-caption position-absolute bottom-0 start-0 w-100 text-center bg-dark bg-opacity-10 text-white py-2">
                      <h2><b>{item.text}</b></h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {[{ img: uk, text: 'London,UK' }, { img: italy, text: 'Florence,Italy' }].map((item, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className="position-relative">
                    <img
                      src={item.img}
                      className="d-block w-100"
                      alt={item.text}
                      style={{ cursor: 'pointer', transition: 'filter 0.3s ease' }}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    />
                    <div className="carousel-caption position-absolute bottom-0 start-0 w-100 text-center bg-dark bg-opacity-10 text-white py-2">
                      <h2><b>{item.text}</b></h2>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev bg-dark rounded-circle" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev" style={{ width: '40px', height: '40px' }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-dark rounded-circle" type="button" data-bs-target="#carouselExample3" data-bs-slide="next" style={{ width: '40px', height: '40px' }}>
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TopDestinations;
