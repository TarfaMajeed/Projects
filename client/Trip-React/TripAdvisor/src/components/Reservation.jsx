import React, { useState } from 'react';
import axios from 'axios';

const Reservation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentOption: '',
    paymentMethod: '',
    smsUpdates: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/reservations', formData);
      setMessage('✅ Reservation successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        paymentOption: '',
        paymentMethod: '',
        smsUpdates: false,
      });
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data && err.response.data.error) {
        setMessage(`❌ ${err.response.data.error}`);
      } else {
        setMessage('❌ Something went wrong.');
      }
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded" style={{ borderColor: 'black' }}>
        <h4 className="mb-4">Contact Details</h4>

        {/* Form fields */}
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
        </div>

        {/* Payment Option */}
        <div className="mb-3">
          <label>Payment Option</label>
          <select name="paymentOption" className="form-select" value={formData.paymentOption} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Pay Now">Pay Now</option>
            <option value="Reserve Now, Pay Later">Reserve Now, Pay Later</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-3">
          <label>Payment Method</label>
          <select name="paymentMethod" className="form-select" value={formData.paymentMethod} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="PayPal">PayPal</option>
            <option value="EasyPaisa">EasyPaisa</option>
            <option value="JazzCash">JazzCash</option>
          </select>
        </div>

        {/* SMS Updates */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="smsUpdates"
            id="smsUpdates"
            checked={formData.smsUpdates}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="smsUpdates">
            Receive SMS updates about your booking
          </label>
        </div>

        {/* Book Now button */}
        <button type="submit" className="btn btn-warning text-white w-100 rounded-pill fw-bold">
          Book Now
        </button>

        {/* Response Message */}
        {message && <div className="alert mt-3">{message}</div>}
      </form>
    </div>
  );
};

export default Reservation;
