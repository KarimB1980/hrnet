const db = require("../models")
const Department = db.departments

// Retrieve all Departments from the database.
exports.findAll = (req, res) => {
  Department.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving employees."
    })
  })
}