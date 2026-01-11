import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post("http://localhost:3000/api/auth/user/login", {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/"); // Redirect to home after login

  };

  return (
    <div className="auth-page-wrapper">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb-1" />
        <span className="orb-2" />
        <span className="orb-3" />
      </div>
      <div className="auth-card" role="region" aria-labelledby="user-login-title">
        <header>
          <div className="brand-logo" id="user-login-title">FoodFlux</div>
          <p className="auth-subtitle">Sign in to continue your food journey.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <div className="floating-input">
              <input id="email" name="email" type="email" placeholder=" " autoComplete="email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="field-group">
            <div className="floating-input">
              <input id="password" name="password" type="password" placeholder=" " autoComplete="current-password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New here? <a href="/user/register">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
