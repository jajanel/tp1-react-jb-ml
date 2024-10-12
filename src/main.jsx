import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//Importation de boostrap et un thème de bootswatch pour le style
import 'bootswatch/dist/lumen/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
