const express = require('express');
const router = express.Router();
const searchController = require('../controllers/search.controller');

router.get('/', searchController.searchItems);

module.exports = router;
