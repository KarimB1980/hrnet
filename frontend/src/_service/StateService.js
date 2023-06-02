import Axios from './CallerService'

/**
 * Récupération de la liste des employees
 * @returns {Promise}
 */
let getAllStates = () => {
  return Axios.get('/state/')
}

// Déclaration des services pour import
export const stateService = {
  getAllStates
}