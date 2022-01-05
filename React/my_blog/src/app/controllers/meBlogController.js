import MyBlog from '../models/Course.js';
import {
  mongooseToObject, multipleMongooseToObject
} from "../../util/mongoose.js";

class blogController {
  showBlog(req, res, next) {
    MyBlog.findOne({
        slug: req.params.slug
      })
      .then(myBlog => res.render('myBlog/myBlog', {
        myBlog: mongooseToObject(myBlog)
      }))
      .catch(next)
  }

  create(req, res, next) {
    res.render('myBlog/create')
  }
  // post
  store(req, res, next) {
    const myBlog = new MyBlog(req.body);
    myBlog.save();
    res.json(req.body)
  }
  // edit
  edit(req, res, next) {
    Course.findOne({ _id: req.params._id })
      .then(editBlog => res.render('myBlog/myBlogAdded', {editBlog: mongooseToObject(editBlog)}))
      .catch(next)
  }
}

export default new blogController;