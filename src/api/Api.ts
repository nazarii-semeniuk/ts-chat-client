import axios, { Axios } from 'axios';

export default class Api {
    BASE_URL = 'http://localhost:5000/api';
    private endpoint: string;
    protected axios: Axios;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
        this.BASE_URL = `${this.BASE_URL}/${this.endpoint}`;
        this.axios = axios.create({
            baseURL: this.BASE_URL,
            withCredentials: true
        });

    }
}