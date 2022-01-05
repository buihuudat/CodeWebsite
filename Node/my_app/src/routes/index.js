var express = require('express');
const siteRouter = require('./site');
const trashRouter = require('./trash');
const myAppRouter = require('./myApp');

function route(app) {
  app.use('/my-app', myAppRouter);
  app.use('/trash', trashRouter);
  app.use('/', siteRouter);
}

module.exports = route;
