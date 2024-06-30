import axios from 'axios'
const url = "http://192.168.1.57:5000/api/"
const local = "http://192.168.1.57:5157"

export const ApiChauHumo = axios.create({
    baseURL: url
})