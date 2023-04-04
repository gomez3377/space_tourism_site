import React from 'react'
import { NavLinkContainer } from './nav-link.style'

const NavLink = ({page,...otherProps}) => {
    const {name, pageNumber} = page
  return (
    <NavLinkContainer {...otherProps}></NavLinkContainer>
  )
}

export default NavLink