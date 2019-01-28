const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controllers');

router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.post('/create', controller.postCreate);
router.get('/:id', controller.view);

module.exports = router;