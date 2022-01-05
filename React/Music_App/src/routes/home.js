const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/homeController');

router.get('/:slug', homeController.show);
router.post('/', homeController.add);
router.get('/create', homeController.create);
router.get('/', homeController.index);

module.exports = router;
