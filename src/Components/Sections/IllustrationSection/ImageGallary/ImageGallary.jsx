import React from "react";
import ImageGallery from "react-image-gallery";
import "./styling.scss";

const images = [
  {
    original:  "Assets/digitalArt/DOPAMINE.png",
    thumbnail: "Assets/digitalArt/DOPAMINE.png",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Gallery = () => {
  return (
    <ImageGallery items={images} />
  );
};

export default Gallery;
