import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import BarberPoleCursor from './components/BarberPoleCursor.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/ELIA_BarberShop_WebSite/">
    <BarberPoleCursor />
    <App />
  </BrowserRouter>
)