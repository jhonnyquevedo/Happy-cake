import React from 'react'
import ReactDOM from 'react-dom/client'
// Se importa el componente BrowserRouter del paquete react-router-dom, para mantener actualizado el UI en función de la URL
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
// Se importa bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
