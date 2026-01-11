import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseRegister = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb-1" />
        <span className="orb-2" />
      </div>
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <div id="choose-register-title" className="brand-logo">FoodFlux</div>
          <p className="auth-subtitle">Pick how you want to join the platform.</p>
        </header>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <Link to="/user/register" className="btn btn-primary" style={{textDecoration:'none', textAlign:'center'}}>
            Register as user
          </Link>
          <Link to="/food-partner/register" className="btn btn-ghost" style={{textDecoration:'none', textAlign:'center'}}>
            Register as food partner
          </Link>
        </div>
        <div className="auth-alt-action" style={{marginTop:'4px'}}>
          Already have an account? <Link to="/user/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;
