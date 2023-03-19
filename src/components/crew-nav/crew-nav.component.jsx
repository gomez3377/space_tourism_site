import React, { useContext } from 'react'
import { DataContext } from '../../context/data.context'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { nanoid } from 'nanoid'
import { CrewNavContainer } from './crew-nav.styles'

const CrewNav = () => {
  const {currentCrewMember,setCurrentCrewMember, crew} = useContext(DataContext)

 

  return (
   <CrewNavContainer>
     {crew.map(member => <Button key={nanoid()} className={member === currentCrewMember && 'active'} buttonType={BUTTON_TYPE_CLASSES.crewButton} onClick={() => setCurrentCrewMember(member)}></Button>)}
   </CrewNavContainer>
  )
}

export default CrewNav