const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put("/api/workouts/:id", ({body,params},res) =>
{
  Workout.findByIdAndUpdate(
    params.id, 
    {$push:{exercises:body}},
    {new:true,runValidators:true}
  ) .then(dbexercise => {
    res.json(dbexercise);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

router.get("/api/workouts/range", (req, res) => {
  Workout.find().limit(7)
    .then(dbexercise => {
      res.json(dbexercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get rid of it

router.delete("/api/workouts", ({body}, res) =>{
  Workout.findByIdAndDelete(
    body.id
  ).then(() => {
    res.json(true);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;

