import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import GlobalStyle from './styles/globalStyles'

import Router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/> 
      <Router />
    </BrowserRouter>
    <GlobalStyle/>
  </React.StrictMode>,
)
