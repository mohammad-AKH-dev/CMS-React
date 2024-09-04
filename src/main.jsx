import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './css/custom.css'

createRoot(document.querySelector('body')).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>
)
