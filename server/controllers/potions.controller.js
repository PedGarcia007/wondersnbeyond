const Potion = require('../models/potions.model');

const potionsController = {
  getAllPotions: async (req, res) => {
    try {
      const potions = await Potion.find();
      res.json(potions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getPotionById: async (req, res) => {
    try {
      const potion = await Potion.findById(req.params.id);
      res.json(potion);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = potionsController;
