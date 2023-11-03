const express = require('express');
const router = express.Router();
const spellsController = require('../controllers/spells.controller');

router.get('/', spellsController.getAllSpells);
router.get('/:id', spellsController.getSpellById);

module.exports = router;
