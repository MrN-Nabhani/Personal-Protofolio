import styled from "styled-components";

const PCsvg = styled.object`
  display: block;
  margin: auto;
  
  @media only screen and (min-width: ${({ theme }) => theme.screen.desktop}){
    margin-right: 5rem;
  }
`;

export default PCsvg;
