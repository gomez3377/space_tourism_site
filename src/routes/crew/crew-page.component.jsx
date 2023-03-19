import { Fragment, useContext } from 'react'
import BackgroundImage from '../../components/background-image/background-image.component'
import CrewImageComponent from '../../components/crew-image/crew-image.component'
import CrewMemberInfo from '../../components/crew-member-info/crew-member-info.component'
import { DataContext } from '../../context/data.context'
import { CrewPageContent } from './crew-page.styles'


const CrewPage = () => {
  const {currentCrewMember} = useContext(DataContext)
  const {images, name} = currentCrewMember
  return (
    <>
    <BackgroundImage url='crew' />
    <CrewPageContent>



          <CrewMemberInfo currentCrewMember={currentCrewMember} />
          <CrewImageComponent url={images.png} name={name}/>
    </CrewPageContent>
    </>
  )
}

export default CrewPage