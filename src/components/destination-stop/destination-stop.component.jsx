import React from 'react'
import DestinationImage from '../destination-image/destination-image.component'
import DestinationNavBar from '../destination-nav/destination-nav.component'



const DestinationStop = ({currentDestination}) => {
    const {name, images, description, distance, travel} = currentDestination
const {png, webd} = images

  return (
      <>
    <div className="left-side-content">
    <DestinationImage  url={png} name={name}/>
   </div>
   <div className="right-side-content">
     <DestinationNavBar />
     <h2>{name}</h2>
     <p>
      {description}
     </p>
     <hr />
     <div className="destination-facts">
         <div className="distance">
             <p className="subheading-2">Avg Distance</p>
             <p className="subheading-1">{distance}</p>
         </div>
         <div className="travel-time">
             <p className="subheading-2">Est. Travel Time</p>
             <p className="subheading-1">{travel}</p>
         </div>
     </div>

   </div>
   </>
  )
}

export default DestinationStop