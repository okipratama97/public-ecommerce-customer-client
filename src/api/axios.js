import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-pico.herokuapp.com'
})

export default instance
