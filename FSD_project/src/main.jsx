import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Marks from './marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={'ABC'} email={'abc'} phnno={12345}/>
    <Marks m1={87} m2={91} m3={94}/>
  </StrictMode>,
)
