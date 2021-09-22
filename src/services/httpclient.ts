import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    //baseURL: 'https://guarded-headland-11685.herokuapp.com/',
    baseURL: 'https://localhost:5001/api/',
    headers: {
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json'
    },
});

export default client;
