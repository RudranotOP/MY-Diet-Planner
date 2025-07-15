const BMI = require('../models/BMI');

// Save BMI record
const saveBMI = async (req, res) => {
  const { height, weight, bmi } = req.body;

  if (!height || !weight || !bmi) {
    return res.status(400).json({ message: 'Height, weight, and BMI are required.' });
  }

  try {
    const bmiRecord = new BMI({
      user: req.user._id,
      height,
      weight,
      bmi
    });

    await bmiRecord.save();
    res.status(201).json(bmiRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get BMI history for the user
const getBMIHistory = async (req, res) => {
  try {
    const records = await BMI.find({ user: req.user._id }).sort({ date: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveBMI,
  getBMIHistory
};
