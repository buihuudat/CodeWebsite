import express from 'express';
import searchController from '../app/controllers/searchController.js';

const router = express.Router();

router.use('/:slug', searchController.showSearch);
router.use('/', searchController.search);

export default router;