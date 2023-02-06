import React from 'react'
import './styles.css'
import logo from './images/logo.svg'
import close from './images/icon-close.svg'

export const Header = () => {
  const menu = document.querySelector(".menu-mobile")

  const mostrarMobile = () => {
    menu.classList.toggle("mostrar")
  }
  const ocultarMobile = () => {
    menu.classList.toggle("mostrar")
  }
  return (
    <div className='header'>
      <div className='menu-mobile'>
        <nav>
          <img src={logo} alt="Logo icon" />
          <img className='close-icon' src={close} alt="close icon" onClick={ocultarMobile} />
        </nav>
        <div className='mobile-links'>
          <p>ABOUT</p>
          <p>CAREERS</p>
          <p>EVENTS</p>
          <p>PRODUCTS</p>
          <p>SUPPORT</p>
        </div>
    </div>
    <nav>
      <div>
        <img src={logo} alt="logo image" className='icon-nav' />
      </div>

      <div className='header-links' onClick={mostrarMobile}>
        <a href="">About</a>
        <a href="">Careers</a>
        <a href="">Events</a>
        <a href="">Products</a>
        <a href="">Support</a>
      </div>
    </nav>


    <div className='header-text'>
      <p>IMMMERSIVE EXPERIENCES THAT DELIVER</p>
    </div>
    </div>
  )
}
