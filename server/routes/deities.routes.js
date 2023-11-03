const express = require('express');
const router = express.Router();
const deityController = require('../controllers/deities.controller');

router.get('/', deityController.getAllDeities);
router.get('/:id', deityController.getDeityById);

module.exports = router;
