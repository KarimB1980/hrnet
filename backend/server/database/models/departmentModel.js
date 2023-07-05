const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true }  },
)

module.exports = mongoose.model('Department', departmentSchema)