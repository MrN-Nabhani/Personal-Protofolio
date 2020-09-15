import styled from "styled-components";

const MenuList = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  height: 100vh;
  width: 100%;

  background: rgba(255, 255, 255, 0.5); /*${({ theme }) => theme.colors.primaryShadow};*/
  backdrop-filter: blur(5px);

  display: flex;
  flex-flow: column nowrap;  
  justify-content: center;
  text-align: center;

  a {
    margin: 2rem;
    font-size: ${({ theme }) => theme.font.size.mega};
    font-weight: bolder;
    
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    border: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.screen.tablet}){
    display: none;
  }
`;

export default MenuList;
