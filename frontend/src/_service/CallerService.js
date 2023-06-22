import axios from 'axios'

// Basic setup of axios
const Axios = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// Interceptor for placing the token in the request
Axios.interceptors.request.use(request => {
  return request
})

// API response interceptor for session verification
Axios.interceptors.response.use(response => {
  return response
}, error => {
  if(error.response.status === 401){
    window.location = '/'
  }else{
    return Promise.reject(error)
  }
})

export default Axios