import React from "react";
import Gallery from "./ImageGallary/ImageGallary.jsx";
import IllustrationContainer from "./style/IllustrationContainer";

/* https://www.npmjs.com/package/react-image-gallery */

const IllustrationSection = ({ id }) => {
  return (
    <IllustrationContainer id={id}> 
      <Gallery />
    </IllustrationContainer>
  );
};

export default IllustrationSection;
