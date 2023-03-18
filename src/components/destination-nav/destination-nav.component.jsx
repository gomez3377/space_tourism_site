
import { useContext } from 'react'
import { DataContext } from '../../context/data.context'
import Button from '../button/button.component'
import { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { nanoid } from 'nanoid'
import './destination-nav.styles.jsx'
import { DestinationNavBarContainer } from './destination-nav.styles.jsx'



const DestinationNavBar = () => {
  const {currentDestination,destinations, setCurrentDestination} = useContext(DataContext)


  return (
   <DestinationNavBarContainer>
           {destinations.map(destination => <Button className={destination === currentDestination && "active"}
            buttonType={BUTTON_TYPE_CLASSES.destinationTab} key={nanoid()} onClick={() => setCurrentDestination(destination)} >{destination.name}</Button>)}
   </DestinationNavBarContainer>
  )
}

export default DestinationNavBar