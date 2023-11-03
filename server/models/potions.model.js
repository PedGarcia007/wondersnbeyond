const mongoose = require('mongoose');

const potionSchema = new mongoose.Schema({
  name: String,
  purpose: String,
  materials: String
});

module.exports = mongoose.model('Potion', potionSchema);
