const express = require('express');
const router = express.Router();
const potionsController = require('../controllers/potions.controller');

router.get('/', potionsController.getAllPotions);
router.get('/:id', potionsController.getPotionById);

module.exports = router;
