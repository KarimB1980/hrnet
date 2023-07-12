const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
const dbConnection = require('./database/connection')
const compression = require('compression')

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

// Compression
app.use(compression())

// Cache-Control
app.set('Cache-Control', 'client/build/static, max-age=31557600');

// API welcome message
app.get('/', (req, res, next) => {
  res.send('Welcome to the Express server HRnet')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})