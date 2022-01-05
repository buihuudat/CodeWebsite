import searchRouter from './search.js';
import cardRouter from './card.js';
import carRouter from './carousel.js';
import siteRouter from './site.js';

import routerBlog from './myBlog.js';

import db from '../config/db/index.js';

// connect to DB
db.connect();

function route(app) {
  app.use('/search', searchRouter);
  app.use('/card', cardRouter);
  app.use('/carousel', carRouter);
  app.use('/myBlog', routerBlog);
  app.use('/', siteRouter);
}

export default route;