import React, { useEffect, useState } from 'react';
import FooterTchoice from '../components/FooterTchoice';

function Sea() {
  const [seaside, setSeaside] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/seaside')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch seaside data');
        return res.json();
      })
      .then(data => {
        setSeaside(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}><h1>Loading seaside details.....  :) </h1></p>;
  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{
      maxWidth: 700,
      margin: '40px auto',
      padding: 20,
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#222',
    }}>
      <h1 style={{ marginBottom: 20 }}>{seaside.name}</h1>

      {/* Save & Share buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 15, marginBottom: 15 }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 25,
            border: '1.5px solid black',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 14,
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
        >
          <i className="bi bi-bookmark" style={{ fontSize: 18 }}></i> Save
        </button>

        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 25,
            border: '1.5px solid black',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: 14,
            boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'white'}
        >
          <i className="bi bi-share" style={{ fontSize: 18 }}></i> Share
        </button>
      </div>

      {/* Image */}
      <img
        src={seaside.imageUrl}
        alt={seaside.name}
        style={{
          width: '100%',
          height: 420,
          objectFit: 'cover',
          borderRadius: 20,
          boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
          marginBottom: 30,
          userSelect: 'none',
        }}
      />

      {/* Total Charges with bold and $ icon */}
      <p style={{ fontSize: 24, fontWeight: '700', margin: '8px 0', color: '#111' }}>
        <span style={{ marginRight: 8, fontSize: 28, fontWeight: '900', color: '#28a745' }}>$</span>
        Total Charges: <span style={{ fontWeight: '900' }}>{seaside.totalCharges}</span>
      </p>

      {/* Availability with yellow button */}
      <p style={{ margin: '16px 0' }}>
        <b>Availability:</b> {seaside.availability ? 'Available' : 'Not Available'}
      </p>

      <button
        style={{
          backgroundColor: '#FFD700', // yellow
          color: '#333',
          padding: '10px 25px',
          fontSize: 16,
          borderRadius: 30,
          border: 'none',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(255, 215, 0, 0.5)',
          transition: 'background-color 0.3s ease',
          marginBottom: 30,
          userSelect: 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#FFC107'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FFD700'}
        // Just a styled button, no functionality
      >
        Check Availability
      </button>

      {/* Check In & Check Out */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 20, marginBottom: 25 }}>
        {['Check In', seaside.checkIn].map((text, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: '1.5px solid black',
            borderRadius: 25,
            padding: '8px 16px',
            backgroundColor: 'white',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
            fontWeight: i === 0 ? '700' : '500',
            fontSize: i === 0 ? 16 : 15,
            minWidth: i === 0 ? '90px' : '110px',
            justifyContent: 'center',
          }}>
            {i === 0 && <i className="bi bi-calendar-event" style={{ fontSize: 18, color: '#333' }} />}
            <span>{text}</span>
          </div>
        ))}

        {['Check Out', seaside.checkOut].map((text, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            border: '1.5px solid black',
            borderRadius: 25,
            padding: '8px 16px',
            backgroundColor: 'white',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
            fontWeight: i === 0 ? '700' : '500',
            fontSize: i === 0 ? 16 : 15,
            minWidth: i === 0 ? '90px' : '110px',
            justifyContent: 'center',
          }}>
            {i === 0 && <i className="bi bi-calendar-event" style={{ fontSize: 18, color: '#333' }} />}
            <span>{text}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 18, margin: '20px 0 30px' }}><b>Special Offer:</b> {seaside.specialOffer}</p>

      {/* Reviews with rating */}
      <div style={{ marginTop: 30, marginBottom: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 18,
              height: 18,
              borderRadius: '50%',
              backgroundColor: 'green',
              opacity: 0.9,
            }}
          />
        ))}
        <span style={{ fontWeight: '600', fontSize: 16, color: '#333' }}>4.7</span>
      </div>

      {/* Contact Info */}
      <h3 style={{ marginBottom: 15 }}>Contact Info</h3>
      <p style={{ fontSize: 16, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <i className="bi bi-telephone-fill" style={{ color: '#007bff', fontSize: 18 }}></i>
        <b>Phone:</b> {seaside.contact.phone}
      </p>
      <p style={{ fontSize: 16, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <i className="bi bi-envelope-fill" style={{ color: '#dc3545', fontSize: 18 }}></i>
        <b>Email:</b> {seaside.contact.email}
      </p>
      <p style={{ fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <i className="bi bi-geo-alt-fill" style={{ color: '#28a745', fontSize: 18 }}></i>
        <b>Address:</b> {seaside.contact.address}
      </p>

      <FooterTchoice />
    </div>
  );
}

export default Sea;
