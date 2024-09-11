import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserUseCase } from '../../application/useCases/user/UserUseCases';

export const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jabatan, setJabatan] = useState("Staff");
    const [loading, setLoading] = useState(false); // to manage loading state
    const [errorMessage, setErrorMessage] = useState(""); // to manage error messages

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        try {
            await addUserUseCase({ name, email, password, jabatan });
            alert('User added successfully!');
            setName('');
            setEmail('');
            setPassword('');
            setJabatan('Staff');

            navigate('/');
        } catch (error) {
            console.error(error.message);
            setErrorMessage("Failed to add user. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={handleSubmit}>
                    {errorMessage && <p className="has-text-danger">{errorMessage}</p>} {/* Display error message */}
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                type="text" 
                                className="input" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                placeholder='Name' 
                                required // Added required field
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                type="email" // Changed to email type for validation
                                className="input" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}  
                                placeholder='Email' 
                                required // Added required field
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input 
                                type="password" // Changed to password type for security
                                className="input" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Password' 
                                required // Added required field
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Jabatan</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select 
                                    value={jabatan} 
                                    onChange={(e) => setJabatan(e.target.value)} 
                                >
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
                            {loading ? 'Saving...' : 'Save'} {/* Change button text based on loading state */}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddUser;

