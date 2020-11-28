import styled from "styled-components";

const LandingContainer = styled.div`
  position: relative;
  padding-top: 7rem;

  overflow: hidden;
  z-index: -10;
  /* background-color: #333; */
  background-image: url('Assets/photos/Pillars-of-Creation.jpg');
  background-position: center;
  background-size: cover;

  width: auto;
  height: 100vh;
  /* height: 35rem; */
  box-shadow: 0px 1px 10px 3px #333;

  @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
    height: 100vh;
  }
`;

export default LandingContainer;
