const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter exercise type to continue."
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter exercise name to continue."
            },
            duration: {
                type: Number,
                required: "Please enter exercise duration to continue."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", fitnessSchema);

module.exports = Workout;