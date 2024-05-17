
import axios from 'axios';
import { BASE_URL } from './constants';


export const getAll = async (endpoint) => {
    try {
        const response = await axios.get(BASE_URL + endpoint);
        return { res: response, err: null };
    } catch (err) {
        return { res: null, err };
    }
};

export const getOne = async (endpoint, id) => {
    try {
        const response = await axios.get(BASE_URL + endpoint + `/${id}`);
        return { res: response, err: null };
    } catch (err) {
        return { res: null, err };
    }
};

export const postOne = async (endpoint, payload) => {
    try {
        const response = await axios.post(BASE_URL + endpoint, payload);
        return { res: response, err: null };
    } catch (err) {
        return { res: null, err }
    }

}


export const delOne = async (endpoint, id) => {
    try {
        const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
        return { res: response, err: null };
    } catch (err) {
        return { res: null, err }
    }

}
export const patchOne = async (endpoint, id, payload) => {
    try {
        const response = await axios.patch(`${BASE_URL}${endpoint}/${id}`, payload);
        return { res: response, err: null };
    } catch (err) {
        return { res: null, err };
    }
};