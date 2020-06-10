const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],

},
{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  })


    // adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function totalDuration () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce(
      (total, exercise) => total + exercise.duration,
      0
    )
  })



const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
