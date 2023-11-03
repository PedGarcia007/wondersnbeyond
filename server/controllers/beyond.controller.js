const Beyond = require('../models/beyonds.model');

const beyondController = {
  getAllBeyonds: async (req, res) => {
    try {
      const beyonds = await Beyond.find();
      res.json(beyonds);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createBeyond: async (req, res) => {
    const { title, post, author } = req.body;
    const newBeyond = new Beyond({
      title: title,
      post: post,
      author: author || 'Anonymous'
    });

    try {
      const savedBeyond = await newBeyond.save();
      res.status(201).json(savedBeyond);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getBeyondById: async (req, res) => {
    try {
      const beyond = await Beyond.findById(req.params.id);
      if (!beyond) return res.status(404).json({ message: 'Beyond post not found.' });
      res.json(beyond);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateBeyond: async (req, res) => {
    try {
      const updatedBeyond = await Beyond.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedBeyond);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteBeyond: async (req, res) => {
    try {
      await Beyond.findByIdAndDelete(req.params.id);
      res.json({ message: 'Beyond post deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  searchPosts: async (req, res) => {
    try {
        const query = new RegExp(req.query.query, 'i');
        const results = await Beyond.find({ post: query });
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send({ message: 'Error searching posts' });
    }
}
};

module.exports = beyondController;
