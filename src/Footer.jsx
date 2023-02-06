import React from 'react'
import './styles.css'
import logo from './images/logo.svg'
import fb from './images/icon-facebook.svg'
import tw from './images/icon-twitter.svg'
import pn from './images/icon-pinterest.svg'
import ig from './images/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer>
        <div className='logoLinks'>
            <img src={logo} alt="Logo image" />
            <div className='footer-links'>
                <a href="">About</a>
                <a href="">Careers</a>
                <a href="">Events</a>
                <a href="">Products</a>
                <a href="">Support</a>
            </div>
        </div>
        
        <div className='footer-rigth'>
            <div className='footer-icons'>
                <img src={fb} alt="facebook icon" />
                <img src={tw} alt="twitter icon" />
                <img src={pn} alt="pinterest icon" />
                <img src={ig} alt="instagram icon" />
            </div>
            <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
    </footer>
  )
}
