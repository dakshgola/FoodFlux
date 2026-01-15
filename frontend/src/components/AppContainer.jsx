import React from 'react'
import '../styles/app-container.css'

const AppContainer = ({ children }) => {
  return (
    <div className="app-shell">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  )
}

export default AppContainer
