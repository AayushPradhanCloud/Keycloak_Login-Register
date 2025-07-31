import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import keycloak from './keycloak'

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Not authenticated");
    window.location.reload();
  }
}).catch(err => {
  console.error("Keycloak init failed", err);
});
