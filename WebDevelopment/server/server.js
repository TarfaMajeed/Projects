const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const reservationRoutes = require('./routes/reservationRoutes');
const seasideRoutes = require('./routes/seaside'); // <-- Add seaside routes here

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/reservations', reservationRoutes);
app.use('/api/seaside', seasideRoutes); // <-- Add seaside API route

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('MongoDB Error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
