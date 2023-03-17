import { Fragment, useContext } from 'react'
import BackgroundImage from '../../components/background-image/background-image.component'
import CrewImageComponent from '../../components/crew-image/crew-image.component'
import CrewMemberInfo from '../../components/crew-member-info/crew-member-info.component'
import { DataContext } from '../../context/data.context'


const CrewPage = () => {
  const {currentCrewMember} = useContext(DataContext)
  const {images, name} = currentCrewMember
  return (
    <>
    <BackgroundImage url='crew' />
      <h5><span className="page-number">02</span> Meet Your Crew</h5>
          <CrewMemberInfo currentCrewMember={currentCrewMember} />
          <CrewImageComponent url={images.png} name={name}/>
    </>
  )
}

export default CrewPage