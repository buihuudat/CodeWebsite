const video = require('../models/videos');
const { multipleMongooseToObject } = require('../../util/mongoose');

class addController {
  index(req, res, next) {
    video.find({})
      .then(video => {
        res.render('add',{ video: multipleMongooseToObject(video) })
      })
      .catch(next)
  }

  show(req, res) {
    res.rend('show add')
  }
}

module.exports = new addController();
