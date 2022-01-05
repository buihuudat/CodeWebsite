const express = require('express');
const createController = require('../app/controllers/createController');

const router = express.Router();

router.use('/', createController.create);

module.exports = router;