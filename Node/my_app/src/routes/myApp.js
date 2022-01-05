const express = require("express");
const myAppController = require("../app/controllers/myAppController");
const addController = require("../app/controllers/addController");
const router = express.Router();

router.get('/add', addController.index);
router.get('/edit/:slug', addController.index);
router.post('/create', myAppController.add);
router.put('/:id', myAppController.update);
router.get('/:slug', myAppController.show);
router.delete('/:id/delete', myAppController.delete);
router.delete('/:id/deleteForce', myAppController.deleteForce);
router.get('/', myAppController.index);

module.exports = router;
