const State = require('../database/models/stateModel')
const Department = require('../database/models/departmentModel')
const Employee = require('../database/models/employeeModel')

// Create State in the database
module.exports.createState = async serviceData => {
  try {
    const newState = new State({
      label: serviceData.label,
      value: serviceData.value
    })

    let result = await newState.save()

    return result
  } catch (error) {
    console.error('Error in employeeService.js', error)
    throw new Error(error)
  }
}

// Create Department in the database
module.exports.createDepartment = async serviceData => {
  try {
    const newDepartment = new Department({
      label: serviceData.label,
      value: serviceData.value
    })

    let result = await newDepartment.save()

    return result
  } catch (error) {
    console.error('Error in employeeService.js', error)
    throw new Error(error)
  }
}

// Create Employee in the database
module.exports.createEmployee = async serviceData => {
  try {
    const newEmployee = new Employee({
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      dateOfBirth: serviceData.dateOfBirth,
      startDate: serviceData.startDate,
      department: serviceData.department,
      street: serviceData.street,
      city: serviceData.city,
      state: serviceData.state,
      zipCode: serviceData.zipCode
    })

    let result = await newEmployee.save()

    return result
  } catch (error) {
    console.error('Error in employeeService.js', error)
    throw new Error(error)
  }
}