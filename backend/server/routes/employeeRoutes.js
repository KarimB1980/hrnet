const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')

// Create State
router.post('/state', employeeController.createState)

// Create Department
router.post('/department', employeeController.createDepartment)

// Retrieve all States
router.get("/state/", employeeController.findAllStates)

// Retrieve all Departments
router.get("/department/", employeeController.findAllDepartments)

// Create a new Employee
router.post("/employee/", employeeController.createEmployee)

// Retrieve all Employees
router.get("/employee/", employeeController.findAllEmployees)

module.exports = router