const User = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    console.log('Auth middleware started');

    const { username } = req.body;

    if (!username) {
      console.log('Auth middleware: Username not provided.');
      return res.status(401).json({ message: 'Authentication failed. Please provide username.' });
    }

    const user = await User.findOne({ username });
    if (user) {
      req.user = user;
      console.log('Auth middleware: User found.');
      next(); 
    } else {
      console.log('Auth middleware: User not found.');
      return res.status(401).json({ message: 'User not found.' });
    }

    console.log('Auth middleware finished');
};

module.exports = authMiddleware;
