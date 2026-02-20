const express = require("express");
const router = express.Router();
const Bed = require("../models/Bed");

router.post("/", async (req, res) => {
  const bed = new Bed(req.body);
  await bed.save();
  res.json(bed);
});

router.get("/", async (req, res) => {
  const beds = await Bed.find().populate("patientId");
  res.json(beds);
});

module.exports = router;   // ✅ REQUIRED