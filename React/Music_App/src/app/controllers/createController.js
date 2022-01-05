const Video = require('../models/videos');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CreateController {
  create(req, res) {
    res.render('/create');
  }
}

module.exports = new CreateController();
