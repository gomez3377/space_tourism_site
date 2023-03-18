import React, { useContext } from "react";



import { DataContext } from "../../context/data.context";
import DestinationStop from "../../components/destination-stop/destination-stop.component";
import BackgroundImage from "../../components/background-image/background-image.component";
import DestinationImage from "../../components/destination-image/destination-image.component";
import { DestinationContent } from "./destination.styles";
import PageHeader from "../../components/page-header/page-header.components";




const DestinationPage = () => {
  const {currentDestination} = useContext(DataContext)
const {images, name} = currentDestination
 
const {png, webd} = images

  return (
    <>
    <BackgroundImage url='destination' />
      <DestinationContent>
      <PageHeader pageNumber="01" title="Pick Your Destination"/>
      <section>

      <DestinationImage  url={png} name={name}/>
      <DestinationStop currentDestination={currentDestination} />
      </section>
      </DestinationContent>
  </>
   
  );
};

export default DestinationPage;
