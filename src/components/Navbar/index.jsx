import React from 'react'
import './nav.css'

export default function navbar() {
  return (
    <nav className='nav--container'>
        <div>
        <img className='nav--logo'
        src={require('../../images/airbnb-logo.png')} 
        alt='logo prompt'/>
        </div>
        <div className='nav--button--container'>
            <span className="nav--button">Login</span>
            <span className="nav--button">Register</span>
            <span className="nav--button">About Us</span>
        </div>
    </nav>
  )
}
