module.exports = app => {
  const employees = require("../controllers/employee.controller.js")
  const departments = require("../controllers/department.controller.js")
  const states = require("../controllers/state.controller.js")
  let router = require("express").Router();

  // Create a new Employee
  router.post("/employee/", employees.create);

  // Retrieve all Employees
  router.get("/employee/", employees.findAll);

  // Retrieve all states
  router.get("/state/", states.findAll);

  // Retrieve all departments
  router.get("/department/", departments.findAll);

  // app.use("/api/employees", router);
  app.use("/api/", router);
}