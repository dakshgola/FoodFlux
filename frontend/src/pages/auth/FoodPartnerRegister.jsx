import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {

  const navigate = useNavigate();
  
  const handleSubmit = (e) => { 
    e.preventDefault();

    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    axios.post("http://localhost:3000/api/auth/food-partner/register", {
      name:businessName,
      contactName,
      phone,
      email,
      password,
      address
    }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        navigate("/create-food"); // Redirect to create food page after successful registration
      })
      .catch(error => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="partner-register-title">
        <header>
          <div id="partner-register-title" className="brand-logo">FoodFlux</div>
          <p className="auth-subtitle">Grow your business with our platform.</p>
        </header>
        <nav className="auth-alt-action" style={{marginTop: '-4px'}}>
          <strong style={{fontWeight:600}}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food partner</Link>
        </nav>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <div className="floating-input">
              <input id="businessName" name="businessName" placeholder=" " autoComplete="organization" />
              <label htmlFor="businessName">Business Name</label>
            </div>
          </div>
          <div className="two-col">
            <div className="field-group">
              <div className="floating-input">
                <input id="contactName" name="contactName" placeholder=" " autoComplete="name" />
                <label htmlFor="contactName">Contact Name</label>
              </div>
            </div>
            <div className="field-group">
              <div className="floating-input">
                <input id="phone" name="phone" placeholder=" " autoComplete="tel" />
                <label htmlFor="phone">Phone</label>
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
          <div className="field-group">
            <div className="floating-input">
              <input id="address" name="address" placeholder=" " autoComplete="street-address" />
              <label htmlFor="address">Address</label>
            </div>
            <p className="small-note">Full address helps customers find you faster.</p>
          </div>
          <button className="auth-submit" type="submit">Create Partner Account</button>
        </form>
        <div className="auth-alt-action">
          Already a partner? <Link to="/food-partner/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
