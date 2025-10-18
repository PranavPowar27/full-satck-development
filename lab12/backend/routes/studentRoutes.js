const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.post('/add', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;