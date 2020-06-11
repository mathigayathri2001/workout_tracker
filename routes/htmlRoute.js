// Require path to make the absolute path relative
const path = require("path");
//Require express app router
const router = require("express").Router();

// The route for viewing the stats page
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// The route for viewing the exercise page
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// The index route redirects to index page
router.get("/index", (req, res) => res.redirect("/"));

module.exports = router;
