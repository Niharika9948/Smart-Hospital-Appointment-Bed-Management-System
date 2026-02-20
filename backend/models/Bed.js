const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema({
  bedNumber: Number,
  status: { type: String, default: "Available" },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" }
});

module.exports = mongoose.model("Bed", bedSchema);