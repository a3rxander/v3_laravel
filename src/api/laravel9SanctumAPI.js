import axios from 'axios'

const laravel9SanctumAPI= axios.create({
    baseURL:'http://localhost:8000',
    withCredentials: true
})
  


export default laravel9SanctumAPI
 