// Require mongoose to create the schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the exerciseSchema
const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Type required",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  duration: {
    type: Number,
    required: "Workout duration required",
  },
  weight: {
    type: Number,
    required: false,
  },
  sets: {
    type: Number,
    required: false,
  },
  reps: {
    type: Number,
    required: false,
  },
  distance: {
    type: Number,
    required: false,
  },
});

// Define exercise as a mongoose model
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Exercise module export
module.exports = Exercise;
