const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .populate("exercises")
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });


  router.post('/api/workouts', (req, res, next) => {
  // const newWorkout = new db.Workout({
  //     day: Date.now(),
  //     exercises: [],
  //   });
    const newWorkout = new db.Workout(req.body);
    newWorkout
      .save()
      .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
  })
  
  router.put("/api/workouts/:id", (req, res,next) => {
    const exercise = new db.Exercise(req.body);
    exercise.save();
  
    db.Workout.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: exercise._id,
        },
      }
    )
    .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
      
  });


  module.exports = router;