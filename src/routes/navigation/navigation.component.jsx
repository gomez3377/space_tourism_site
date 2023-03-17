
import { Link, Outlet, useParams } from 'react-router-dom'
import './navigation.styles.scss'
import SpaceLogo from '../../assets/shared/logo.svg'

const Navigation = () => {

  


  return (

<>
   

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

</>
  )
}

export default Navigation