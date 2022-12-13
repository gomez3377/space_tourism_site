import React from "react";
import moon from "../assets/destination/image-moon.png";
import DestinationNavBar from "./DestinationNavBar";
const DestinationPage = () => {
  return (
    <main>
      <section className="destination-page-content">
      <h5>
        <span className="page-number">01</span> Pick Your Destination
      </h5>
        <div className="left-side-content">
          <img src={moon} alt="moon" />
        </div>
        <div className="right-side-content">
          <DestinationNavBar />
          <h2>Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr />
          <div className="destination-facts">
              <div className="distance">
                  <p className="subheading-2">Avg Distance</p>
                  <p className="subheading-1">384,400 KM</p>
              </div>
              <div className="travel-time">
                  <p className="subheading-2">Est. Travel Time</p>
                  <p className="subheading-1">3 Days</p>
              </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default DestinationPage;
