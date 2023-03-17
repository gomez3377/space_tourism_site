import { techImages } from "../../assets/technology/technology-images"

const {launchVehicleLandscape, launchVehiclePortrait, spaceCapsuleLandscape, spaceCapsulePortrait, spaceportLandscape, spaceportPortrait} = techImages

const TECH_IMAGE_FILES = {
    launchVehicle: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg"
    },
    spaceport: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg"
    },
    spaceCapsule: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg"
    }
}

const {launchVehicle, spaceCapsule, spaceport} = TECH_IMAGE_FILES


const setImage = (url) => {
    switch(url){
        case launchVehicle.portrait:
            return launchVehiclePortrait;
            case launchVehicle.landscape:
                return launchVehicleLandscape;
        case spaceCapsule.portrait:
            return spaceCapsulePortrait;
            case spaceCapsule.landscape:
                return spaceCapsuleLandscape;
        case spaceport.portrait:
            return spaceportPortrait;
            case spaceport.landscape:
                return spaceportLandscape;
      default:
          return console.error("image file doesn't exist")
    }
}




const TechImage = ({name, url}) => {
  return (
    <img src={setImage(url)} alt={name} />
  )
}

export default TechImage