const router = require ("express").Router()
const Workout = require ("../models/workout")

router.get ("/api/workouts", function (req, res){
    Workout.find().then(data=>{
        res.json(data)
    }).catch(err => {
        res.json (err)
    })
})

router.get ("/api/workouts/range", function (req, res){
    Workout.find().limit(7).then(data=>{
        res.json(data)
    }).catch(err => {
        res.json (err)
    })
})

router.post ("/api/workouts", function (req, res){
    Workout.create({}).then(data=>{
        res.json(data)
    }).catch(err => {
        res.json (err)
    })
})

router.put ("/api/workouts/:id", function (req, res){
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises:req.body}},
        {new:true,runValidators: true}
    ).then(data=>{
        res.json(data)
    }).catch(err => {
        res.json (err)
    })
})
module.exports = router