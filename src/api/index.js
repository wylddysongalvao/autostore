import axios from "axios";


const api = axios.create({
    baseURL: "http://10.10.13.22:8080/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

});


export default api;