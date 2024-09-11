// src/presentation/components/EditUser.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserByIdUseCase, updateUserUseCase } from '../../application/useCases/user/UserUseCases';

export const EditUser = () => {
    const [user, setUser] = useState({ name: '', email: '', jabatan: 'Staff' });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getUserByIdUseCase(id);
                setUser(fetchedUser);
            } catch (error) {
                setErrorMessage('Failed to fetch user data.');
            }
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        if (password && password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const userData = { ...user };

            if (password) {
                userData.password = password; // Tambahkan password jika diubah
            }

            await updateUserUseCase(id, userData);
            setSuccessMessage('User updated successfully!');

            // Navigasi setelah 2 detik
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (error) {
            setErrorMessage("Failed to update user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={handleSubmit}>
                    {errorMessage && <p className="has-text-danger">{errorMessage}</p>} 
                    {successMessage && <p className="has-text-success">{successMessage}</p>}

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                placeholder='Name'
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input
                                type="email"
                                className="input"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                placeholder='Email'
                                required
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">New Password</label>
                        <div className="control">
                            <input
                                type="password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='New Password'
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input
                                type="password"
                                className="input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder='Confirm Password'
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jabatan</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                    value={user.jabatan}
                                    onChange={(e) => setUser({ ...user, jabatan: e.target.value })}>
                                    <option value="Directure">Directure</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Ass. Manager">Ass. Manager</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field mt-5">
                        <button type="submit" className='button is-success' disabled={loading}>
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;