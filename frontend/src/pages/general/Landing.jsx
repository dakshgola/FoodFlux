import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/landing.css'

const Landing = () => {
  return (
    <main className="landing">
      <header className="landing-nav">
        <h1 className="brand">FoodFlux</h1>
        <Link to="/login" className="btn-primary">Login</Link>
      </header>

      <section className="hero">
        <h2>The SaaS Platform for Short-Form Food Video Discovery
        </h2>

        <p>
         A scalable video-first platform that helps users discover food and enables restaurants to grow through engaging short-form content.

        </p>

        <div className="hero-actions">
          <Link to="/login" className="btn-primary">Get Started</Link>
          <Link to="/app/home" className="btn-secondary">View Demo</Link>
        </div>
      </section>

      <section className="features">
        <div>🎥 Vertical video discovery</div>
        <div>❤️ Likes & Saves</div>
        <div>🏪 Partner profiles</div>
        <div>⚡ Scalable backend</div>
      </section>
    </main>
  )
}

export default Landing
