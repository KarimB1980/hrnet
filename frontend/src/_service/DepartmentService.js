import Axios from './CallerService'

/**
 * Récupération de la liste des employees
 * @returns {Promise}
 */
let getAllDepartments = () => {
  return Axios.get('/department/')
}

// Déclaration des services pour import
export const departmentService = {
  getAllDepartments
}