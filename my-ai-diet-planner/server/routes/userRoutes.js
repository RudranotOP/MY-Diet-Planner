const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Test route to check if routes are working
router.get('/test', (req, res) => {
  res.send('✅ User routes working!');
});

// POST /api/users/register
router.post('/register', registerUser);

// POST /api/users/login
router.post('/login', loginUser);

module.exports = router;
