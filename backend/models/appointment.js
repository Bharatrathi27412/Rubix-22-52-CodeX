const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AppointmentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
      type: Number,
      required: true
  },
  about: {
    type: String,
    required: false
  },
  location: {
      type: String,
      required: true
  }
});

module.exports = Doctor = mongoose.model("doctors", DoctorSchema);