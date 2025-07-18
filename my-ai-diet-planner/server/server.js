const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bmiRoutes = require('./routes/bmiRoutes');
const mealPlanRoutes = require('./routes/mealPlanRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Test root route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use('/api/bmi', bmiRoutes);
app.use('/api/meal-plans', mealPlanRoutes);

// Connect to DB and start server
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection failed:', err));
