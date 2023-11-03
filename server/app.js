const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const authMiddleware = require('./middleware/authMiddleware');
const usersRoutes = require('./routes/users.routes');
const deitiesRoutes = require('./routes/deities.routes');
const potionsRoutes = require('./routes/potions.routes');
const spellsRoutes = require('./routes/spells.routes');
const beyondsRoutes = require('./routes/beyonds.routes');
const searchRoutes = require('./routes/search.routes');




const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json());

// Connect to Mongoose
mongoose.connect('mongodb://127.0.0.1/wondersnbeyond', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Define routes
app.use('/api/deities', deitiesRoutes);
app.use('/api/potions',  potionsRoutes);
app.use('/api/spells',spellsRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/beyonds', beyondsRoutes);

app.use('/api', beyondsRoutes);

// Add user routes
app.use('/api/users', usersRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
