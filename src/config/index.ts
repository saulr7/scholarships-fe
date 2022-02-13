import axios from 'axios'

const baseURL = "http://localhost:3001/"

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common["x-token"] = localStorage.getItem('token') || "";


export { axios, baseURL }