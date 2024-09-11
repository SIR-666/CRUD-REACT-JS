// src/application/services/ApiService.js
import { addUserApi, updateUserApi, getUserApi, getUsers,deleteUser } from '../../infrastructure/api/UserApi';

export const addUser = async (user) => {
    return await addUserApi(user);
};

export const updateUser = async (id, user) => {
    return await updateUserApi(id, user);
};

export const getUserByIdApi = async (userId) => {
    const response = await getUserApi(userId);
    return response.data; // Sesuaikan dengan data dari backend
};

export const getData = async () => {
    const response = await getUsers();
    return response.data; // Sesuaikan dengan data dari backend
}

export const deleteUserById = async (id) => {    
    return await deleteUser(id); 
};