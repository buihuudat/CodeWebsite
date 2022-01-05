const express = require('express');
const myAppController = require('../app/controllers/myAppController');
const trashController = require('../app/controllers/trashController');
const router = express.Router();

router.get('/', trashController.index);
router.patch('/:id/restore', myAppController.restore);

module.exports = router;
