import axios from "axios"
const instance = axios.create({
    baseURL:"https://amancha.onrender.com/api"
})
export default instance