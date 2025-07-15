const MealPlan = require('../models/MealPlan');

// Save Meal Plan
const saveMealPlan = async (req, res) => {
  const { title, meals } = req.body;

  if (!title || !meals) {
    return res.status(400).json({ message: 'Title and meals are required.' });
  }

  try {
    const mealPlan = new MealPlan({
      user: req.user._id,
      title,
      meals
    });

    await mealPlan.save();
    res.status(201).json(mealPlan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Meal Plans
const getMealPlans = async (req, res) => {
  try {
    const plans = await MealPlan.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveMealPlan,
  getMealPlans
};
