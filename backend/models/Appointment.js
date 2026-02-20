const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctorName: String,
  date: String,
  time: String,
  status: { type: String, default: "Booked" }
});

module.exports = mongoose.model("Appointment", appointmentSchema);