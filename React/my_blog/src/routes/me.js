import express from 'express';
import meBlogController from '../app/controllers/meBlogController.js';


const routerMeBlog = express.Router();

routerMeBlog.get('/create', routerMeBlog.create);

export default routerMeBlog;
