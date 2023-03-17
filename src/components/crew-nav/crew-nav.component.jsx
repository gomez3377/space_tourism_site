import React, { useContext } from 'react'
import { DataContext } from '../../context/data.context'
import Button from '../button/button.component'
import { nanoid } from 'nanoid'

const CrewNav = () => {
  const {setCurrentCrewMember, crew} = useContext(DataContext)

 

  return (
   <div>
     {crew.map(member => <Button key={nanoid()} onClick={() => setCurrentCrewMember(member)}>{member.name}</Button>)}
   </div>
  )
}

export default CrewNav