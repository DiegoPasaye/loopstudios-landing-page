import React from 'react'
import ReactDOM from 'react-dom/client'
import { Creations } from './Creations'
import { Footer } from './Footer'
import { Header } from './Header'
import { Interactive } from './Interactive'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Interactive />
    <Creations />
    <Footer />
  </>
)
