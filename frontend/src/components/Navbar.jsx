import React, { useState } from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons'
import DropdownButton from './DropdownButton'
import Dropdown from './Dropdown'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='nav-title' onClick={closeMobileMenu}>
                Harris Kitchen Table
                <FontAwesomeIcon className='page-icon' icon={faUtensils} />
              </Link>
              <DropdownButton />
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Link to='/menu' className='dropdown-links' onClick={closeMobileMenu}>Menu</Link>
                    <Link to='/About' className='dropdown-links' onClick={closeMobileMenu}>About</Link>
                    <Link to='/contact' className='dropdown-links' onClick={closeMobileMenu}>Contact</Link>
                </ul>
            </div>
        </nav>
    </>
  )
}

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path:resolvedPath.pathname, end: true })
//   return (
//     <li className={isActive ? 'nav-menu' : 'nav-menu'}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }

export default Navbar
