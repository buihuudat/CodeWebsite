const express = require('express');
const addController = require('../app/controllers/addController');

const router = express.Router();

router.use('/:slug', addController.show);
router.use('/', addController.index);

module.exports = router;