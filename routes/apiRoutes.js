const router = require("express").Router();
const Workout = require("../models/fitnessModel.js");

router.get("/api/workouts", ({body}, res) => {
    Workout.find({body})
      .populate("exercises")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/workouts/", (req, res) => {
    Workout.update({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.post("/api/workouts", ({body}, res) => {
    Workout.create({body})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts/range", ({body}, res) => {
    Workout.find({body})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;

