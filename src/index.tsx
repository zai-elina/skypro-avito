import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { Store } from '@reduxjs/toolkit'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={{} as Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
