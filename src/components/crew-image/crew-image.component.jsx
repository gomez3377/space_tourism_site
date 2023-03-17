import { crewImages } from "../../assets/crew/crew-member-image";

const {
  douglasHurleyPng,
  douglasHurleyWebp,
  markShuttleworthPng,
  markShuttleworthWebp,
  victorGloverPng,
  victorGloverWebp,
  anoushehAnsariPng,
  anoushehAnsariWebp,
} = crewImages;

const CREW_IMAGE_TYPES = {
  douglasHurley: {
    png: "./assets/crew/image-douglas-hurley.png",
    webp: "./assets/crew/image-douglas-hurley.webp",
  },
  markShuttleworth: {
    png: "./assets/crew/image-mark-shuttleworth.png",
    webp: "./assets/crew/image-mark-shuttleworth.webp",
  },
  victorGlover: {
    png: "./assets/crew/image-victor-glover.png",
    webp: "./assets/crew/image-victor-glover.webp",
  },
  anoushehAnsari: {
    png: "./assets/crew/image-anousheh-ansari.png",
    webp: "./assets/crew/image-anousheh-ansari.webp",
  },
};

const { markShuttleworth, douglasHurley, victorGlover, anoushehAnsari } =
  CREW_IMAGE_TYPES;

const selectImage = (url) => {
  switch (url) {
    case markShuttleworth.png:
      return markShuttleworthPng;
    case markShuttleworth.webp:
      return markShuttleworthWebp;
    case douglasHurley.png:
      return douglasHurleyPng;
    case douglasHurley.webp:
      return douglasHurleyWebp;
    case victorGlover.png:
      return victorGloverPng;
    case victorGlover.webp:
      return victorGloverWebp;
    case anoushehAnsari.png:
      return anoushehAnsariPng;
    case anoushehAnsari.webp:
      return anoushehAnsariWebp;
    default:
      return console.error("image file couldn't be found");
  }
};

const CrewImageComponent = ({url, name}) => {
  return <img src={selectImage(url)} alt={name} />;
};

export default CrewImageComponent;
