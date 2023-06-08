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
// let createEmployee = (employee) => {
let createEmployee = () => {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const dateOfBirth = document.getElementById('date-of-birth');
  const startDate = document.getElementById('start-date');
  const department = document.getElementsByClassName('selectDepartement__single-value');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementsByClassName('selectState__single-value');
  const zipCode = document.getElementById('zip-code');

  let employee = {
    firstName: firstName.value,
    lastName: lastName.value,
    dateOfBirth: dateOfBirth.value,
    startDate: startDate.value,
    department: department.value,
    street: street.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value
  }
  return Axios.post('/employee/', employee)
}

// Déclaration des services pour import
export const employeeService = { getAllEmployees, createEmployee }