import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setErrors('Please fill in all fields');
        } else {
            // Submit the form
            setErrors('');
            // Add your form submission logic here
        }
        
        if (!email) {
            setErrors('Please fill in all fields');
        } else {
            // Submit the form
            setErrors('');
            // Add your form submission logic here
        }

        if (!password) {
            setErrors('Please fill in all fields');
        } else {
            // Submit the form
            setErrors('');
            // Add your form submission logic here
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Submit</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default RegistrationForm;
