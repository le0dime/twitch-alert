import Axios from "axios";

import axios from 'axios';

export const api = {

    get(url, params = {}) {

        return axios.get(url, params);
    },

    post(url, data = {}) {

        return axios.post(url, data);
    }
}