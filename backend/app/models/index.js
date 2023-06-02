const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.employees = require("./employee.model.js")(mongoose);
db.states = require("./state.model.js")(mongoose);
db.departments = require("./department.model.js")(mongoose);

module.exports = db;