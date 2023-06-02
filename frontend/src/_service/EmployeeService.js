import Axios from './CallerService'

/**
 * Récupération de la liste des employees
 * @returns {Promise}
 */
let getAllEmployees = () => {
  return Axios.get('/employee/')
}

/**
 * Récupération d'un employee
 * @param {number} cid 
 * @returns {Promise}
 */
let getEmployee = (cid) => {
  return Axios.get('/' + cid)
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
  const department = document.getElementById('department');
  const street = document.getElementById('street');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
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
  };
  console.log(employee)
  return Axios.post('/employee/', employee)
}

/**
 * Mise à jour d'un employee
 * @param {object} employee 
 * @returns {Promise}
 */
let updateEmployee = (employee) => {
  // const saveEmployee = () => {
  // function saveEmployee() {
  return Axios.post('/', employee)
}

/**
 * Suppression d'un employee
 * @param {number} cid 
 * @returns {Promise}
 */
let deleteEmployee = (cid) => {
  return Axios.delete('/' + cid)
}

// Déclaration des services pour import
export const employeeService = {
  getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee
}