const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')

dotEnv.config()

const app = express()
const PORT = 3000

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle custom routes
app.use('/api/', require('./routes/employeeRoutes'))


app.use(function (req, res, next) {
  res.set('Cache-control', 'public, max-age=300')
})


// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html'],
//   index: false,
//   maxAge: '1d',
//   redirect: false,
//   setHeaders: function (res, path, stat) {
//     res.set('x-timestamp', Date.now())
//   }
// }

// app.use(express.static('client/build', options))


// // Cache-Control
// app.set('Cache-Control', 'client/build/static, max-age=31557600');

// API welcome message
app.get('/', (req, res, next) => {
  res.send('Welcome to the Express server HRnet')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})