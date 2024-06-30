import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
      <nav>
        <div className='dropdown-container'>
                <button className='dropdown-button' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </button>
                <div className='dropdown-content'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/menu' className='dropdown-links' onClick={closeMobileMenu}>Menu</Link>
                        <Link to='/About' className='dropdown-links' onClick={closeMobileMenu}>About</Link>
                        <Link to='/contact' className='dropdown-links' onClick={closeMobileMenu}>Contact</Link>
                    </ul>
                </div>
        </div>
      </nav>
    )
}

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path:resolvedPath.pathname, end: true })
//     return (
//         <li className={isActive ? 'active' : ''}>
//         <Link to={to} {...props}>
//             {children}
//         </Link>
//         </li>
//     )
// }

export default Dropdown