const db = require("../models");

module.exports = (app) => {

app.route('/api/workouts')
  .get(function (req, res) {
      db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)})
})
//   .post(function (req, res) {
//     res.send('Add a workout')
//   })
//   .put(function (req, res) {
//     res.send('Update a workout')
//   })
};