// src/application/useCases/user/UserUseCases.js
import User from '../../../domain/models/user';
import { addUser, getUserByIdApi, updateUser, getData, deleteUserById } from '../../services/ApiService';

export const addUserUseCase = async (userData) => {
    const user = new User(userData.name, userData.email, userData.password, userData.jabatan);
    return await addUser(user);
};

export const getUserByIdUseCase = async (userId) => {
    const user = await getUserByIdApi(userId);
    return user;
};

export const updateUserUseCase = async (userId, userData) => {
    await updateUser(userId, userData);
};

export const getDataUseCase = async () =>  {
    const users = await getData();
    return users;
}

export const deleteUserUseCase = async (userId) => {
    try {
        await deleteUserById(userId);
        
    } catch (error) {
        console.log(error);   
    }
    
};

