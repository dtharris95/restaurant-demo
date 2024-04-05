import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <h1 className='nav-title'>Restaurant Demo</h1>
                <ul className='nav-menu'>
                    <li className='nav-item'>Menu</li>
                    <li className='nav-item'>Services</li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
