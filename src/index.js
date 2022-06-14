import React from 'react'

import ReactDOM from 'react-dom/client'

import { AppProvider } from './hooks'

import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/globalStyles'

import Routes from './routes/routes.js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyles />

    <ToastContainer autoClose={2000} />
    
  </React.StrictMode>
)
