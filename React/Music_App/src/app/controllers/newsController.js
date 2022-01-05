const video = require('../models/videos');
const { multipleMongooseToObject } = require('../../util/mongoose');

class newController {
  index(req, res, next) {
    video.find({})
      .then(video => {
        res.render('news',{ video: multipleMongooseToObject(video) })
      })
      .catch(next)
  }

  show(req, res) {
    res.rend('show video')
  }
}

module.exports = new newController();
