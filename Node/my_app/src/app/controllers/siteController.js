const { multipleMongooseToObject } = require("../../util/mongoose");
const Video = require("../models/video");

class SiteController {
  index(req, res, next) {
    // req.body.image = `https://img.youtube.com/vi/${req.body.VideoID}/sddefault.jpg`;
    // const video = new Video(req.body);
    Video.find({})
      .then(video => {
        res.render('home', {
          video: multipleMongooseToObject(video),
        })
      })
      .catch(next);
  }
}

module.exports = new SiteController;