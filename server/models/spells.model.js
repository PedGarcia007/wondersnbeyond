const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
  name: String,
  purpose: String,
  materials: String
});

module.exports = mongoose.model('Spell', spellSchema);
