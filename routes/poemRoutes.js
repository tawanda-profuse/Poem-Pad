const express = require('express');
const router = express.Router();
const poemController = require('../controllers/poemController');

router.get('/create', poemController.poem_create_get);
router.get('/', poemController.poem_index);  
router.post('/', poemController.poem_create_post);
router.get('/:id', poemController.poem_details);
router.delete('/:id', poemController.poem_delete);

module.exports = router;
  