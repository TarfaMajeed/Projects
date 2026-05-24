const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  try {
    console.log('📦 Incoming Reservation:', req.body); // <-- Log the incoming data

    const reservation = new Reservation(req.body);
    await reservation.save();

    res.status(201).json({ message: 'Reservation saved successfully!' });
  } catch (err) {
    console.error('❌ Error saving reservation:', err); // <-- Log any error
    res.status(500).json({ error: 'Failed to save reservation' });
  }
};
