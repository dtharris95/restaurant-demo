import React, { useState } from 'react'
import './Navbar.css'
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons'
// import DropdownButton from './DropdownButton'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='nav-title'>Harris Kitchen Table</Link>
        <div className='menu' onClick={() => setOpenDropdown(!openDropdown)}>
          <button className='dropdown'><FontAwesomeIcon icon={click ? faXmark : faBars} /></button>
        </div>
        <ul className={openDropdown ? 'open' : 'close'}>
          <li><NavLink to='/menu' className='dropdown-links'>Menu</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
        {/* <nav className='navbar'>
              <Link to='/' className='nav-title' onClick={closeMobileMenu}>
                Harris Kitchen Table
                <FontAwesomeIcon className='page-icon' icon={faUtensils} />
              </Link>
              <div className='dropdown' onClick={() => setOpenDropdown(!openDropdown)}>
                <button className='dropdownbtn' onClick={handleClick}><FontAwesomeIcon icon={click ? faXmark : faBars} /></button>
              </div>
              <ul className={openDropdown ? 'nav-menu' : ''}>
                  <li><NavLink to='/Menu' className='dropdown-links' onClick={closeMobileMenu}>Menu</NavLink></li>
                  <li><NavLink to='/About' className='dropdown-links' onClick={closeMobileMenu}>About</NavLink></li>
                  <li><NavLink to='/contact' className='dropdown-links' onClick={closeMobileMenu}>Contact</NavLink></li>
              </ul>
        </nav> */}
    </>
  )
}

export default Navbar
