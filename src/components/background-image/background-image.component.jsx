import { crewBackgroundImages } from "../../assets/crew/crew-member-image";
import { techBackgroundImages } from "../../assets/technology/technology-images";
import { destinationBackgroundImages } from "../../assets/destination/destination-image-files";
import homeBackgroundDesktop from "../../assets/home/background-home-desktop.jpg";

const { crewBackgroundDesktop, crewBackgroundMobile, crewBackgroundTablet } =
  crewBackgroundImages;
const {
  technologyBackgroundDesktop,
  technologyBackgroundMobile,
  technologyBackgroundTablet,
} = techBackgroundImages;
const {
  destinationBackgroundDesktop,
  destinationBackgroundMobile,
  destinationBackgroundTablet,
} = destinationBackgroundImages;

const BACKGROUND_IMAGE_TYPES = {
  crew: 'crew',
  tech: 'tech',
  destination: 'destination',
};
const { crew, tech, destination } = BACKGROUND_IMAGE_TYPES;

const displayBackground = (url) => {
  switch (url) {
    case crew:
      return crewBackgroundDesktop;
    case tech:
      return technologyBackgroundDesktop;
    case destination:
      return destinationBackgroundDesktop;
    default:
      return homeBackgroundDesktop;
  }
};

const BackgroundImage = ({url}) => {
  return <img src={displayBackground(url)} alt="background-image" />;
};

export default BackgroundImage;
