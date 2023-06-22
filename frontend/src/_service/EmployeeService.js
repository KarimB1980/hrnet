import Axios from './CallerService'

/**
 * Récupération de la liste des employees
 * @returns {Promise}
 */
let getAllEmployees = () => {
  return Axios.get('/employee/')
}

/**
 * Ajout d'un employee
 * @param {object} employee 
 * @returns {Promise}
 */
let createEmployee = () => {
  let employee = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),
    dateOfBirth: localStorage.getItem('dateOfBirth'),
    startDate: localStorage.getItem('startDate'),
    department: localStorage.getItem('selectDepartment'),
    street: localStorage.getItem('street'),
    city: localStorage.getItem('city'),
    state: localStorage.getItem('selectState'),
    zipCode: localStorage.getItem('zipCode')
  }
  return Axios.post('/employee/', employee)
}

// Déclaration des services pour import
export const employeeService = { getAllEmployees, createEmployee }