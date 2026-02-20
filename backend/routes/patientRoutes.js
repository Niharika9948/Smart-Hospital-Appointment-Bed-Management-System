const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Create patient
router.post("/", async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

// Get all patients
router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

module.exports = router;   // ✅ VERY IMPORTANT