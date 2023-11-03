const mongoose = require('mongoose');

const deitySchema = new mongoose.Schema({
  name: String,
  pantheon: String,
  attributes: String,
  mythology: String,
  symbols: String
});

module.exports = mongoose.model('Deity', deitySchema);
