import React from "react";
// import "./LandingStyling.scss";
import "./LandingShootingStars.scss";

import LandingContainer from "./style/LandingContainer";
import Phrase from "./style/Phrase";
import Header from "./style/Header";
import PCsvg from './style/PC';

const landing = () => {
  const renderShootingStar = (starCount) => {
    let comuElems = [];

    for (let starNo = 0; starNo < starCount; ++starNo)
      comuElems.push(<div key={starNo} className="shooting_star"></div>);

    return [...comuElems];
  };

  return (
    <LandingContainer>
      <div className="night">{renderShootingStar(20)}</div>
      <Phrase animationDelay="1s">
        <Header animationDelay="0s"> Design or Code </Header>
        <Header animationDelay="2s"> Mr.N Got You Covered! </Header>
      </Phrase>

      <PCsvg
        className="pc"
        type="image/svg+xml"
        data="Assets/svg/PC/PC.svg"
      ></PCsvg>
    </LandingContainer>
  );
};

export default landing;
