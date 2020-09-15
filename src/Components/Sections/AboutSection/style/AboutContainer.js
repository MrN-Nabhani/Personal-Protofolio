import styled from "styled-components";

const AboutContainer = styled.section`
  position: relative;
  /* min-height: 100vh; */
  
  padding-top: 5rem;
  margin: auto;
  
  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    width: 80%;
    /* min-height: 60vh; */
    /* padding-top: 0rem; */
  }
`;

export const Mannequin = styled.img`
  position: absolute;
  width: 55%;
  opacity: 0.5;
  z-index: -1;
  left: 0;

  -webkit-filter: drop-shadow(-6px 0px 0px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(-6px 0px 0px rgba(0, 0, 0, 0.5));
  @media only screen and (min-width: ${({ theme }) => theme.screen.largeDevice}){
    width: 30%;
  }
  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}) {
    width: 20%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.screen.desktop}) {
    width: 10%;
  }
`;

export default AboutContainer;
