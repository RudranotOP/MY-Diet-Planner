const express = require('express');
const router = express.Router();
const { protect } = require('../controllers/userController');
const { saveMealPlan, getMealPlans } = require('../controllers/mealPlanController');

router.post('/', protect, saveMealPlan);
router.get('/', protect, getMealPlans);

module.exports = router;
