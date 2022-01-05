const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");
const Video = require("../models/video");

class AddController {
  index(req, res, next) {
    Video.findOne({ slug: req.params.slug })
      .then(video => res.render('add', {
        video: mongooseToObject(video)
      }))
      .catch(next)
  }
}

module.exports = new AddController;