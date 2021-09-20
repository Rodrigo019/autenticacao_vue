import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
    baseURL: 'https://guarded-headland-11685.herokuapp.com/',
    headers: 'application/json'
});

export default client;
