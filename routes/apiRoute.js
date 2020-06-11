//Require express app router
const router = require("express").Router();
// //Require models
const db = require("../models");

// vieing all workouts from the database
router.get("/api/workouts", (req, res, next) => {
  db.Workout.find({})
    .populate("exercises")
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch(next);
});
// new workout POST
router.post("/api/workouts", (req, res, next) => {
  db.Workout.create(req.body)
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch(next);
});

// find the exercise id in the workout and update it
router.put("/api/workouts/:id", (req, res, next) => {
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
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch(next);
});

// View stats for all the workout
router.get("/api/workouts/range", (req, res, next) => {
  db.Workout.find({})
    .populate("exercises")
    .then((dbWorkout) => res.status(201).json(dbWorkout))
    .catch(next);
});

// export the module
module.exports = router;
