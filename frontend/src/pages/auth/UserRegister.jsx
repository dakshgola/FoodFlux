import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const response = await axios.post("http://localhost:3000/api/auth/user/register", {
            fullName: firstName + " " + lastName,
            email,
            password
        },
        {
            withCredentials: true
        })

        console.log(response.data);

        navigate("/")

    };

    return (
        <div className="auth-page-wrapper">
            <div className="auth-card" role="region" aria-labelledby="user-register-title">
                <header>
                    <div id="user-register-title" className="brand-logo">FoodFlux</div>
                    <p className="auth-subtitle">Join to explore and enjoy delicious meals.</p>
                </header>
                <nav className="auth-alt-action" style={{ marginTop: '-4px' }}>
                    <strong style={{ fontWeight: 600 }}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
                </nav>
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="two-col">
                        <div className="field-group">
                            <div className="floating-input">
                                <input id="firstName" name="firstName" placeholder=" " autoComplete="given-name" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                        </div>
                        <div className="field-group">
                            <div className="floating-input">
                                <input id="lastName" name="lastName" placeholder=" " autoComplete="family-name" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="floating-input">
                            <input id="email" name="email" type="email" placeholder=" " autoComplete="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="floating-input">
                            <input id="password" name="password" type="password" placeholder=" " autoComplete="new-password" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button className="auth-submit" type="submit">Sign Up</button>
                </form>
                <div className="auth-alt-action">
                    Already have an account? <Link to="/user/login">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
