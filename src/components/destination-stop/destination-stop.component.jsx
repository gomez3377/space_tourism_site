import React from 'react'

import DestinationNavBar from '../destination-nav/destination-nav.component'
import { DestinationFacts, DestinationStopContainer } from './destination-stop.styles'



const DestinationStop = ({currentDestination}) => {
    const {name, description, distance, travel} = currentDestination


  return (
      <DestinationStopContainer>
   
     <DestinationNavBar />
     <h2>{name}</h2>
     <p>
      {description}
     </p>
     <hr />
     <DestinationFacts>
         <div id="distance">
             <p className="subheading-2">Avg Distance</p>
             <p className="subheading-1">{distance}</p>
         </div>
         <div id="travel-time">
             <p className="subheading-2">Est. Travel Time</p>
             <p className="subheading-1">{travel}</p>
         </div>
     </DestinationFacts>

   </DestinationStopContainer>
  )
}

export default DestinationStop