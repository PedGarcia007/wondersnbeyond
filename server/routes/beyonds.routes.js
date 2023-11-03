const express = require('express');
const router = express.Router();
const beyondController = require('../controllers/beyond.controller');

router.get('/beyonds', beyondController.getAllBeyonds);
router.get('/beyonds/:id', beyondController.getBeyondById);
router.post('/beyonds', beyondController.createBeyond);
router.put('/beyonds/:id', beyondController.updateBeyond);
router.delete('/beyonds/:id', beyondController.deleteBeyond);
router.get('/search', beyondController.searchPosts);

router.get('/beyonds/search', beyondController.searchPosts);

module.exports = router;
