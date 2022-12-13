import React from 'react'
import logo from '../assets/shared/logo.svg'


const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo" />
        <hr />
        <nav className='header-nav'>
            <ul>
                <li><a className='nav-active' href=""><span>00</span> Home</a></li>
                <li><a href=""><span>01</span> Destination</a></li>
                <li><a href=""><span>02</span> Crew</a></li>
                <li><a href=""><span>03</span> Technology</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header