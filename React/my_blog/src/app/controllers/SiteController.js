import Course from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

class SiteController {
  index(req, res, next) {
    Course.find({})
     .then(course => {
       res.render('home',{ course: multipleMongooseToObject(course) })
     })
     .catch(next);
  }
  
  show(req, res) {
    res.send('home');
  }
}

export default new SiteController;