
import { useContext } from 'react'
import { DataContext } from '../../context/data.context'
import DestinationTab from '../destination-tabs/destination-tab.component'
import './destination-nav.styles.scss'



const DestinationNavBar = () => {
  const {destinations} = useContext(DataContext)


  return (
   <nav className='destination-nav'>
       <ul>
           {destinations.map(destination => <DestinationTab destination={destination} />)}
       </ul>
   </nav>
  )
}

export default DestinationNavBar