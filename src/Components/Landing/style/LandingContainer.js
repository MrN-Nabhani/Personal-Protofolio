import styled from "styled-components";

const LandingContainer = styled.div`
  position: relative;
  padding-top: 7rem;

  overflow: hidden;
  z-index: -10;
  background-color: #333;
  box-shadow: 0px 1px 10px 3px #333;
  height: 35rem;

  @media only screen and (min-width: ${({theme}) => theme.screen.desktop}) {
    height: auto;
  }
`;

export default LandingContainer;
