const employeeService = require('../services/employeeService')
const State = require("../database/models/stateModel");
const Department = require("../database/models/departmentModel");
const Employee = require("../database/models/employeeModel");

module.exports.createState = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await employeeService.createState(req.body)
    response.status = 200
    response.message = 'State successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.createDepartment = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await employeeService.createDepartment(req.body)
    response.status = 200
    response.message = 'Department successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.createEmployee = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await employeeService.createEmployee(req.body)
    response.status = 200
    response.message = 'Employee successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.findAllStates = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await State.find(req.body)
    response.status = 200
    response.message = 'States successfully find'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response.body)
}

module.exports.findAllDepartments = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await Department.find(req.body)
    response.status = 200
    response.message = 'Departments successfully find'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response.body)
}

module.exports.findAllEmployees = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await Employee.find(req.body)
    response.status = 200
    response.message = 'Employees successfully find'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response.body)
}