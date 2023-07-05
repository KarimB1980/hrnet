const mongoose = require('mongoose')

const stateSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true }
  },
)

module.exports = mongoose.model('State', stateSchema)