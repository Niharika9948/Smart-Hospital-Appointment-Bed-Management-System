const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.post("/", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.json(appointment);
});

router.get("/", async (req, res) => {
  const appointments = await Appointment.find().populate("patientId");
  res.json(appointments);
});

module.exports = router;   // ✅ MUST BE PRESENT