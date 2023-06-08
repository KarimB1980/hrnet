module.exports = app => {
  const employees = require("../controllers/employee.controller.js")
  const departments = require("../controllers/department.controller.js")
  const states = require("../controllers/state.controller.js")

  let router = require("express").Router();

  // Create a new Employee
  router.post("/employee/", employees.create);

  // Retrieve all Employees
  router.get("/employee/", employees.findAll);

  // Retrieve a single Employee with id
  router.get("/employee/:id", employees.findOne);

  // Update a Employee with id
  router.put("/employee/:id", employees.update);

  // Delete a Employee with id
  router.delete("/employee/:id", employees.delete);

  // Delete all Employees
  router.delete("/employee/", employees.deleteAll);

  // Retrieve all states
  router.get("/state/", states.findAll);

  // Retrieve all departments
  router.get("/department/", departments.findAll);

  // app.use("/api/employees", router);
  app.use("/api/", router);
};
