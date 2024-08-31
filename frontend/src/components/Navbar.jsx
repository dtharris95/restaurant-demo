import React, { useEffect, useState } from 'react'
import './Navbar.css'
import faviconlg3 from '../img/faviconlg3.png'
import { Link, NavLink, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUtensils, faXmark } from '@fortawesome/free-solid-svg-icons'
// import DropdownButton from './DropdownButton'
import Dropdown from './Dropdown'
import pb from '../lib/pocketbase'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [title, setTitle] = useState([]);
  const [firstTab, setFirstTab] = useState([]);
  const [secondTab, setSecondTab] = useState([]);
  const [thirdTab, setThirdTab] = useState([]);
  const [fourthTab, setFourthTab] = useState([]);

  const getTitle = () => {
    pb
    .collection('website_name')
    .getOne('ery6x627dvojngx') // Title
    .then((res) => setTitle(res));
  }
  useEffect(() => {
    getTitle();
  }, []);
  
  const getFirstTab = () => {
    pb
    .collection('website_tabs')
    .getOne('c9zcvx3x9q1j9vt') // Home Tab
    .then((res) => setFirstTab(res));
  }
  useEffect(() => {
    getFirstTab();
  }, []);

  const getSecondTab = () => {
    pb
    .collection('website_tabs')
    .getOne('pwilokkhwsu2sgx') // Menu Tab
    .then((res) => setSecondTab(res));
  }
  useEffect(() => {
    getSecondTab();
  }, []);

  const getThirdTab = () => {
    pb
    .collection('website_tabs')
    .getOne('imoymgr1kf0flbj') // Services Tab
    .then((res) => setThirdTab(res));
  }
  useEffect(() => {
    getThirdTab();
  }, []);

  const getFourthTab = () => {
    pb
    .collection('website_tabs')
    .getOne('71rr954xasmc9ls') // Contact Tab
    .then((res) => setFourthTab(res));
  }
  useEffect(() => {
    getFourthTab();
  }, []);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='nav-title'><img className='logo-image' src={faviconlg3}></img>{title.websiteName}</Link>
        <div className='menu' onClick={() => setOpenDropdown(!openDropdown)}>
          <button className='dropdown'><FontAwesomeIcon icon={click ? faXmark : faBars} /></button>
        </div>
        <ul className={openDropdown ? 'open' : 'close'}>
          <li><NavLink to='/home' className='dropdown-links' onClick={closeMobileMenu}>{firstTab.tabName}</NavLink></li>
          <li><NavLink to='/menu' className='dropdown-links'>{secondTab.tabName}</NavLink></li>
          <li><NavLink to='/services' className='dropdown-links'>{thirdTab.tabName}</NavLink></li>
          <li><NavLink to='/contact' className='dropdown-links'>{fourthTab.tabName}</NavLink></li>
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
