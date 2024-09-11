import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {getDataUseCase,deleteUserUseCase} from '../../application/useCases/user/UserUseCases';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
      

        const fetchUser = async () => {
            try {
                const userAllData = await getDataUseCase();
                setUsers(userAllData);
            } catch (error) {
                console.log('Failed to load');
            }
        };
        fetchUser();
    };

    const handleDelete = async (userId) => {
        try {
            await deleteUserUseCase(userId);
            // After deletion, load the updated user list
            getUsers();
            toast.success('User berhasil dihapus!');
        } catch (error) {
            console.log('Failed to delete user');
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`add`} className='button is-success'>Add New</Link>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Jabatan</th>
                            <th>Act</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.jabatan}</td>
                                <td>
                                    <Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className="button is-small is-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
