const Course = require('../models/Course')
const { mongoDB2Object } = require('../../util/mongoose')

class CourseController {

    // GET
    create(req, res, next){
        res.render('courses/create')
    }

    // POST
    store(req, res, next){
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save().then(()=> res.redirect('/')).catch(next)
    }

    // GET :slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug}).then(course=>{res.render('courses/show',{course: mongoDB2Object(course)})}).catch(next)
    }
  }
  
  module.exports = new CourseController();
  