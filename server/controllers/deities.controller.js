const Deity = require('../models/deities.model');

const deitiesController = {
  getAllDeities: async (req, res) => {
    try {
      const deities = await Deity.find();
      res.json(deities);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getDeityById: async (req, res) => {
    try {
      const deity = await Deity.findById(req.params.id);
      res.json(deity);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = deitiesController;
