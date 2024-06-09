import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const DropdownButton = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='dropdown-container'>
            <div className='dropdown-menu'>
                <button className='dropdown-button' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} />
                </button>
                <div className='dropdown-content'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <CustomLink to='/menu' className='dropdown-links' onClick={closeMobileMenu}>Menu</CustomLink>
                        <CustomLink to='/About' className='dropdown-links' onClick={closeMobileMenu}>About</CustomLink>
                        <CustomLink to='/contact' className='dropdown-links' onClick={closeMobileMenu}>Contact</CustomLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path:resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active' : ''}>
        <Link to={to} {...props}>
            {children}
        </Link>
        </li>
    )
}

export default DropdownButton