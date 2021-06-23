const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  table: {
    type: String,
    required: true
  },
  diners: {
    type: Number,
    required: true
  }, 
  notes: {
    type: String,
    required: false
  }

});

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;