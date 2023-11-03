const mongoose = require('mongoose');

const beyondSchema = new mongoose.Schema({
    title: { type: String, required: true },
    post: { type: String, required: true },
    author: { type: String, default: 'Anonymous' }
  });
  




module.exports = mongoose.model('Beyond', beyondSchema);
