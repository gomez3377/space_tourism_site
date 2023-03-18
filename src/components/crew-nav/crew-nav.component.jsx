import React, { useContext } from 'react'
import { DataContext } from '../../context/data.context'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { nanoid } from 'nanoid'

const CrewNav = () => {
  const {setCurrentCrewMember, crew} = useContext(DataContext)

 

  return (
   <div>
     {crew.map(member => <Button key={nanoid()} buttonType={BUTTON_TYPE_CLASSES.crewButton} onClick={() => setCurrentCrewMember(member)}></Button>)}
   </div>
  )
}

export default CrewNav