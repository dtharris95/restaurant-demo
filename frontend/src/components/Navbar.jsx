import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to='/' className='nav-title'>Harris Kitchen Table</Link>
                <ul className='nav-menu'>
                    <CustomLink to='/menu'>Menu</CustomLink>
                    <CustomLink to='/About'>About</CustomLink>
                    <CustomLink to='/contact'>Contact</CustomLink>
                </ul>
            </div>
        </nav>
    </>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path:resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? 'nav-menu-item' : 'nav-menu-item'}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar
