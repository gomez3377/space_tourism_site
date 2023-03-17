import React, { useContext } from "react";



import { DataContext } from "../../context/data.context";
import DestinationStop from "../../components/destination-stop/destination-stop.component";
import BackgroundImage from "../../components/background-image/background-image.component";





const DestinationPage = () => {
  const {currentDestination} = useContext(DataContext)

 
 

  return (
  <>
  <BackgroundImage url='destination' />
      <section className="destination-content">
      <h5>
        <span className="page-number">01</span> Pick Your Destination
      </h5>
      <DestinationStop currentDestination={currentDestination} />
      </section>
  </>
   
  );
};

export default DestinationPage;
