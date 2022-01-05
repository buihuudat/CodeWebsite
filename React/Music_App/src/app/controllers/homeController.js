const Video = require('../models/videos');
const { multipleMongooseToObject } = require('../../util/mongoose');

class HomeController {
  index(req, res, next) {
    Video.find({})
      .then(video => {
        res.render('home', {
          video: multipleMongooseToObject(video),
        });
      })
      .catch(next);
  }

  show(req, res) {
    res.send('show home');
  }

  create(req, res) {
    res.render('/create');
  }

  adds(req, res, next ) {
    // req.body.image = `https://img.youtube.com/vi/${req.body.id_yt}/sddefault.jpg`;
    // const video = new Video(req.body);
    // video
    //   .save()
    //   .then(() => res.redirect('/'))
    //   .catch(error => {});
  }
}

module.exports = new HomeController();
