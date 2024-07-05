import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TanstackProvider from './tanstack-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TanstackProvider>
    <App />
    </TanstackProvider>
  </React.StrictMode>,
)
