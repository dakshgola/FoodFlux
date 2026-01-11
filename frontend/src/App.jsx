import React from 'react'


import './App.css'
import './styles/theme.css'
import AppRoutes from './routes/AppRoutes'


function App() {


  return (
    <>
      <AppRoutes />
      <div id="toasts" className="toasts" aria-live="polite" aria-atomic="true"></div>
    </>
  )
}

export default App

// Lightweight UI-only toast helper (no logic changes). Use in console:
// window.showToast({ title: 'Saved', message: 'Video saved', type: 'success', duration: 3500 })
if (typeof window !== 'undefined') {
  window.showToast = function showToast({ title = '', message = '', type = 'info', duration = 3500 } = {}) {
    try {
      const container = document.getElementById('toasts');
      if (!container) return;
      const el = document.createElement('div');
      el.className = `toast ${type}`;
      el.setAttribute('role', 'status');
      el.innerHTML = `<div style="flex:1"><strong style="display:block">${title}</strong><div style="opacity:.9; font-size:14px">${message}</div></div><div style="width:12px"></div>`;
      container.appendChild(el);
      // progress bar
      const progress = document.createElement('div');
      progress.className = 'progress';
      el.appendChild(progress);
      // auto-dismiss
      setTimeout(() => { el.classList.add('fade-out'); el.addEventListener('transitionend', () => el.remove()); }, duration);
    } catch (e) { /* silent */ }
  }
}
