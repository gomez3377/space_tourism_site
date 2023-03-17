
import { Fragment } from "react";
import BackgroundImage from "../../components/background-image/background-image.component";
import './home.styles.scss'

const HomePage = () => {
  return (
    <Fragment>
     <BackgroundImage />
     <div className="homepage">

          
        <div className="left-side-content">

        <h5>So, You Want to Travel To</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        </div>
          <div className="right-side-content">
            <button className="home-button">Explore</button>
          </div>
     
     </div>
    </Fragment>
  );
};

export default HomePage;
