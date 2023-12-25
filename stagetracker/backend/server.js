require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Routes = require('./routes/route')
const auth = require('./routes/account')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/route', Routes)
app.use('/api/user', auth)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connecté a la base de donnees ')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('on ecoute sur le port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 