import React from 'react'

const DestinationNavBar = () => {
  return (
   <nav className='destination-nav'>
       <ul>
           <li><button className='destination-btn'>Moon</button></li>
           <li><button className='destination-btn'>Mars</button></li>
           <li><button className='destination-btn'>Europa</button></li>
           <li><button className='destination-btn'>Titan</button></li>
       </ul>
   </nav>
  )
}

export default DestinationNavBar