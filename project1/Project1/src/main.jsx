import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthingContext from './context/authing.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthingContext>
        <App />
      </AuthingContext>
    </BrowserRouter>
  </StrictMode>,
)