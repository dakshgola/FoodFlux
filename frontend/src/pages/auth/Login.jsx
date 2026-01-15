import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/auth-shared.css'

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="auth-page-wrapper">
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb-1" />
        <span className="orb-2" />
        <span className="orb-3" />
      </div>

      <div className="auth-card">
        <header>
          <div className="brand-logo">FoodFlux</div>
          <p className="auth-subtitle">
            Choose how you want to sign in
          </p>
        </header>

        <div style={{ display: 'grid', gap: '14px', marginTop: '24px' }}>
          <button
            className="auth-submit"
            onClick={() => navigate('/login/user')}
          >
            Continue as User
          </button>

          <button
            className="auth-submit secondary"
            onClick={() => navigate('/login/partner')}
          >
            Continue as Food Partner
          </button>
        </div>

        <div className="auth-alt-action">
          New here? <a href="/register">Create account</a>
        </div>
      </div>
    </div>
  )
}

export default Login
