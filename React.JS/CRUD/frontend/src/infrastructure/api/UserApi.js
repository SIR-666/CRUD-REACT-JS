// src/infrastructure/api/UserApi.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const addUserApi = async (user) => {
    return await axios.post(API_URL, user);
};

export const updateUserApi = async (id, user) => {
    return await axios.patch(`${API_URL}/${id}`, user);
};

export const getUserApi = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const getUsers = async () => {
    return await axios.get(API_URL);    
};

export const deleteUser = async (id) => {  
    return await axios.delete(`${API_URL}/${id}`);   
};
