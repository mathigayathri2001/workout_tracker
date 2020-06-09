const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res,next) => {
    db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
      
  });


  router.post('/api/workouts', (req, res, next) => {
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
  
  router.get("/api/workouts/range", (req, res,next) => {
    db.Workout.find({})
      
      .populate("exercises")
      .then(dbWorkout => res.status(201).json(dbWorkout))
      .catch(next)
  });


  module.exports = router;