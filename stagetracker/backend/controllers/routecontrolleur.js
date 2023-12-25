const Workout = require('../models/modelcontrolleur')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
  const stagetracker = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(stagetracker)
}

// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'pas de coincidence '})
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'pas de coincidence '})
  }

  res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteWorkout = async (req, res) => {

}

// update a workout
const updateWorkout = async (req, res) => {

}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
}