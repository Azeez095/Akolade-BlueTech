import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TanstackProvider from './tanstack-provider';
import {AppProvider} from './app-provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <TanstackProvider>
    <AppProvider>
      <App />
      </AppProvider>
      </TanstackProvider>
  </React.StrictMode>,
)
