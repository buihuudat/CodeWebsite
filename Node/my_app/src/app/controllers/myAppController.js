const {
  multipleMongooseToObject,
  mongooseToObject
} = require("../../util/mongoose");
const Video = require("../models/video");
const getYoutubeTitle = require('get-youtube-title');
const youtube_parser = require('../.././public/javascripts/getTitle');
const Downloader = require('../models/downVideo');
const dl = new Downloader();


class MyAppController {
  index(req, res, next) {
    Promise.all([Video.countDocumentsDeleted(), Video.find({})])
      .then(([countDel, video]) => {
        res.render('myApp', {
          countDel,
          video: multipleMongooseToObject(video)
        })
      })
      .catch(next);
    }

  add(req, res, next) {
    req.body.VideoID = youtube_parser(req.body.url);
    req.body.image = `https://img.youtube.com/vi/${req.body.VideoID}/sddefault.jpg`;

    // dl.getMP3({
    //   videoId: req.body.VideoID, 
    //   name: req.body.name, function(err,res){
    //     i++;
    //     if(err)
    //         throw err;
    //     else{
    //         console.log("Song "+ i + " was downloaded: " + res.file);
    //     }
    //   }
    //   });

    getYoutubeTitle(`${req.body.VideoID}`, function(err, title) {
      req.body.name = title;
      const video = new Video(req.body);
      video
        .save()
        .then(() => res.redirect('/my-app'))
        .catch(error => {});
    })
  }

  show(req, res, next) {
    Video.findOne({
        slug: req.params.slug
      })
      .then(video => res.render('show', {
        video: mongooseToObject(video)
      }))
      .catch(next)
  }

  delete(req, res, next) {
    Video.delete({
        _id: req.params.id
      })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  deleteForce(req, res, next) {
    Video.deleteOne({
        _id: req.params.id
      })
      .then(() => res.redirect('back'))
      .catch(next)
  }

  update(req, res, next) {
    Video.updateOne({
        _id: req.params.id
      }, req.body)
      .then(() => res.redirect('/my-app'))
      .catch(next)
  }

  trash(req, res, next) {
    Video.restore({
        _id: req.params.id
      })
      .then(() => res.redirect('/my-app'))
      .catch(next)
  }

  restore(req, res, next) {
    Video.restore({
        _id: req.params.id
      })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new MyAppController;
