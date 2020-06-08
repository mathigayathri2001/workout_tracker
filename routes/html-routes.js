const path = require('path')
const router = require('express').Router()


router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
  })
  
  // The route for viewing the blog posts
  router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
  })
  
  // The index route redirects to /blog route
  router.get('/index', (req, res) => res.redirect('/'))
  
  module.exports = router