const newRouter = require('./news');
const homeRouter = require('./home');
const addRouter = require('./add');

function route(app) {
  app.use('/news', newRouter);
  app.use('/add', addRouter);
  app.use('/', homeRouter);
}

module.exports = route;
