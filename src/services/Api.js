import axios from 'axios';

export class Api {

    constructor(baseURL, headers = {}, timeout = 10000) {
        let instance = axios.create({
            baseURL,
            timeout,
            headers
        });
        instance.interceptors.response.use(this.handleSuccess, this.handleError);

        this.instance = instance;
    }

    handleSuccess(response) {
        return response.data;
    }

    handleError(error){
        return Promise.reject(error);
    }

    get(url, data = {}) {

        return this.instance.get(url, {params: data});
    }

    post(url, data = {}) {

        return this.instance.post(url, data);
    }
}