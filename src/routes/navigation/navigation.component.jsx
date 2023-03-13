import React, { Fragment, useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import './navigation.styles.scss'
import SpaceLogo from '../../assets/shared/logo.svg'
import homeBackgroundImg from '../../assets/home/background-home-desktop.jpg'
import destinationBackgroundImg from '../../assets/destination/background-destination-desktop.jpg'
import crewBackgroundImg from '../../assets/crew/background-crew-desktop.jpg'
import technologyBackgroundImg from '../../assets/technology/background-technology-desktop.jpg'
const Navigation = () => {
  
 const [currentBackground, setCurrentBackground] = useState(homeBackgroundImg)
  const currentPage = window.location.href

useEffect(() => {
  const backgroundImageStyle = () => {
    let backgroundImage = ''
      switch (currentPage) {
        case 'http://127.0.0.1:5173/technology':
        backgroundImage = technologyBackgroundImg
        break;
        case 'http://127.0.0.1:5173/crew':
        backgroundImage = crewBackgroundImg
        break;
        case 'http://127.0.0.1:5173/destination':
        backgroundImage = destinationBackgroundImg
        break;
        default:
        backgroundImage = homeBackgroundImg
        break;

      }
      return backgroundImage
      
  }
  setCurrentBackground(backgroundImageStyle())
  console.log(currentPage)
},[currentPage])

  return (


    <div style={{backgroundImage: `url(${currentBackground})`}} className='navigation'>

    <header className='nav-bar'>
        <img src={SpaceLogo} alt="logo" />
        <hr />
        <nav className='nav-links'>
            <ul>
                <li><Link to="/" className='nav-active'><span>00</span> Home</Link></li>
                <li><Link to="/destination"><span>01</span> Destination</Link></li>
                <li><Link to="/crew"><span>02</span> Crew</Link></li>
                <li><Link to="/technology"><span>03</span> Technology</Link></li>
            </ul>
        </nav>
    </header>
    <Outlet/>
    </div>
  )
}

export default Navigation