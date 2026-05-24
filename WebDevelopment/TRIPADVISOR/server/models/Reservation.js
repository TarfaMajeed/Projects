const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  paymentOption: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  smsUpdates: { type: Boolean, default: false }
});

module.exports = mongoose.model('Reservation', reservationSchema);
