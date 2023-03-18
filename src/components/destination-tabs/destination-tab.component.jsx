import { useContext } from 'react'
import { DataContext } from '../../context/data.context'

const DestinationTab = ({destination}) => {

    const {setCurrentDestination} = useContext(DataContext)

    const switchDestinationHandler = () => setCurrentDestination(destination)
    const {name} = destination
  return (
    <button onClick={switchDestinationHandler}>{name}</button>
  )
}

export default DestinationTab