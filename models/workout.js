const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  workouts: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise type"
      },
      name: {
          type: String,
          trim: true,
          required: "Enter a name for exercise"
        },
      duration: {
          type: Number,
          required:"Please enter the duration"
        },
      weight: {
          type: Number,

        },
      reps: {
        type: Number,
        },
      sets: {
        type: Number,
        },
      distance: {
        type: Number,
      }

    }
  ]

},
{
  toJSON:{
    virtuals: true
  },
  totalDuration: {
    type: Number,
}
}
);

// workoutSchema.virtual("totalDuration").get(function(){
//   return this.workout.reduce((total,workout)=>{
//     return total + workout.duration
//   }, 0)
// })

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;