const express = require('express');
const router = express.Router();

const { saveBMI, getBMIHistory } = require('../controllers/bmiController');
const { protect } = require('../controllers/userController');

// POST /api/bmi  ➜ Save BMI
router.post('/', protect, saveBMI);

// GET /api/bmi  ➜ Get BMI history
router.get('/', protect, getBMIHistory);

module.exports = router;
