import express from 'express';
import blogController from '../app/controllers/myBlogController.js';


const routerBlog = express.Router();

routerBlog.get('/create', blogController.create);
routerBlog.get('/:id/edit', blogController.edit);
routerBlog.post('/store', blogController.store);
routerBlog.get('/:slug', blogController.showBlog);

export default routerBlog;
