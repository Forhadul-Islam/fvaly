import React, { FormEvent, useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        console.log(userData);
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <form onSubmit={handleLogin} action="" className="authenticate__container--form">
                <div className="authenticate__container--form-title">LOGIN</div>
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
                    Login
                </button>
            </form>
        </>
    );
};
export default LoginForm;
