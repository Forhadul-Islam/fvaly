import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (e: React.FormEvent): void => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password,
        };
        console.log(userData);
        setUsername('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <form onSubmit={handleSignup} action="" className="authenticate__container--form">
                <div className="authenticate__container--form-title">SIGN UP</div>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="authenticate__container--form-input"
                    type="username"
                    name="username"
                    value={username}
                    placeholder="Enter your username"
                />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="authenticate__container--form-input"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="authenticate__container--form-input"
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Enter password"
                />
                <button className="authenticate__container--form-button" type="submit">
                    Sign up
                </button>
            </form>
        </>
    );
};

export default SignupForm;
