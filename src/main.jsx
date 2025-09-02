import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ResultContextProvider from './contexts/ResultContextProvider.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <ResultContextProvider>
    <App />
    </ResultContextProvider>
    </BrowserRouter>
  
)
