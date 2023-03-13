import { Fragment } from 'react'
import crewMember from '../../assets/crew/image-douglas-hurley.png'

const CrewPage = () => {
  return (
    <Fragment>
      <section className="crew-page-content">
        <div className="left-side-content">
      <h5><span className="page-number">02</span> Meet Your Crew</h5>
          <h4>Commander</h4>
          <h3>Douglas Hurley</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
          <nav className="crew-nav">
              <ul>
                  <li><div className="crew-nav-btn active"></div></li>
                  <li><div className="crew-nav-btn"></div></li>
                  <li><div className="crew-nav-btn"></div></li>
                  <li><div className="crew-nav-btn"></div></li>
              </ul>
          </nav>
        </div>
        <div className="right-side-content">
            <img src={crewMember} alt="crew-member" />
        </div>
      </section>
    </Fragment>
  )
}

export default CrewPage