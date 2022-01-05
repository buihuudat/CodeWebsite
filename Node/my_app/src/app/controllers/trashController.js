const { multipleMongooseToObject } = require("../../util/mongoose");
const Video = require("../models/video");

class TrashController {
  index(req, res, next) {
    Video.findDeleted({})
      .then(video => {
        res.render('trash', {
          video: multipleMongooseToObject(video)
        });
      })
      .catch(next)
  }
}

module.exports = new TrashController;
