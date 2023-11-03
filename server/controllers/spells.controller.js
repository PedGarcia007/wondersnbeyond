const Spell = require('../models/spells.model');

const spellsController = {
  getAllSpells: async (req, res) => {
    try {
      const spells = await Spell.find();
      res.json(spells);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getSpellById: async (req, res) => {
    try {
      const spell = await Spell.findById(req.params.id);
      res.json(spell);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = spellsController;
