const mongoose = require("mongoose");
const models = require(".");

const Schema = mongoose.Schema

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: ()=> new Date ()
        },
        excercises: [
            {
                type: {
                    type: String ,
                    trim: true ,
                    required: "Please enter an exercise type."
                },
                name :{
                    type: String ,
                    trim: true ,
                    required: "Please enter an exercise name."
                },
                duration: {
                    type: Number ,
                    required: "Please enter an exercise duration."
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
                },

            }
        ]
    }
)


const Workout = mongoose.model ("Workout", workoutSchema)

module.exports = Workout