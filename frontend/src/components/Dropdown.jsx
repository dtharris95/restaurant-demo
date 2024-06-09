import React from 'react'
import DropdownButton from './DropdownButton'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Dropdown = () => {
  return (
    <DropdownButton />
  )
}

export default Dropdown