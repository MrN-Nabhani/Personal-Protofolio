import React from "react";
import ImageGallery from "react-image-gallery";
import "./styling.scss";

const images = [
  {
    original:  "Assets/digitalArt/DOPAMINE.png",
    thumbnail: "Assets/digitalArt/DOPAMINE.png",
  },
  {
    original:  "Assets/digitalArt/Brothers_Grad_Card.png",
    thumbnail: "Assets/digitalArt/Brothers_Grad_Card.png",
  },
  {
    original:  "Assets/digitalArt/Tanash-YouTube-Cover.png",
    thumbnail: "Assets/digitalArt/Tanash-YouTube-Cover.png",
  },
];

const Gallery = () => {
  return (
    <ImageGallery items={images} autoPlay/>
  );
};

export default Gallery;
