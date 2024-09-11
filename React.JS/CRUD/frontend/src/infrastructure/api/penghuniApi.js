// src/infrastructure/api/UserApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/penghuni';

export const addPenghuni = async (penghuni) => {
    return await axios.post(API_URL, penghuni);
};

export const updatePenghuni = async (id, penghuni) => {
    return await axios.patch(`${API_URL}/${id}`, penghuni);
};

export const getPenghuniApi = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const getPenghuni = async () => {
    return await axios.get(API_URL);    
};

export const deletePenghuni = async (id) => {  
    return await axios.delete(`${API_URL}/${id}`);   
};
