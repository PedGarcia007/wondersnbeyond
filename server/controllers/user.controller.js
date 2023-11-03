const User = require('../models/user.model');

const userController = {
  registerUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.json({ message: 'User registered successfully!', user: newUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, password }).select('-password');
      if (user) {
        res.json({ message: 'Login successful!', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
,

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json({ message: 'User updated successfully!', user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updatePassword: async (req, res) => {
    try {
      const { id } = req.params;
      const { newPassword } = req.body; 
  
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.password = newPassword; 
      await user.save(); 
  
      res.json({ message: 'Password updated successfully!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      res.json({ message: 'User deleted successfully!' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
