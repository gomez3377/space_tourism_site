import React from "react";
import { destinationImages } from "../../assets/destination/destination-image-files";

const {
  marsPng,
  marsWebp,
  moonPng,
  moonWebp,
  europaPng,
  europaWebp,
  titanPng,
  titanWebp,
} = destinationImages;

const DESTINATION_IMAGE_TYPES = {
  moon: {
    png: "./assets/destination/image-moon.png",
    webp: "./assets/destination/image-moon.webp",
  },
  mars: {
    png: "./assets/destination/image-mars.png",
    webp: "./assets/destination/image-mars.webp",
  },
  europa: {
    png: "./assets/destination/image-europa.png",
    webp: "./assets/destination/image-europa.webp",
  },
  titan: {
    png: "./assets/destination/image-titan.png",
    webp: "./assets/destination/image-titan.webp",
  },
};

const { moon, mars, europa, titan } = DESTINATION_IMAGE_TYPES;

const selectImage = (url) => {
  switch (url) {
    case moon.png:
      return moonPng;
    case moon.webp:
      return moonWebp;
    case mars.png:
      return marsPng;
    case mars.webp:
      return marsWebp;
    case europa.png:
      return europaPng;
    case europa.webp:
      return europaWebp;
    case titan.png:
      return titanPng;
    case titan.webp:
      return titanWebp;
    default:
      return console.error("Image File couldn't be found");
  }
};

const DestinationImage = ({ url, name }) => {
  return <img src={selectImage(url)} alt={name} />;
};

export default DestinationImage;
