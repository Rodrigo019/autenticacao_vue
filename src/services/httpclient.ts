import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    //baseURL: 'https://guarded-headland-11685.herokuapp.com/',
    baseURL: 'http://localhost:5000/',
    headers: 'application/json'
});

export default client;
