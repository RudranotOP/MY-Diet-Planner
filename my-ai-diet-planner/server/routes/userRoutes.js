const express = require('express');
const router = express.Router();

// ✅ Import controllers & protect
const {
  registerUser,
  loginUser,
  protect,
  updateProfile // ✅ added
} = require('../controllers/userController');

// ✅ Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Protected routes
router.get('/profile', protect, (req, res) => {
  res.json(req.user);
});

// ✅ Update profile route
router.put('/profile', protect, updateProfile);

// ✅ Test route
router.get('/test', (req, res) => {
  res.send('✅ User routes working!');
});

module.exports = router;
