import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/Home/HomePage.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
