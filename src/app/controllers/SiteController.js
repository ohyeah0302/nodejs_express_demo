const Course = require('../models/Course');
const { multiMongoDB2Object } = require('../../util/mongoose')

class SiteController {
  // GET /news
  home(req, res, next) {
    Course.find({})
    .then(courses=> {
     
      res.render('home',{ courses: multiMongoDB2Object(courses) })
    })
    .catch(next);

    // res.render('home')
  }
}

module.exports = new SiteController();
